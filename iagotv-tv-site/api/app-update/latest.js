// Vercel Serverless Function — GET /api/app-update/latest
// Retorna o payload de atualização no formato esperado pelo app Android (DashboardAppUpdateDto).
module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');

  const payload = {
    enabled: false,
    packageName: 'com.iagotv.app',
    tag: '0.6.63-beta-1063',
    versionName: '0.6.63-beta',
    versionCode: 1063,
    title: 'Iago TV 0.6.63 beta 1063',
    notes: '',
    releaseUrl: 'https://iago-tv-3-0.vercel.app/api/app-update/latest',
    assetName: null,
    assetUrl: null,
    assetSizeBytes: null,
    sha256: null,
    downloadUrl: null,
    assets: []
  };

  res.status(200).json(payload);
};
