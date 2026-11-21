(function () {
  // Phone menu
  var bar = document.querySelector('.topbar');
  var burger = document.querySelector('.burger');
  if (bar && burger) {
    burger.addEventListener('click', function () {
      var open = bar.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Generic dot carousel: slides switched by class or by translating a track.
  function carousel(opts) {
    var dots = opts.dots ? Array.prototype.slice.call(opts.dots.querySelectorAll('button')) : [];
    var idx = opts.start || 0;
    var timer;
    function show(i) {
      idx = (i + opts.count) % opts.count;
      opts.render(idx);
      dots.forEach(function (d, n) { d.classList.toggle('on', n === idx); });
    }
    function play() {
      if (!opts.interval) return;
      clearInterval(timer);
      timer = setInterval(function () { if (!opts.active || opts.active()) show(idx + 1); }, opts.interval);
    }
    dots.forEach(function (d, n) { d.addEventListener('click', function () { show(n); play(); }); });
    show(idx);
    play();
    return { show: show };
  }

  // Hero banner (fade)
  var slides = document.querySelectorAll('.hero .slide');
  if (slides.length) {
    var hero = carousel({
      count: slides.length,
      dots: document.querySelector('.hero-dots'),
      interval: 6000,
      render: function (i) { slides.forEach(function (s, n) { s.classList.toggle('active', n === i); }); }
    });
    var prev = document.querySelector('.hero-nav.prev');
    var next = document.querySelector('.hero-nav.next');
    var cur = 0;
    if (prev) prev.addEventListener('click', function () { cur = (cur + slides.length - 1) % slides.length; hero.show(cur); });
    if (next) next.addEventListener('click', function () { cur = (cur + 1) % slides.length; hero.show(cur); });
  }

  // Latest catalog (slide)
  var lcTrack = document.querySelector('.lc-track');
  if (lcTrack) {
    carousel({
      count: lcTrack.children.length,
      start: window.innerWidth < 768 ? 0 : (window.innerWidth < 992 ? 2 : 1),
      dots: document.querySelector('.lc-dots'),
      interval: 7000,
      render: function (i) { lcTrack.style.transform = 'translateX(' + (-100 * i) + '%)'; }
    });
    setTimeout(function () { lcTrack.classList.add('ready'); }, 100);
  }

  // Quick access (only a carousel on phones)
  var qaTrack = document.querySelector('.qa-track');
  if (qaTrack) {
    var mq = window.matchMedia('(max-width: 767px)');
    var qa = carousel({
      count: qaTrack.children.length,
      dots: document.querySelector('.qa-dots'),
      render: function (i) { qaTrack.style.transform = mq.matches ? 'translateX(' + (-100 * i) + '%)' : ''; }
    });
    mq.addEventListener('change', function () { qa.show(0); });
  }

  // Floating helpers close button
  var fl = document.querySelector('.floaters');
  var flc = document.querySelector('.fl-close');
  if (fl && flc) flc.addEventListener('click', function () { fl.classList.toggle('closed'); });

  // Services tabs
  var tabs = document.querySelectorAll('.tab');
  tabs.forEach(function (t) {
    t.addEventListener('click', function () {
      tabs.forEach(function (x) { x.classList.toggle('on', x === t); });
      document.querySelectorAll('[data-pane]').forEach(function (p) { p.hidden = p.getAttribute('data-pane') !== t.getAttribute('data-tab'); });
    });
  });

  // Quick filter on services / guides
  document.querySelectorAll('[data-filter]').forEach(function (inp) {
    inp.addEventListener('input', function () {
      var q = inp.value.trim().toLowerCase();
      document.querySelectorAll(inp.getAttribute('data-filter')).forEach(function (card) {
        var links = card.querySelectorAll('.svc-l, .svc-hl');
        var title = card.querySelector('h2').textContent.toLowerCase();
        var any = !q || title.indexOf(q) >= 0;
        links.forEach(function (l) {
          var hit = !q || title.indexOf(q) >= 0 || l.textContent.toLowerCase().indexOf(q) >= 0;
          l.style.display = hit ? '' : 'none';
          if (hit) any = true;
        });
        card.classList.toggle('hide', !any);
      });
    });
  });
})();
