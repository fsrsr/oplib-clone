import { icon } from '../icons.mjs';
import { QUICK, LATEST, LOCATIONS, NEWS, ERES, NETWORKS, ANALYTICS, TODAY } from '../data.mjs';

function chunk(arr, n) {
  const out = [];
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
  return out;
}

// Deterministic QR-like pattern for the banner placeholder.
function qr(seed) {
  let s = seed;
  const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  const N = 25;
  let cells = '';
  const finder = (x, y) => {
    for (const [ox, oy] of [[0, 0], [N - 7, 0], [0, N - 7]]) {
      const dx = x - ox, dy = y - oy;
      if (dx >= 0 && dx < 7 && dy >= 0 && dy < 7) {
        return dx === 0 || dx === 6 || dy === 0 || dy === 6 || (dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4) ? 1 : 0;
      }
    }
    return -1;
  };
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const f = finder(x, y);
    const on = f === -1 ? rnd() > 0.5 : f === 1;
    if (on) cells += `<rect x="${x}" y="${y}" width="1.02" height="1.02"/>`;
  }
  return `<svg class="qr" viewBox="0 0 ${N} ${N}" preserveAspectRatio="xMidYMid meet">${cells}</svg>`;
}

function banner() {
  return `<section class="wrap hero">
  <div class="hero-track">
    <a class="slide s1 active" href="/">
      <div class="slide-art">
        <div class="slide-top"><span class="mini-logo">▣ University</span><span class="mini-logo">◉ Open Library</span></div>
        <h2 class="slide-title">Survei Kepuasan Pengguna</h2>
        <p class="slide-sub">Open Library</p>
        <p class="slide-box">Partisipasi dan masukan Anda sangat berarti untuk membantu<br>meningkatkan kualitas layanan dan fasilitas terbaik di Open Library.</p>
        <p class="slide-url">https://example.com/survei-perpustakaan-2026</p>
        <div class="slide-foot"><span>OPEN LIBRARY<br><small>Kampus Utama</small></span><span class="chips"><i></i><i></i><i></i><i></i><i></i></span></div>
      </div>
      <div class="slide-qr">${qr(7)}</div>
    </a>
    <a class="slide s2" href="/">
      <div class="slide-art">
        <div class="slide-top"><span class="mini-logo">▣ University</span><span class="mini-logo">◉ Open Library</span></div>
        <p class="slide-sub2">Survei</p>
        <h2 class="slide-title t2">LITERASI DAN PENGGUNAAN AI</h2>
        <p class="slide-box b2">Dapatkan souvenir menarik dari Open Library<br><small>Partisipasi dan masukan Anda sangat berarti untuk mendukung perkembangan literasi digital.</small></p>
        <div class="slide-foot f2"><span class="chips"><i></i><i></i><i></i><i></i><i></i></span></div>
      </div>
      <div class="slide-qr">${qr(19)}</div>
    </a>
  </div>
  <span class="hero-nav prev" aria-hidden="true"></span><span class="hero-nav next" aria-hidden="true"></span>
</section>
<ol class="dots hero-dots"><li><button class="on" aria-label="Slide 1"></button></li><li><button aria-label="Slide 2"></button></li></ol>`;
}

function sectionHead(ic, title, extra = '') {
  return `<div class="sec-head"><h3>${ic}<span>${title}</span></h3>${extra}</div>`;
}

function quick() {
  const pages = chunk(QUICK, 6).map((p) => `<div class="qa-page">${p.map(([l, ic, c]) => `<a class="qa" href="/"><span class="qa-ic" style="color:${c}">${icon(ic, 26)}</span><span class="qa-l">${l.replace('\n', '<br>')}</span></a>`).join('')}</div>`).join('');
  return `<section class="wrap card qa-card">
  ${sectionHead(icon('grid', 18, 'red'), 'Quick Access Menu')}
  <div class="qa-viewport"><div class="qa-track">${pages}</div></div>
  <ol class="dots qa-dots"><li><button class="on" aria-label="Halaman 1"></button></li><li><button aria-label="Halaman 2"></button></li><li><button aria-label="Halaman 3"></button></li><li><button aria-label="Halaman 4"></button></li></ol>
</section>`;
}

function cover() {
  return `<img class="cover-img" src="/assets/cover.svg" alt="Cover" width="160" height="220">`;
}

function latest() {
  const pages = chunk(LATEST, 6).map((p) => `<div class="lc-page">${p.map((b) => `<a class="book" href="/home/catalog.html"><div class="book-img">${cover()}<span class="date-badge">${icon('calfill', 11)}${b.date}</span></div><p>${b.title}</p></a>`).join('')}</div>`).join('');
  return `<section class="wrap card lc-card">
  ${sectionHead(icon('bookfill', 20, 'red'), 'Latest Catalog')}
  <div class="lc-viewport"><div class="lc-track" style="transform:translateX(-100%)">${pages}</div></div>
  <ol class="dots lc-dots"><li><button aria-label="Halaman 1"></button></li><li><button class="on" aria-label="Halaman 2"></button></li><li><button aria-label="Halaman 3"></button></li></ol>
</section>`;
}

function hoursCard(l) {
  return `<div class="hc"><div class="hc-top"><div class="hc-pills"><span class="reg">${icon('pin', 11)}${l.region}</span><span class="buka">BUKA</span></div><h4>${l.short || l.name.replace(/<br[^>]*>/, ' ')}</h4></div><div class="hc-bot">${icon('clockfill', 14, 'green')}<b>${l.open}</b></div></div>`;
}

