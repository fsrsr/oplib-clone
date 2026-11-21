import { icon } from './icons.mjs';
import { NAV, LOCATIONS, ORG, NPP } from './data.mjs';

// Placeholder brand mark (an owl-ish badge + two-line wordmark), drawn in CSS/SVG.
export function logo(cls = '') {
  return `<span class="logo ${cls}"><svg class="logo-owl" viewBox="0 0 40 40" aria-hidden="true">
<circle cx="20" cy="21" r="17" fill="#f59e0b"/><circle cx="20" cy="24" r="13" fill="#16a34a"/>
<circle cx="13.5" cy="16" r="6" fill="#fff" stroke="#b91c1c" stroke-width="2"/><circle cx="26.5" cy="16" r="6" fill="#fff" stroke="#b91c1c" stroke-width="2"/>
<circle cx="13.5" cy="16" r="2.5" fill="#111"/><circle cx="26.5" cy="16" r="2.5" fill="#111"/>
<path d="M9 26h22v10H9z" fill="#dc2626"/><path d="M20 26v10" stroke="#fff" stroke-width="1.5"/><path d="M5 6l6 4M35 6l-6 4" stroke="#0ea5e9" stroke-width="3" stroke-linecap="round"/></svg>
<span class="logo-text"><span>University</span><span>Open Library</span></span></span>`;
}

export function header(active) {
  const items = NAV.map((n) => {
    const caret = n.menu ? icon('caret', 10, 'caret') : '';
    const menu = n.menu
      ? `<ul class="dd">${n.menu.map(([l, h]) => `<li><a href="${h}">${l}</a></li>`).join('')}</ul>`
      : '';
    return `<li class="nav-item${n.menu ? ' has-dd' : ''}"><a class="nav-link${active === n.key ? ' active' : ''}" href="${n.href}">${n.label}${caret}</a>${menu}</li>`;
  }).join('');
  return `<header class="topbar wrap">
  <a class="brand" href="/" aria-label="Open Library home">${logo()}</a>
  <nav class="mainnav"><ul class="nav">${items}</ul></nav>
  <div class="actions">
    <button class="pill-btn green" type="button">Login (SSO)</button>
    <a class="pill-btn blue" href="/">Sign Up</a>
    <div class="lang"><a href="/" class="on">ID</a><span>|</span><a href="/">EN</a></div>
  </div>
  <button class="burger" type="button" aria-label="Menu" aria-expanded="false">${icon('menu', 26)}</button>
</header>`;
}

function locCard(l) {
  const emails = l.emails.map((e) => `<a href="mailto:${e}">${e}</a>`).join('<br>');
  const hours = l.hours.map(([d, t]) => `<tr><th>${d}</th><td>${t}</td></tr>`).join('');
  return `<div class="loc">
  <h5>${l.name}</h5>
  <div class="addr">${l.addr.join('<br>')}</div>
  <ul class="contact">
    <li>${icon('whatsapp', 17, 'wa')}<a href="/">${l.wa}</a></li>
    ${l.fax ? `<li>${icon('printer', 16, 'red')}<span>${l.fax}</span></li>` : ''}
    <li>${icon('mail', 16, 'red mail')}<span>${emails}</span></li>
  </ul>
  <div class="ophead">OPERATIONAL HOURS</div>
  <table class="optable">${hours}</table>
  <div class="socials${l.tg ? '' : ' one'}">
    <a class="soc ig" href="/">${icon('instagram', 13)}Instagram</a>
    ${l.tg ? `<a class="soc tg" href="/">${icon('telegram', 13)}Telegram</a>` : ''}
  </div>
</div>`;
}

export function footer() {
  return `<footer class="site-footer">
  <div class="foot-inner">
    <h4 class="foot-title">LIBRARY LOCATIONS</h4>
    <div class="locs">${LOCATIONS.map(locCard).join('')}</div>
    <div class="foot-bottom">
      <div class="foot-logos"><span class="uni-mark"><b>U</b><span>University<small>Campus</small></span></span><i class="sep"></i>${logo('foot')}</div>
      <h4>${ORG}</h4>
      <div class="npp">${NPP}</div>
    </div>
  </div>
  <p class="cc"><span class="cc-badge"><b>cc</b><i>BY</i><i>NC</i></span></p>
</footer>
<div class="floaters">
  <button class="fl-close" type="button" aria-label="Tutup">${icon('x', 12)}</button>
  <button class="fl-btn blue" type="button" aria-label="Aksesibilitas">${icon('access', 22)}</button>
  <span class="fl-label blue">Aksesibilitas</span>
  <button class="fl-btn green" type="button" aria-label="Bantuan">${icon('help', 22)}</button>
  <span class="fl-label green">Bantuan</span>
</div>`;
}

export function page({ title, active, body, depth = 0 }) {
  const rel = depth ? '../' : '';
  return `<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<link rel="stylesheet" href="/assets/style.css">
</head>
<body class="pg-${active || 'home'}">
${header(active)}
${body}
${footer()}
<div class="gt-widget" aria-hidden="true"><a href="/">Pilih Bahasa&#8203;&#9660;</a></div>
<script src="/assets/main.js" defer></script>
</body>
</html>`;
}

export function crumbs(current) {
  return `<div class="crumbs"><a href="/">${icon('home', 13)}Home</a>${icon('chevron', 12, 'chev')}<b>${current}</b></div>`;
}
