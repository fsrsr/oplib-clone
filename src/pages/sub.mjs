import { icon } from '../icons.mjs';
import { crumbs } from '../layout.mjs';
import { CATALOG, REVIEWS, SUBJECTS, SERVICES, FACILITIES, GUIDES, GALLERY } from '../data.mjs';

function cover(dark) {
  return `<img class="cover-img" src="/assets/${dark ? 'cover-dark' : 'cover'}.svg" alt="Cover" width="109" height="164">`;
}

function pager(cls) {
  return `<ul class="pager ${cls}"><li><a href="/">«</a></li><li><a class="on" href="/">1</a></li><li><a href="/">2</a></li><li><a href="/">3</a></li><li><a href="/">4</a></li><li><a href="/">5</a></li><li><a href="/">»</a></li></ul>`;
}

export function catalogBody() {
  const books = CATALOG.map((b) => `<div class="bk">
    <div class="bk-l">${cover(b.cover === 'dark')}<span class="bk-code">${b.code}</span></div>
    <div class="bk-r">
      <h3><a href="/">${b.title}</a></h3>
      <p class="bk-au">${icon('user', 12)}${b.author}</p>
      <p class="bk-m">${icon('building', 12)}${b.pub}</p>
      <p class="bk-m">${icon('bookmark', 12)}${b.type}</p>
      <p class="bk-m">${icon('tag', 12)}${b.ddc}</p>
      <p class="bk-av">${b.avail}</p>
      ${b.dl ? `<p class="bk-dl">${b.dl}</p>` : ''}
    </div>
  </div>`).join('');
  const reviews = REVIEWS.map((r) => `<div class="rv">
    <a class="rv-book" href="/">${icon('book', 11)}<span>${r.book}</span></a>
    <h4>${r.title}</h4>
    <blockquote>${r.quote}</blockquote>
    <div class="rv-meta"><span>${icon('usercircle', 11)}${r.user}</span><span>${icon('calendar', 11)}${r.date}</span></div>
  </div>`).join('');
  const subjects = SUBJECTS.map(([s, n]) => `<li><a href="/"><span>${s}</span><em>${n}</em></a></li>`).join('');
  return `<main class="wrap sheet catalog">
  ${crumbs('Catalog')}
  <h1>Catalog</h1>
  <div class="cat-grid">
    <div class="cat-main">
      <div class="cat-search"><form class="sgroup"><input type="text" placeholder="Judul, kode, pengarang, penerbit..."><button class="sb green" type="submit">${icon('search', 15)}<span>Search</span></button><button class="sb blue" type="button">${icon('sliders', 15)}<span>Advanced</span></button></form></div>
      <div class="cat-info">${icon('info', 16)}Menampilkan total <b>185.802</b> koleksi</div>
      <form class="cat-sort"><label>Urutkan berdasarkan</label><select><option>Tanggal masuk: terbaru</option><option>Tanggal masuk: terlama</option><option>Tahun terbit: terbaru</option><option>Tahun terbit: terlama</option><option>Judul: A-Z</option></select></form>
      ${pager('sm')}
      <div class="books">${books}</div>
      ${pager('lg')}
    </div>
    <aside class="cat-side">
      <div class="side-card">
        <h3>${icon('star', 22, 'gold')}Ulasan Terbaru</h3>
        ${reviews}
      </div>
      <div class="side-card subj">
        <h3>${icon('squares', 20, 'blue')}Subjek Populer</h3>
        <ul>${subjects}</ul>
      </div>
    </aside>
  </div>
</main>`;
}

function svcCard(s) {
  const hl = s.hl ? `<a class="svc-hl" href="/">${icon(s.hl[2], 14)}<span>${s.hl[0]}</span><em>${s.hl[1]}</em></a>` : '';
  const links = s.links.map((l) => {
    const [t, full] = Array.isArray(l) ? l : [l, ''];
    return `<a class="svc-l${full ? ' full' : ''}" href="/"><span>${t}</span>${icon('arrow', 13)}</a>`;
  }).join('');
  return `<div class="svc">
  <div class="svc-h"><span class="svc-ic">${icon(s.icon, 18)}</span><h2>${s.title}</h2><span class="svc-b">${s.badge}</span></div>
  ${hl}
  ${links ? `<div class="svc-links c${s.cols}">${links}</div>` : ''}
</div>`;
}

export function servicesBody() {
  return `<main class="wrap sheet services">
  ${crumbs('Services &amp; Facilities')}
  <h1>Services &amp; Facilities</h1>
  <p class="lead">Panduan cepat dan direktori lengkap layanan akademik serta fasilitas perpustakaan. Gunakan bilah pencarian atau pilih tab di bawah:</p>
  <label class="qsearch">${icon('search', 20)}<input type="text" placeholder="Cari cepat (cth: Peminjaman, Ruang Diskusi, NOVA, Kindle, Plagiasi)..." data-filter=".svc"></label>
  <div class="tabs" role="tablist"><button class="tab on" data-tab="akademik" type="button">${icon('squares', 15)}<span>Layanan Akademik</span></button><button class="tab" data-tab="fasilitas" type="button">${icon('hotel', 15)}<span>Fasilitas Perpustakaan</span></button></div>
  <div class="svc-grid" data-pane="akademik">${SERVICES.map(svcCard).join('')}</div>
  <div class="svc-grid" data-pane="fasilitas" hidden>${FACILITIES.map(svcCard).join('')}</div>
</main>`;
}

export function guidesBody() {
  return `<main class="wrap sheet guides">
  ${crumbs('Library Guides (Infographics)')}
  <h1>Library Guides (Infographics)</h1>
  <p class="lead">Infografis lengkap panduan dan layanan perpustakaan. Ketik di bawah untuk mencari cepat:</p>
  <label class="qsearch">${icon('search', 20)}<input type="text" placeholder="Cari layanan (cth: Peminjaman, Plagiasi, Skripsi, Capstone, NOVA)..." data-filter=".svc"></label>
  <div class="svc-grid g">${GUIDES.map(svcCard).join('')}</div>
</main>`;
}

function photo(v) {
  return `<img class="gimg" src="/assets/gallery/${v}.svg" alt="Foto galeri" width="830" height="466">`;
}

export function galleryBody() {
  const blocks = GALLERY.map((b) => {
    const st = `style="margin-top:${b.mt}px"`;
    if (b.k === 'hero') return `<p class="gb g-img" ${st}>${photo('hero')}</p>`;
    if (b.k === 'intro') return `<p class="gb g-img" ${st}>${photo('intro')}</p>`;
    if (b.k === 'empty') return `<p class="gb g-empty" ${st}></p>`;
    if (b.k === 'cap') return `<p class="gb g-cap" ${st}>${b.t}</p>`;
    return `<p class="gb g-img" ${st}>${photo(b.v)}</p>`;
  }).join('');
  return `<main class="wrap sheet gallery">
  ${crumbs('Main Open Library Gallery')}
  <h1>Main Open Library Gallery</h1>
  <div class="views">${icon('eye', 13)}Dilihat 8.851 kali</div>
  <div class="g-box">${blocks}</div>
</main>`;
}
