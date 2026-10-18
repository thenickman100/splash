// Shared behavior for the site-page designs. Each design page loads data.js, then this file,
// then calls SP.boot(render), where render(site, SP) returns the page's HTML.
(function () {
  var q = new URLSearchParams(location.search);
  var keys = SITES.map(function (s) { return s.key; });
  var at = Math.max(0, keys.indexOf(q.get('site') || 'hobo'));
  var site = SITES[at];
  var file = location.pathname.split('/').pop() || 'AL.html';
  var design = file.replace(/\.html$/, '');

  // "from" is the main page that opened this one; only paths inside this repo are allowed.
  var from = q.get('from') || '';
  if (!/^\.\.\/candidates\/[\w.-]+\/[\w.-]+\.html$/.test(from)) from = '';
  var home = from || '../index.html';

  function esc(t) {
    return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function pageUrl(k, d) {
    var u = (d ? SITE_DESIGNS[d].file : file) + '?site=' + k;
    return from ? u + '&from=' + encodeURIComponent(from) : u;
  }
  var prev = at > 0 ? SITES[at - 1] : null;
  var next = at < SITES.length - 1 ? SITES[at + 1] : null;

  // Facts box rows, in the writing guide's order. Rows that don't apply are left out.
  function facts(s) {
    var r = [['Started', s.started]];
    if (s.addresses.length) r.push([s.addresses.length > 1 ? 'Addresses' : 'Address', s.addresses]);
    if (s.commissioned) r.push(['Commissioned by', s.commissioned]);
    if (s.evolvedFrom) r.push(['Evolved from', s.evolvedFrom]);
    if (s.evolvedInto) r.push(['Evolved into', s.evolvedInto]);
    return r;
  }
  function factsHtml(s, cls) {
    return '<dl class="' + (cls || 'sp-facts') + '">' + facts(s).map(function (r) {
      var v = Array.isArray(r[1]) ? r[1].map(function (a) { return '<span class="sp-addr">' + esc(a) + '</span>'; }).join('') : esc(r[1]);
      return '<div><dt>' + r[0] + '</dt><dd>' + v + '</dd></div>';
    }).join('') + '</dl>';
  }

  // A browser window holding the live site, scaled to fit. The screenshot sits behind it while it loads.
  var embeds = 0;
  function embedHtml(e) {
    var id = e.id || 'e' + (embeds++);
    // v0.1's browser look (../browser.css): the same on every site. The first two dots are back and forward.
    return '<div class="sp-win ob" data-embed="' + id + '">' +
      '<div class="sp-chrome ob-chrome"><button class="ob-nav sp-back" title="Back" disabled></button><button class="ob-nav sp-fwd" title="Forward" disabled></button><i></i><span class="sp-url ob-url">' + esc(e.addr) + '</span></div>' +
      '<div class="sp-vp" data-w="' + e.w + '" data-h="' + e.h + '" style="aspect-ratio:' + e.w + '/' + e.h + ';background-image:url(' + e.img + ')">' +
      '<iframe src="' + e.src + '" title="' + esc(e.title) + '" loading="lazy" style="width:' + e.w + 'px;height:' + e.h + 'px"></iframe></div></div>';
  }
  function figHtml(m) {
    return '<figure class="sp-fig' + (m.dark ? ' dark' : '') + '"><img src="' + m.img + '" alt="' + esc(m.cap) + '" loading="lazy">' +
      (m.cap ? '<figcaption>' + esc(m.cap) + '</figcaption>' : '') + '</figure>';
  }
  function galleryHtml(g, cls) {
    return '<div class="' + (cls || 'sp-gallery') + '">' + g.map(figHtml).join('') + '</div>';
  }

  // A section's pieces, each as HTML (empty string when missing), so designs can place them.
  function parts(sec) {
    var o = { text: '', media: '', embed: '', buttons: '', extra: '' };
    (sec.p || []).forEach(function (t) { o.text += '<p>' + esc(t) + '</p>'; });
    if (sec.media) o.media = sec.media.map(figHtml).join('');
    if (sec.embed) o.embed = embedHtml(sec.embed);
    var btns = [];
    if (sec.fx) btns.push('<button class="sp-btn" data-fx="snow">Snow</button><button class="sp-btn" data-fx="fireworks">Fireworks</button><button class="sp-btn" data-fx="trail">Cursor trail</button>');
    if (sec.embed) btns.push('<a class="sp-btn primary" data-open="' + (sec.embed.id || '') + '" href="' + sec.embed.src + '" target="_blank" rel="noopener">Open full screen ↗</a>');
    (sec.buttons || []).forEach(function (b) { btns.push('<a class="sp-btn" href="' + b.href + '" target="_blank" rel="noopener">' + esc(b.text) + ' ↗</a>'); });
    if (sec.song) btns.push('<button class="sp-btn" data-song="' + sec.song.src + '" data-play="' + esc(sec.song.play) + '" data-stop="' + esc(sec.song.stop) + '">' + esc(sec.song.play) + '</button>');
    if (btns.length) o.buttons = '<div class="sp-btns">' + btns.join('') + '</div>';
    var x = '';
    (sec.lists || []).forEach(function (l) {
      x += '<h3>' + esc(l.h) + '</h3><ul class="sp-list">' + l.items.map(function (it) {
        return '<li>' + (it[1] ? '<a href="' + it[1] + '" download>' + esc(it[0]) + '</a>' : '<span>' + esc(it[0]) + '</span>') + '</li>';
      }).join('') + '</ul>';
    });
    (sec.scripts || []).forEach(function (s) {
      x += '<h3>' + esc(s.h) + '</h3><p>' + esc(s.p) + '</p><pre class="sp-code">' + esc(s.code) + '</pre>' +
        '<div class="sp-btns"><button class="sp-btn" data-script="' + s.action + '" data-on="' + esc(s.on) + '">Run it</button></div>';
    });
    if (sec.logos) {
      x += '<div class="sp-logos" data-target="' + sec.logos.target + '">' + sec.logos.items.map(function (l) {
        return '<button class="sp-logo" data-src="' + l.src + '" data-addr="' + esc(l.addr) + '"' + (l.hover ? ' data-hover="' + l.hover + '"' : '') + '>' +
          '<img src="' + l.img + '" alt="" loading="lazy"><span>' + esc(l.name) + '</span></button>';
      }).join('') + '</div>';
    }
    if (sec.gallery) x += galleryHtml(sec.gallery);
    (sec.sub || []).forEach(function (s) {
      x += '<h3>' + esc(s.h) + '</h3>' + (s.p ? '<p>' + esc(s.p) + '</p>' : '');
      if (s.gallery) x += galleryHtml(s.gallery);
      if (s.icons) x += galleryHtml(s.icons, 'sp-gallery sp-icons');
    });
    o.extra = x;
    return o;
  }
  // Everything inside a section except its heading, in v0.1's order.
  function body(sec) {
    var o = parts(sec);
    return o.text + o.media + o.embed + o.buttons + o.extra;
  }

  function slug(t) { return t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
  function firstEmbed(s) {
    for (var i = 0; i < s.sections.length; i++) if (s.sections[i].embed) return s.sections[i].embed;
    return null;
  }

  // Test bar: switch site-page design for the same site, and go back to the main page.
  function testBar() {
    var b = document.createElement('div');
    b.className = 'sp-test';
    // Only the favorite designs are offered.
    b.innerHTML = '<span>TEST · SITE PAGE</span>' + ['AI', 'AK', 'AN'].map(function (d) {
      return '<a href="' + pageUrl(site.key, d) + '" title="' + SITE_DESIGNS[d].name + '"' + (d === design ? ' class="on"' : '') + '>' + d + '</a>';
    }).join('') + '<span class="sep"></span><a href="' + home + '">' + (from ? 'BACK TO ' + from.split('/')[2].split('-')[0] : 'ALL CANDIDATES') + '</a>';
    document.body.appendChild(b);
    try { localStorage.setItem('splash-sitepage', design); } catch (e) {}
  }

  var css = '' +
    '.sp-test{position:fixed;left:50%;top:10px;transform:translateX(-50%);z-index:9999;display:flex;align-items:center;gap:2px;padding:4px 6px 4px 12px;border-radius:999px;background:#000000cc;color:#fff;font:500 10px ui-monospace,monospace;max-width:calc(100vw - 20px);overflow-x:auto;white-space:nowrap;scrollbar-width:none}' +
    '.sp-test span{padding-right:6px;letter-spacing:.05em}.sp-test .sep{width:1px;height:16px;background:#fff4;margin:0 6px;padding:0}' +
    '.sp-test a{height:26px;min-width:32px;padding:0 8px;display:flex;align-items:center;justify-content:center;border-radius:999px;color:#fff;font:700 11px ui-monospace,monospace;text-decoration:none}' +
    '.sp-test a.on{background:#ffd23f;color:#111}' +
    '.sp-vp{position:relative;overflow:hidden;background:#fff top/cover no-repeat}.sp-vp iframe{position:absolute;left:0;top:0;border:0;transform-origin:0 0;background:transparent}' +
    '.sp-fig img,.sp-gallery img{cursor:zoom-in}' +
    '.sp-logo{cursor:pointer}' +
    '.sp-viewer{position:fixed;inset:0;z-index:10000;background:#000e;display:none;align-items:center;justify-content:center;flex-direction:column;gap:12px;padding:40px 60px}' +
    '.sp-viewer.open{display:flex}.sp-viewer img{max-width:100%;max-height:calc(100vh - 140px);object-fit:contain}' +
    '.sp-viewer .cap{color:#eee;font:14px/1.4 system-ui,sans-serif;text-align:center;max-width:720px}' +
    '.sp-viewer .n{position:absolute;top:16px;left:20px;color:#aaa;font:12px ui-monospace,monospace}' +
    '.sp-viewer button{position:absolute;border:0;background:#fff2;color:#fff;width:44px;height:44px;border-radius:50%;font-size:26px;cursor:pointer;line-height:1}' +
    '.sp-viewer .x{top:12px;right:16px}.sp-viewer .l{left:12px;top:50%}.sp-viewer .r{right:12px;top:50%}' +
    '#sp-fx{position:fixed;inset:0;pointer-events:none;z-index:9000}' +
    '.sp-trail{position:fixed;pointer-events:none;z-index:9001;color:#ffd23f;font-size:16px;transform:translate(-50%,-50%);transition:opacity .7s,transform .7s}' +
    '.sp-btn.on{outline:2px solid currentColor;outline-offset:2px}';

  // Scale every live window to its column width.
  function fit() {
    document.querySelectorAll('.sp-vp').forEach(function (v) {
      var s = v.clientWidth / +v.dataset.w, f = v.querySelector('iframe');
      if (!s) return;
      f.style.transform = 'scale(' + s + ')';
      f.style.height = Math.max(+v.dataset.h, Math.ceil(v.clientHeight / s)) + 'px';
    });
  }

  function wire() {
    // Back and forward in each window (../browsernav.js).
    if (window.BrowserNav) document.querySelectorAll('.sp-win').forEach(function (w) {
      var f = w.querySelector('iframe'); if (f) BrowserNav.attach(f, w.querySelector('.sp-back'), w.querySelector('.sp-fwd'));
    });
    addEventListener('resize', fit);
    fit();
    if (window.ResizeObserver) { var ro = new ResizeObserver(fit); document.querySelectorAll('.sp-vp').forEach(function (v) { ro.observe(v); }); }

    // Logos load a page into their target window.
    document.querySelectorAll('.sp-logos').forEach(function (box) {
      var t = box.dataset.target;
      box.querySelectorAll('.sp-logo').forEach(function (b) {
        var img = b.querySelector('img'), still = img.src;
        if (b.dataset.hover) {
          b.addEventListener('mouseenter', function () { img.src = b.dataset.hover; });
          b.addEventListener('mouseleave', function () { img.src = still; });
        }
        b.addEventListener('click', function () {
          var w = document.querySelector('[data-embed="' + t + '"]');
          if (!w) { window.open(b.dataset.src, '_blank'); return; }
          w.querySelector('iframe').src = b.dataset.src;
          w.querySelector('.sp-url').textContent = b.dataset.addr;
          document.querySelectorAll('[data-open="' + t + '"]').forEach(function (a) { a.href = b.dataset.src; });
          box.querySelectorAll('.sp-logo').forEach(function (x) { x.classList.toggle('on', x === b); });
          var r = w.getBoundingClientRect();
          if (r.top < 0 || r.bottom > innerHeight) w.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
      });
    });

    // Titans song: plays only from the button.
    document.querySelectorAll('[data-song]').forEach(function (b) {
      var a = new Audio(); a.preload = 'none'; a.src = b.dataset.song;
      var off = function () { b.textContent = b.dataset.play; b.classList.remove('on'); };
      b.addEventListener('click', function () {
        if (a.paused) { var pr = a.play(); if (pr) pr.catch(off); b.textContent = b.dataset.stop; b.classList.add('on'); }
        else { a.pause(); a.currentTime = 0; off(); }
      });
      a.addEventListener('ended', off);
    });

    // Awesome Stuff scripts, as in v0.1.
    var flyTimer = null;
    document.querySelectorAll('[data-script]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (b.dataset.script === 'edit') {
          var on = document.designMode !== 'on';
          document.designMode = on ? 'on' : 'off';
          document.body.contentEditable = on ? 'true' : 'false';
          b.textContent = on ? b.dataset.on : 'Run it';
          b.classList.toggle('on', on);
          return;
        }
        var imgs = Array.prototype.slice.call(document.getElementsByTagName('img'));
        if (flyTimer) {
          clearInterval(flyTimer); flyTimer = null;
          imgs.forEach(function (i) { i.style.position = ''; i.style.left = ''; i.style.top = ''; i.style.zIndex = ''; i.style.width = ''; });
          b.textContent = 'Run it'; b.classList.remove('on');
          return;
        }
        var R = 0, x1 = .1, y1 = .05, x2 = .25, y2 = .24, x3 = 1.6, y3 = .24;
        imgs.forEach(function (i) { i.style.position = 'fixed'; i.style.zIndex = '40'; i.style.width = '180px'; });
        flyTimer = setInterval(function () {
          var x4 = Math.min(300, innerWidth / 2 - 100), y4 = Math.min(200, innerHeight / 2 - 80), x5 = innerWidth / 2 - 90, y5 = innerHeight / 2 - 30;
          imgs.forEach(function (i, k) {
            i.style.left = (Math.sin(R * x1 + k * x2 + x3) * x4 + x5) + 'px';
            i.style.top = (Math.cos(R * y1 + k * y2 + y3) * y4 + y5) + 'px';
          });
          R++;
        }, 5);
        b.textContent = b.dataset.on; b.classList.add('on');
      });
    });

    // Askthenickman effects, as in v0.1.
    if (document.querySelector('[data-fx]')) {
      var c = document.createElement('canvas'); c.id = 'sp-fx'; document.body.appendChild(c);
      var ctx = c.getContext('2d'), on = { snow: false, fireworks: false, trail: false }, flakes = [], sparks = [], running = false;
      var size = function () { c.width = innerWidth; c.height = innerHeight; };
      addEventListener('resize', size); size();
      var flake = function (top) { return { x: Math.random() * c.width, y: top ? -10 : Math.random() * c.height, r: 1 + Math.random() * 3, v: .5 + Math.random() * 1.5, d: Math.random() * 6 }; };
      var burst = function () {
        var x = c.width * (.15 + Math.random() * .7), y = c.height * (.15 + Math.random() * .4), hue = Math.floor(Math.random() * 360);
        for (var i = 0; i < 60; i++) { var a = Math.random() * Math.PI * 2, s = 1 + Math.random() * 4; sparks.push({ x: x, y: y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 60 + Math.random() * 30, hue: hue }); }
      };
      var frame = function () {
        ctx.clearRect(0, 0, c.width, c.height);
        if (on.snow) {
          ctx.fillStyle = 'rgba(255,255,255,0.9)'; ctx.strokeStyle = 'rgba(120,140,170,0.5)';
          flakes.forEach(function (f) {
            f.y += f.v; f.x += Math.sin((f.y + f.d * 40) / 40) * .6;
            if (f.y > c.height + 5) Object.assign(f, flake(true));
            ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
          });
        }
        if (on.fireworks && Math.random() < .03) burst();
        sparks = sparks.filter(function (p) { return p.life > 0; });
        sparks.forEach(function (p) {
          p.x += p.vx; p.y += p.vy; p.vy += .05; p.vx *= .98; p.life--;
          ctx.fillStyle = 'hsla(' + p.hue + ',100%,55%,' + Math.min(1, p.life / 40) + ')';
          ctx.fillRect(p.x, p.y, 2.5, 2.5);
        });
        if (on.snow || on.fireworks || sparks.length) requestAnimationFrame(frame);
        else { running = false; ctx.clearRect(0, 0, c.width, c.height); }
      };
      var start = function () { if (!running) { running = true; requestAnimationFrame(frame); } };
      addEventListener('mousemove', function (e) {
        if (!on.trail) return;
        var s = document.createElement('span'); s.className = 'sp-trail'; s.textContent = '✦';
        s.style.left = e.clientX + 'px'; s.style.top = e.clientY + 'px';
        document.body.appendChild(s);
        requestAnimationFrame(function () { s.style.opacity = '0'; });
        setTimeout(function () { s.remove(); }, 750);
      });
      document.querySelectorAll('[data-fx]').forEach(function (b) {
        b.addEventListener('click', function () {
          var k = b.dataset.fx; on[k] = !on[k]; b.classList.toggle('on', on[k]);
          if (k === 'snow') flakes = on.snow ? Array.from({ length: 120 }, function () { return flake(false); }) : [];
          if (k === 'fireworks' && on.fireworks) burst();
          if (k !== 'trail') start();
        });
      });
    }

    // Image viewer: pictures open full screen with their caption; arrows, keys, or a swipe step through them.
    var imgs = Array.prototype.slice.call(document.querySelectorAll('.sp-fig img'));
    if (imgs.length) {
      var v = document.createElement('div'); v.className = 'sp-viewer';
      v.innerHTML = '<span class="n"></span><button class="x" aria-label="Close">×</button><button class="l" aria-label="Previous">‹</button><img alt=""><div class="cap"></div><button class="r" aria-label="Next">›</button>';
      document.body.appendChild(v);
      var big = v.querySelector('img'), cap = v.querySelector('.cap'), n = v.querySelector('.n'), cur = 0;
      var show = function (k) {
        cur = (k + imgs.length) % imgs.length;
        var im = imgs[cur], fc = im.closest('figure').querySelector('figcaption');
        big.src = im.currentSrc || im.src; cap.textContent = fc ? fc.textContent : ''; n.textContent = (cur + 1) + ' / ' + imgs.length;
      };
      var open = function (k) { show(k); v.classList.add('open'); document.body.style.overflow = 'hidden'; };
      var close = function () { v.classList.remove('open'); document.body.style.overflow = ''; };
      imgs.forEach(function (im, k) { im.addEventListener('click', function (e) { e.preventDefault(); open(k); }); });
      v.querySelector('.l').addEventListener('click', function (e) { e.stopPropagation(); show(cur - 1); });
      v.querySelector('.r').addEventListener('click', function (e) { e.stopPropagation(); show(cur + 1); });
      v.querySelector('.x').addEventListener('click', close);
      v.addEventListener('click', function (e) { if (e.target === v) close(); });
      addEventListener('keydown', function (e) {
        if (!v.classList.contains('open')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowLeft') show(cur - 1);
        if (e.key === 'ArrowRight') show(cur + 1);
      });
      var x0 = null;
      v.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
      v.addEventListener('touchend', function (e) { if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) show(cur + (dx < 0 ? 1 : -1)); x0 = null; });
    }
  }

  window.SP = {
    site: site, sites: SITES, prev: prev, next: next, home: home, from: from, design: design,
    esc: esc, url: pageUrl, facts: facts, factsHtml: factsHtml, body: body, parts: parts, embedHtml: embedHtml,
    figHtml: figHtml, galleryHtml: galleryHtml, slug: slug, firstEmbed: firstEmbed, fit: fit,
    boot: function (render, after) {
      document.title = site.name + ' · Old Sites';
      // Site colors from palette.js, by position in the site's palette: --accent (color 1) is fills, marks and
      // site-colored text; --on-accent (color 2) is text on a color-1 fill; --accent-2 and --accent-3 are colors 2 and 3.
      var root = document.documentElement, P = PALETTE, k = site.key, r = P.ranked(k);
      root.style.setProperty('--accent', r[0]);
      root.style.setProperty('--accent-bg', P.bg(k, 0));
      root.style.setProperty('--on-accent', r[1] || r[0]);
      root.style.setProperty('--accent-ink', r[0]);
      root.style.setProperty('--accent-ink-lg', r[0]);
      root.style.setProperty('--accent-mark', r[0]);
      root.style.setProperty('--accent-2', r[1] || r[0]);
      root.style.setProperty('--accent-3', r[2] || r[1] || r[0]);
      var ic = document.createElement('link'); ic.rel = 'icon'; ic.type = 'image/x-icon'; ic.href = site.favicon; document.head.appendChild(ic);
      var st = document.createElement('style'); st.textContent = css; document.head.insertBefore(st, document.head.firstChild);
      document.getElementById('app').innerHTML = render(site, window.SP);
      testBar();
      wire();
      if (after) after(site, window.SP);
    }
  };
})();
