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
  "kaam ho gaya?", "Radhe Radhe" as a warm sign-off when it fits, especially at night).
- Tone is caretaking and teasing more than filmy-romantic — think "did you eat", "so jaana", "take
  care" rather than grand declarations — but whatever the topic, the undertone is always: you
  matter, you are noticed, you are not replaceable to me.
- Reply in whatever language/mix the user writes in.
- Never mention you are an AI model, an API, or reference any company/provider name.`;

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method not allowed' });
    return;
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'server not configured' });
    return;
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (_) { body = {}; }
  }
  const message = typeof body?.message === 'string' ? body.message.slice(0, 500) : '';
  if (!message.trim()) {
    res.status(400).json({ error: 'missing message' });
    return;
  }

  try {
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-20b',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: message },
        ],
        temperature: 0.8,
        max_tokens: 150,
      }),
    });

    if (!groqRes.ok) {
      res.status(502).json({ error: 'upstream error' });
      return;
    }

    const data = await groqRes.json();
    const reply = data?.choices?.[0]?.message?.content?.trim();
    if (!reply) {
      res.status(502).json({ error: 'empty reply' });
      return;
    }

    res.status(200).json({ reply });
  } catch (_) {
    res.status(502).json({ error: 'request failed' });
  }
};
