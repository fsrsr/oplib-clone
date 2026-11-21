// Builds placeholder picture files (SVG) so placeholders are real images on the page.

function xhtml(html) {
  return html.replace(/<br>/g, '<br/>').replace(/&nbsp;/g, '&#160;');
}

export function foSvg(w, h, html, bg = 'transparent') {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
<foreignObject x="0" y="0" width="${w}" height="${h}"><div xmlns="http://www.w3.org/1999/xhtml" style="width:${w}px;height:${h}px;display:flex;align-items:center;justify-content:center;text-align:center;white-space:nowrap;background:${bg};font-family:Arial,sans-serif;overflow:hidden">${xhtml(html)}</div></foreignObject></svg>`;
}

export function coverSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="220" viewBox="0 0 160 220">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset=".55" stop-color="#fff"/><stop offset="1" stop-color="#eee"/></linearGradient></defs>
<rect width="160" height="220" fill="url(#g)"/>
<path d="M0 0h58C40 18 20 38 0 62z" fill="#dc2626"/><path d="M0 40l20-14v40L0 80z" fill="#0d9488"/><path d="M40 0h40L52 18z" fill="#facc15"/>
<path d="M160 190v30h-46z" fill="#facc15"/><path d="M160 205v15h-60z" fill="#dc2626" opacity=".85"/>
<circle cx="80" cy="74" r="27" fill="#f59e0b"/><path d="M80 47a27 27 0 0 1 27 27H80z" fill="#16a34a"/><path d="M53 74h27v27a27 27 0 0 1-27-27z" fill="#0ea5e9"/>
<circle cx="70" cy="70" r="8" fill="#fff" stroke="#b91c1c" stroke-width="2"/><circle cx="90" cy="70" r="8" fill="#fff" stroke="#b91c1c" stroke-width="2"/>
<circle cx="70" cy="70" r="3" fill="#111"/><circle cx="90" cy="70" r="3" fill="#111"/><rect x="66" y="84" width="28" height="18" fill="#dc2626"/>
<path d="M104 46l6-8M108 54l9-3" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>
<text x="80" y="134" text-anchor="middle" font-family="Arial,sans-serif" font-weight="900" font-size="27" fill="#dc2626">Uni</text>
<text x="80" y="158" text-anchor="middle" font-family="Arial,sans-serif" font-weight="900" font-size="22" fill="#334155" letter-spacing="-.5">Collection</text>
<rect x="38" y="165" width="84" height="2" fill="#facc15"/>
<text x="80" y="177" text-anchor="middle" font-family="Arial,sans-serif" font-style="italic" font-weight="700" font-size="7" fill="#334155">Open Library</text>
</svg>`;
}

