// Vercel serverless function — text-to-speech via Groq's Orpheus English model.
// Requires the same GROQ_API_KEY environment variable as api/chat.js.

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
  const text = typeof body?.text === 'string' ? body.text.slice(0, 500) : '';
  if (!text.trim()) {
    res.status(400).json({ error: 'missing text' });
    return;
  }

  try {
    const groqRes = await fetch('https://api.groq.com/openai/v1/audio/speech', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'canopylabs/orpheus-v1-english',
        voice: 'hannah', // warm female voice — swap here if you'd like a different one
        input: text,
        response_format: 'wav',
      }),
    });

    if (!groqRes.ok) {
      console.error('speak upstream error', groqRes.status, await groqRes.text());
      res.status(502).json({ error: 'upstream error' });
      return;
    }

    const audio = Buffer.from(await groqRes.arrayBuffer());
    res.setHeader('Content-Type', 'audio/wav');
    res.status(200).send(audio);
  } catch (_) {
    res.status(502).json({ error: 'request failed' });
  }
};