function hours() {
  const set = LOCATIONS.map(hoursCard).join('');
  return `<section class="wrap card oh-card">
  ${sectionHead(icon('clock', 20, 'red'), "Today's Operational Hours", `<span class="sec-date">${TODAY}</span><a class="outline-btn" href="/">View Schedule Details ${icon('arrow', 12)}</a>`)}
  <div class="marquee"><div class="marquee-track">${set}${set}${set}</div></div>
</section>`;
}

function newsAndResources() {
  const news = NEWS.map(([t, d, v]) => `<li><a href="/"><span class="nt">${t}</span><span class="nm">${icon('calendar', 12)}${d}<span class="gap"></span>${icon('eye', 12)}${v}</span></a></li>`).join('');
  const eres = ERES.map(([h, k], i) => `<a class="er${k ? ' ' + k : ''}" href="/"><img src="/assets/logos/e${i}.svg" alt="E-resource ${i + 1}" width="109" height="41"></a>`).join('');
  const net = (arr, p) => arr.map((h, i) => `<a class="nw" href="/"><img src="/assets/logos/${p}${i}.svg" alt="Network logo" width="115" height="36"></a>`).join('');
  return `<section class="wrap card ne-card">
  <div class="news-col">
    ${sectionHead(icon('news', 20, 'red'), '<a href="/">News &amp; Info</a>')}
    <ul class="news">${news}</ul>
    <a class="more-btn" href="/">More News ${icon('arrow', 12)}</a>
  </div>
  <div class="er-col">
    ${sectionHead(icon('globe', 20, 'red'), '<a href="/">Library E-Resources &amp; Networks</a>', `<div class="er-btns"><a class="sm-btn" href="/">${icon('filedown', 12)}Subject Guide</a><button class="sm-btn" type="button">${icon('list', 12)}Detail List</button><a class="sm-btn" href="/">${icon('filedown', 12)}Subscribed Title</a></div>`)}
    <div class="er-grid">${eres}</div>
    <div class="nets">
      <div class="ng ng-campus"><div class="ng-l">University</div><div class="ng-items">${net(NETWORKS.campus, 'campus')}</div></div>
      <div class="ng ng-integ"><div class="ng-l">Terintegrasi</div><div class="ng-items">${net(NETWORKS.integ, 'integ')}</div></div>
      <div class="ng ng-natl"><div class="ng-l">Perpusnas</div><div class="ng-items">${net(NETWORKS.natl, 'natl')}</div></div>
      <div class="ng ng-acc"><div class="ng-l red">Terakreditasi</div>
        <div class="acc-box">
          <div class="acc"><span class="rosette">A</span><b>Akreditasi A</b><small>Perpustakaan Nasional</small></div>
          <div class="acc"><span class="iso">${icon('check', 30)}</span><b>ISO 9001:2008</b><small>Certified</small></div>
        </div>
      </div>
    </div>
  </div>
</section>`;
}

function analytics() {
  const tot = ANALYTICS.total.map(([ic, n, l]) => `<div class="tstat"><span class="tic">${icon(ic, 16)}</span><span><b>${n}</b><small>${l}</small></span></div>`).join('');
  const kinds = [['users', 'Kunjungan', 'r'], ['bookopen', 'Pinjam', 'b'], ['returnbox', 'Kembali', 'g'], ['doorfill', 'Ruangan', 'p']];
  const camp = ANALYTICS.campus.map(([name, vals]) => `<div class="camp"><h5>${name}</h5><div class="cstats">${vals.map((v, i) => `<div class="cs${v === 'N/A' ? ' na' : ''}"><span class="cic ${kinds[i][2]}">${icon(kinds[i][0], 14)}</span><b>${v}</b><small>${kinds[i][1]}</small></div>`).join('')}</div></div>`).join('');
  return `<section class="wrap card an-card">
  ${sectionHead(icon('pulse', 20, 'red'), "Today's Analytics", `<span class="sec-date">${TODAY}</span><a class="outline-btn" href="/">View Analytics Details ${icon('arrow', 12)}</a>`)}
  <div class="total"><div class="total-h"><h4>Semua Kampus</h4><span class="tk">TOTAL KESELURUHAN</span></div><div class="tstats">${tot}</div></div>
  <p class="swipe-hint">${icon('swap', 13)}Geser ke kiri/kanan untuk melihat cabang</p>
  <div class="camps">${camp}</div>
  <p class="an-note">* Data diperbarui secara dinamis untuk aktivitas fisik dan digital hari ini.</p>
</section>`;
}

export function homeBody() {
  return `<main class="home">
<section class="wrap card search-card">
  <div class="sc-text"><h2>Jelajahi Koleksi Kami</h2><p>Temukan <b>275.479</b> koleksi dari <b>185.683</b> judul</p></div>
  <form class="sgroup" action="/home/catalog.html"><input type="text" name="q" placeholder="Judul, kode, penulis, penerbit..."><button class="sb green" type="submit">${icon('search', 16)}<span>Search</span></button><button class="sb blue" type="button">${icon('sliders', 16)}<span>Advanced</span></button></form>
</section>
${banner()}
${quick()}
${latest()}
${hours()}
${newsAndResources()}
${analytics()}
</main>`;
}
