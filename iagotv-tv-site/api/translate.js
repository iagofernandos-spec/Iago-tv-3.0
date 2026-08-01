// Vercel Serverless Function — POST /api/translate
// Traduz texto (en -> pt-BR) usando a API pública MyMemory.
// Se a tradução externa falhar, devolve o texto original para o app não quebrar.
module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let text = '';
  let source = 'en';
  let target = 'pt-BR';

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    text = String(body.text || '').trim();
    source = String(body.sourceLanguage || 'en').trim() || 'en';
    target = String(body.targetLanguage || 'pt-BR').trim() || 'pt-BR';
  } catch (e) {
    return res.status(400).json({ error: 'Invalid JSON body' });
  }

  if (!text) {
    return res.status(200).json({ translatedText: null, cached: false });
  }

  if (source === target) {
    return res.status(200).json({ translatedText: text, cached: false });
  }

  try {
    const langPair = `${source}|${target}`;
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text.slice(0, 480))}&langpair=${encodeURIComponent(langPair)}`;
    const upstream = await fetch(url, { signal: AbortSignal.timeout(8000) });
    const data = await upstream.json();

    const translated = data?.responseData?.translatedText;
    const status = data?.responseStatus;

    if (translated && (status === 200 || status === '200')) {
      return res.status(200).json({ translatedText: translated, cached: false });
    }
  } catch (e) {
    // fall through to passthrough
  }

  return res.status(200).json({ translatedText: text, cached: false });
};