export function darkCoverSvg() {
  const ppl = [0, 1, 2, 3, 4, 5].map((i) => `<rect x="${14 + i * 22}" y="${i % 2 ? 150 : 144}" width="14" height="${i % 2 ? 46 : 52}" rx="7" fill="#0b0d12"/>`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="220" viewBox="0 0 160 220">
<defs><linearGradient id="d" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8b939c"/><stop offset=".45" stop-color="#4b5563"/><stop offset="1" stop-color="#1f2937"/></linearGradient></defs>
<rect width="160" height="220" fill="url(#d)"/><text x="80" y="104" text-anchor="middle" font-family="Georgia,serif" font-size="14" letter-spacing="5" fill="#e5e7eb">LANGIT</text>${ppl}</svg>`;
}

export const TONES = [
  'repeating-linear-gradient(90deg, rgba(120,60,40,.35) 0 6px, rgba(240,230,215,.25) 6px 12px, rgba(60,50,45,.3) 12px 15px) 0 30%/100% 45% no-repeat, linear-gradient(180deg, #e5e2dc 0 28%, #a59c8f 28% 70%, #4f7a2c 70%)',
  'radial-gradient(ellipse at 50% 85%, #3f8f2f 0 28%, transparent 29%), linear-gradient(180deg, #f1efe9 0 35%, #c9bfae 35% 62%, #8a7a66 62%)',
  'linear-gradient(90deg, transparent 0 55%, rgba(185,28,28,.75) 55% 80%, transparent 80%) 0 40%/100% 40% no-repeat, linear-gradient(180deg, #e7e5e4 0 30%, #b8b2a8 30% 68%, #6b4f3a 68%)',
  'repeating-linear-gradient(90deg, #8b5e3c 0 4px, #e9dccb 4px 10px, #4b3a2f 10px 12px) 0 20%/100% 55% no-repeat, linear-gradient(180deg, #f5f5f4 0 20%, #d6cfc4 20% 75%, #7c6a58 75%)',
  'linear-gradient(90deg, rgba(14,116,144,.35) 0 30%, transparent 30% 34%, rgba(14,116,144,.3) 34% 66%, transparent 66% 70%, rgba(14,116,144,.35) 70%) 0 25%/100% 50% no-repeat, linear-gradient(180deg, #e2e8f0 0 25%, #94a3b8 25% 72%, #2f6f3a 72%)',
  'radial-gradient(ellipse at 40% 55%, #1f2937 0 18%, transparent 19%), radial-gradient(ellipse at 65% 55%, #374151 0 16%, transparent 17%), linear-gradient(180deg, #ece7df 0 40%, #b9a58d 40% 75%, #8a5a3a 75%)',
];

// grid templates + tile areas for each collage
const COLLAGE = {
  a: ['1fr 1fr', '1fr 1fr', ['1/1/2/3', '2/1/3/2', '2/2/3/3']],
  b: ['repeat(6,1fr)', '1fr 0.75fr', ['1/1/2/3', '1/3/2/7', '2/1/3/4', '2/4/3/7']],
  c: ['2fr 1fr', 'repeat(3,1fr)', ['1/1/4/2', '1/2/2/3', '2/2/3/3', '3/2/4/3']],
  d: ['1fr 1fr', '1fr 1fr', ['1/1/2/2', '1/2/3/3', '2/1/3/2']],
  e: ['1fr 1fr', '1fr 1fr', ['1/1/2/2', '2/1/3/2', '1/2/3/3']],
  f: ['1fr 1fr', '1fr 1fr', ['1/1/2/2', '1/2/2/3', '2/1/3/2', '2/2/3/3']],
  g: ['repeat(3,1fr)', '1fr 1fr', ['1/1/2/2', '1/2/2/3', '1/3/2/4', '2/1/3/2', '2/2/3/3', '2/3/3/4']],
  h: ['1fr 1fr', '1fr 1fr', ['1/1/2/2', '1/2/2/3', '2/1/3/2', '2/2/3/3']],
  i: ['2fr 1fr', '1fr 1fr', ['1/1/2/2', '1/2/3/3', '2/1/3/2']],
};

function box(w, h, inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
<foreignObject x="0" y="0" width="${w}" height="${h}"><div xmlns="http://www.w3.org/1999/xhtml" style="width:${w}px;height:${h}px;overflow:hidden;font-family:Arial,sans-serif">${inner}</div></foreignObject></svg>`;
}

export function gallerySvg(v) {
  const W = 830, H = 466;
  if (v === 'hero') {
    return box(W, H, `<div style="width:100%;height:100%;display:flex;align-items:flex-end;justify-content:center;background:linear-gradient(180deg,rgba(255,255,255,0) 75%,#fff 100%),linear-gradient(90deg,transparent 0 20%,rgba(30,41,59,.5) 20% 22%,transparent 22% 78%,rgba(30,41,59,.5) 78% 80%,transparent 80%) 0 22%/100% 45% no-repeat,linear-gradient(180deg,#bcd3e6 0,#e8eef3 14%,#d9d9d9 22%,#e5e7eb 40%,#b91c1c 48%,#c2410c 66%,#4d7c0f 72%,#3f6212 88%,#f3f4f6 100%)"><span style="margin-bottom:34px;color:#fff;font:700 38px/1 Arial,sans-serif;letter-spacing:-1px;text-shadow:0 2px 8px rgba(0,0,0,.5)">Gallery Open Library</span></div>`);
  }
  if (v === 'intro') {
    return box(W, H, `<div style="width:100%;height:100%;display:flex;gap:30px;padding:46px 46px 40px;box-sizing:border-box;background:linear-gradient(180deg,#e2dcc5 80%,#fff 100%)"><div style="flex:1;color:#1a1a1a"><div style="width:24px;height:24px;border-radius:50%;background:#f59e0b"></div><div style="margin-top:10px;font:800 28px/1 Arial,sans-serif;letter-spacing:-1px">Open Library<br/>Kampus Utama</div><div style="margin-top:22px;font:400 9px/1.6 Arial,sans-serif"><b>Gd. Pustaka Lt. 5</b><br/>Jl. Contoh Raya - Ters. Kota<br/>Kota Contoh 40257 Indonesia<br/><b>Senin - Jum'at<br/>08:00 - 19:00 WIB</b></div></div><div style="flex:1.05;background:radial-gradient(ellipse at 30% 25%,#f5f5f4 0 22%,transparent 23%),linear-gradient(180deg,#57534e,#d6d3d1 40%,#e7e5e4 60%,#166534 62%,#e7e5e4 66%,#78716c);display:flex;align-items:flex-end;justify-content:center;padding-bottom:40px;color:#1f2937;font:800 26px Arial,sans-serif">welcome</div></div>`);
  }
  if (v === 'trophy') {
    return box(W, H, `<div style="width:100%;height:100%;display:flex;justify-content:center;gap:4px;background:#fff"><div style="width:212px;background:linear-gradient(90deg,transparent 40%,#d4a017 40% 60%,transparent 60%) 0 15%/100% 70% no-repeat,linear-gradient(90deg,#8a5a2b,#6b3f1d 50%,#8a5a2b)"></div><div style="width:212px;background:radial-gradient(circle at 50% 40%,#fbbf24 0 18%,transparent 19%),linear-gradient(180deg,#1c1917,#292524 70%,#44403c)"></div></div>`);
  }
  if (v === 'cert') {
    const c = `<div style="flex:1;background:linear-gradient(180deg,transparent 0 34%,#1e3a8a 34% 40%,transparent 40%) 50% 0/62% 100% no-repeat,linear-gradient(#fdf8e7,#fdf8e7) 50% 50%/62% 80% no-repeat,linear-gradient(#d4a017,#d4a017) 50% 50%/68% 86% no-repeat,linear-gradient(#f5f5f4,#e7e5e4) 50% 50%/80% 94% no-repeat,linear-gradient(180deg,#b8b0a4,#8f857a)"></div>`;
    return box(W, H, `<div style="width:100%;height:100%;display:flex;gap:4px;background:#fff">${c}${c}</div>`);
  }
  const [cols, rows, areas] = COLLAGE[v];
  const tiles = areas.map((a, n) => `<div style="grid-area:${a};background:${TONES[(n + v.charCodeAt(0)) % 6]}"></div>`).join('');
  return box(W, H, `<div style="width:100%;height:100%;display:grid;gap:4px;grid-template-columns:${cols};grid-template-rows:${rows}">${tiles}</div>`);
}
