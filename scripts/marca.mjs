// Gera favicon, logo.png e og.jpg a partir do logo provisório em SVG.
// Rode com: node scripts/marca.mjs (só precisa rodar de novo se mudar o logo)
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const mark = (size = 48) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="${size}" height="${size}">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffe066"/><stop offset="1" stop-color="#ffb800"/></linearGradient></defs>
  <circle cx="24" cy="24" r="17" fill="url(#g)"/>
  <ellipse cx="24" cy="24" rx="23" ry="8" fill="none" stroke="#c4b5fd" stroke-width="2.4" transform="rotate(-20 24 24)"/>
  <path d="M24 13.5c0 0-6.5 7.3-6.5 11.6a6.5 6.5 0 0 0 13 0c0-4.3-6.5-11.6-6.5-11.6z" fill="#1a0b3b"/>
</svg>`;

await writeFile('public/favicon.svg', mark().trim());
await sharp(Buffer.from(mark(512))).png().toFile('public/logo.png');

const stars = Array.from({ length: 70 }, (_, i) => {
  const x = (i * 197) % 1200, y = (i * 113) % 630, r = (i % 3) * 0.6 + 0.8;
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" opacity="${0.25 + (i % 5) * 0.1}"/>`;
}).join('');

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d0620"/><stop offset="1" stop-color="#2a1263"/></linearGradient>
    <radialGradient id="glow" cx="0.5" cy="1.1" r="0.6"><stop offset="0" stop-color="#a78bfa" stop-opacity=".5"/><stop offset="1" stop-color="#a78bfa" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  ${stars}
  <g transform="translate(80 150) scale(4.2)">${mark().replace(/<\/?svg[^>]*>/g, '')}</g>
  <text x="330" y="235" font-family="Arial Narrow, Arial, sans-serif" font-weight="800" font-size="84" fill="#fff">UNIVERSO <tspan fill="#ffd23f">24HRS</tspan></text>
  <text x="332" y="295" font-family="Arial, sans-serif" font-weight="700" font-size="34" fill="#d9cff2">DESENTUPIDORA E LIMPA FOSSA</text>
  <text x="80" y="470" font-family="Arial, sans-serif" font-weight="700" font-size="40" fill="#fff">Vaso · Pia · Ralo · Cano · Esgoto · Fossa</text>
  <text x="80" y="535" font-family="Arial, sans-serif" font-weight="700" font-size="36" fill="#ffd23f">24 horas · Campinas e região · (19) 98910-8292</text>
</svg>`;
await sharp(Buffer.from(og)).jpeg({ quality: 88 }).toFile('public/og.jpg');
console.log('ok');
