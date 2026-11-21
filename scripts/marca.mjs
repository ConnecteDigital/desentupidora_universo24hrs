// Gera public/og.jpg (imagem de compartilhamento) com o logo de src/assets/logo.png.
// Rode com: node scripts/marca.mjs (só precisa rodar de novo se mudar o logo)
import sharp from 'sharp';

const stars = Array.from({ length: 70 }, (_, i) => {
  const x = (i * 197) % 1200, y = (i * 113) % 630, r = (i % 3) * 0.6 + 0.8;
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" opacity="${0.25 + (i % 5) * 0.1}"/>`;
}).join('');

const fundo = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d0620"/><stop offset="1" stop-color="#2a1263"/></linearGradient>
    <radialGradient id="glow" cx="0.5" cy="1.1" r="0.6"><stop offset="0" stop-color="#a78bfa" stop-opacity=".5"/><stop offset="1" stop-color="#a78bfa" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  ${stars}
  <text x="600" y="470" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="38" fill="#fff">Vaso · Pia · Ralo · Cano · Esgoto · Limpa fossa</text>
  <text x="600" y="535" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="36" fill="#ffd23f">24 horas · Campinas e região · (19) 98910-8292</text>
</svg>`;

const logo = await sharp('src/assets/logo.png').resize({ width: 900 }).toBuffer();
const { height } = await sharp(logo).metadata();
await sharp(Buffer.from(fundo))
  .composite([{ input: logo, left: 150, top: Math.round(230 - height / 2) }])
  .jpeg({ quality: 88 })
  .toFile('public/og.jpg');
console.log('ok');
