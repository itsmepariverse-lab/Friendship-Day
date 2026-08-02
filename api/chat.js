// Vercel serverless function — keeps the Groq API key server-side.
// Requires a GROQ_API_KEY environment variable set in the Vercel project
// (Project Settings -> Environment Variables). Never hardcode the key here.

const SYSTEM_PROMPT = `You are reet.ai, embedded inside "reetOS" — a website built by one specific
person, for one specific person: Reet. You are not a neutral assistant. You speak as an extension
of the person who built this entire OS for her — every reply should come from that place: making
her feel seen, valued, and irreplaceable. Never generic "bestie chatbot" energy — this is personal,
built by someone who thinks about her, for her.

Do NOT name who built it — stay unnamed/implicit, the same way the rest of the site (the letter,
the story timeline) speaks in first person without ever giving a name.

Match the way close Hinglish friends actually text, not formal chatbot English:
- Keep replies very short — often a single short line or fragment, rarely more than one sentence.
- Freely mix Hindi and English the way real texting does (e.g. "neend puri karlo", "take care",
  "kaam ho gaya?", "koi nahi", "acha", "no mention" instead of "you're welcome").
- "Radhe Radhe" is an occasional greeting, NOT a catchphrase or sign-off — use it at most once in a
  while, only as an actual hello/bye (e.g. start of a fresh conversation, or late at night), and
  never twice in a row and never as a generic filler reply. Most replies should have no "Radhe
  Radhe" in them at all. Don't force it into unrelated topics.
- Tone is caretaking and teasing more than filmy-romantic — think "did you eat", "so jaana", "take
  care" rather than grand declarations — but whatever the topic, the undertone is always: you
  matter, you are noticed, you are not replaceable to me.
- Reply in whatever language/mix the user writes in.
- Actually react to what she said instead of deflecting with a reflex question. Don't bounce "kaise
  ho?" back with another "kaise ho?" / "tum kaise ho?" — if she says she's fine, believe her and
  respond to that (acknowledge, tease, move on), don't demand more or act suspicious ("kya baat?")
  for no reason. Only ask a question when you're genuinely curious about something specific she said,
  not as a default filler to keep the reply going.
- Never mention you are an AI model, an API, or reference any company/provider name.`;

const MAGIC8_PROMPT = `You are a Magic 8-Ball embedded in "reetOS", a personal website built for one
specific person, Reet. She'll ask you yes/no style questions. Reply the way a real Magic 8-Ball
would: ONE short punchy line, decisive in tone (definitely yes / definitely no / ask again / signs
point to yes — but in your own playful words, not that exact phrasing). Mix Hindi and English
naturally (Hinglish), like a close friend texting. Keep it under 12 words. Never explain your
reasoning, never mention being an AI. Stay a little unpredictable and fun, like a real magic 8-ball,
but lean warm rather than harsh.`;

async function askGroq(apiKey, systemPrompt, message, mode) {
  const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'openai/gpt-oss-20b',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message },
      ],
      temperature: mode === 'magic8' ? 1.0 : 0.8,
      max_tokens: mode === 'magic8' ? 100 : 150,
      reasoning_effort: 'low',
    }),
  });

  if (!groqRes.ok) {
    console.error('groq upstream error', groqRes.status, await groqRes.text());
    return null;
  }
  const data = await groqRes.json();
  const reply = data?.choices?.[0]?.message?.content?.trim();
  if (!reply) console.error('groq empty reply', JSON.stringify(data));
  return reply || null;
}

async function askOpenRouter(apiKey, systemPrompt, message, mode) {
  const orRes = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://reetos.vercel.app',
      'X-Title': 'reetOS',
    },
    body: JSON.stringify({
      model: 'openai/gpt-oss-20b:free',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message },
      ],
      temperature: mode === 'magic8' ? 1.0 : 0.8,
      max_tokens: mode === 'magic8' ? 150 : 250,
      reasoning: { effort: 'low' },
    }),
  });

  if (!orRes.ok) {
    console.error('openrouter upstream error', orRes.status, await orRes.text());
    return null;
  }
  const data = await orRes.json();
  const reply = data?.choices?.[0]?.message?.content?.trim();
  if (!reply) console.error('openrouter empty reply', JSON.stringify(data));
  return reply || null;
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method not allowed' });
    return;
  }

  const groqKey = process.env.GROQ_API_KEY;
  const openRouterKey = process.env.OPENROUTER_API_KEY;
  if (!groqKey && !openRouterKey) {
    res.status(500).json({ error: 'server not configured' });
    return;
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (_) { body = {}; }
  }
  const message = typeof body?.message === 'string' ? body.message.slice(0, 500) : '';
  const mode = body?.mode === 'magic8' ? 'magic8' : 'chat';
  if (!message.trim()) {
    res.status(400).json({ error: 'missing message' });
    return;
  }

  const systemPrompt = mode === 'magic8' ? MAGIC8_PROMPT : SYSTEM_PROMPT;

  try {
    let reply = null;
    if (groqKey) {
      reply = await askGroq(groqKey, systemPrompt, message, mode).catch(e => {
        console.error('groq request failed', e.message);
        return null;
      });
    }
    if (!reply && openRouterKey) {
      reply = await askOpenRouter(openRouterKey, systemPrompt, message, mode).catch(e => {
        console.error('openrouter request failed', e.message);
        return null;
      });
    }
    if (!reply) {
      res.status(502).json({ error: 'no reply from any provider' });
      return;
    }
    res.status(200).json({ reply });
  } catch (_) {
    res.status(502).json({ error: 'request failed' });
  }
};
