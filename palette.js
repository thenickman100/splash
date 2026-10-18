// Every site's palette, read from the site's own code on hackahobo.info. This file is the one place palettes
// live: palette.html shows where each color comes from, and the candidates and site pages take their colors
// from here, so editing a palette here updates every page.
//
// colors: ranked, color 1 first. Each stripe of a two-color pattern (Awesome Stuff's gradients) is its own color.
// extra: other colors found in the site's code, not in the ranking.
// px and img: the pixel each color was read from on a lossless 1280-wide capture, and its zoom images in palette/.
(function () {
  var SITES = {
 "awesome": {
  "name": "Awesome Stuff",
  "page": "https://hackahobo.info/projects/sites/lawesomel/index.html",
  "colors": [
   {
    "hex": "#acf083",
    "what": "Box headings",
    "src": "green/style.css\n.fw-title { background: [[#acf083]] url('title-bg.gif') top repeat-x; }",
    "px": [
     [
      174,
      177
     ]
    ],
    "img": [
     "awesome-1"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#30341d",
    "what": "Page background",
    "src": ".design.css\nbody { background-color: [[#30341d]]; }",
    "px": [
     [
      11,
      143
     ]
    ],
    "img": [
     "awesome-2"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#e6edee",
    "what": "Boxes",
    "src": "Chromz.css\n.fw-paragraph { background: [[#e6edee]] url('img08.gif') repeat-x; }",
    "px": [
     [
      174,
      227
     ]
    ],
    "img": [
     "awesome-3"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#94a157",
    "what": "Top of the header gradient behind the logo, stripe 1 of 2",
    "src": "image green/container-bg.gif (#fw-container background), its top rows",
    "px": [
     [
      10,
      5
     ]
    ],
    "img": [
     "awesome-4a"
    ],
    "edge": [
     true
    ]
   },
   {
    "hex": "#a0ac66",
    "what": "Top of the header gradient behind the logo, stripe 2 of 2",
    "src": "image green/container-bg.gif (#fw-container background), its top rows",
    "px": [
     [
      7,
      7
     ]
    ],
    "img": [
     "awesome-4b"
    ],
    "edge": [
     true
    ]
   },
   {
    "hex": "#68a94f",
    "what": "Underlines below the menu links",
    "src": "green/style.css\n#fw-nav-menu a { border-bottom-color: [[#68a94f]]; }",
    "px": [
     [
      183,
      111
     ]
    ],
    "img": [
     "awesome-5"
    ],
    "edge": [
     false
    ]
   }
  ],
  "extra": [
   {
    "hex": "#4c532d",
    "what": "Footer, stripe 1 of 2",
    "src": "green/style.css\n#fw-footer { background: [[#535a31]] url('html-bg.gif') repeat-x; }\nimage html-bg.gif gives the stripe its second color",
    "px": [
     [
      19,
      1044
     ]
    ],
    "img": [
     "awesome-x1a"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#535a31",
    "what": "Footer, stripe 2 of 2",
    "src": "green/style.css\n#fw-footer { background: [[#535a31]] url('html-bg.gif') repeat-x; }\nimage html-bg.gif gives the stripe its second color",
    "px": [
     [
      16,
      1043
     ]
    ],
    "img": [
     "awesome-x1b"
    ],
    "edge": [
     false
    ]
   }
  ]
 },
 "ask": {
  "name": "Askthenickman",
  "page": "https://hackahobo.info/projects/sites/askthenickman/index.html",
  "colors": [
   {
    "hex": "#d60000",
    "what": "Red of the logo",
    "src": "image askthenickman.png (the logo), its most common red",
    "px": [
     [
      969,
      123
     ]
    ],
    "img": [
     "ask-1"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#000000",
    "what": "Page background",
    "src": "askthenickman.css\nbody { background-color: [[black]]; }",
    "px": [
     [
      11,
      420
     ]
    ],
    "img": [
     "ask-2"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#fecb00",
    "what": "Yellow of the logo",
    "src": "image askthenickman.png (the logo), its most common yellow",
    "px": [
     [
      591,
      321
     ]
    ],
    "img": [
     "ask-3"
    ],
    "edge": [
     false
    ]
   }
  ],
  "extra": []
 },
 "titans": {
  "name": "Titans Softball",
  "page": "https://hackahobo.info/projects/sites/titans/titans.html",
  "colors": [
   {
    "hex": "#ffc200",
    "what": "Gold page",
    "src": "titans.html\nbody { background-color: [[#ffc200]]; }",
    "px": [
     [
      11,
      11
     ]
    ],
    "img": [
     "titans-1"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#362a38",
    "what": "Purple tabs",
    "src": "titans.html\ntd.header { background-color: [[#362a38]]; color: white; }",
    "px": [
     [
      40,
      274
     ]
    ],
    "img": [
     "titans-2"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#ffffff",
    "what": "White tab text",
    "src": "titans.html\ntd.header { color: [[white]]; }",
    "px": [
     [
      321,
      289
     ]
    ],
    "img": [
     "titans-3"
    ],
    "edge": [
     false
    ]
   }
  ],
  "extra": []
 },
 "hobo": {
  "name": "Hack a HOBO",
  "page": "https://hackahobo.info/?theme=original (2026 Edition, original theme)",
  "colors": [
   {
    "hex": "#29a4c6",
    "what": "Blue behind the logo",
    "src": "files/style-home.css  .section-2 { background-color: var(--color-1); }\nfiles/style-shared.css  .original-theme { --og-teal-primary: [[#29a4c6]]; }",
    "px": [
     [
      11,
      12
     ]
    ],
    "img": [
     "hobo-1"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#ffffff",
    "what": "White page",
    "src": "files/style-shared.css  .original-theme { --og-white: [[#ffffff]]; } (body background)",
    "px": [
     [
      11,
      120
     ]
    ],
    "img": [
     "hobo-2"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#30a92b",
    "what": "Green of the logo",
    "src": "image files/hackahobo.png (the logo on the 2026 site), its green",
    "px": [
     [
      179,
      50
     ]
    ],
    "img": [
     "hobo-3"
    ],
    "edge": [
     false
    ]
   }
  ],
  "extra": [
   {
    "hex": "#007c9e",
    "what": "Deep teal of the menu frame and section titles",
    "src": "files/style-shared.css  .original-theme { --og-teal-dark: [[#007c9e]]; }",
    "px": [
     [
      326,
      12
     ]
    ],
    "img": [
     "hobo-x1"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#cdf4ff",
    "what": "Light teal game containers",
    "src": "files/style-shared.css  .original-theme { --og-teal-light: [[#cdf4ff]]; }",
    "px": [
     [
      1015,
      100
     ]
    ],
    "img": [
     "hobo-x2"
    ],
    "edge": [
     false
    ]
   }
  ]
 },
 "bv": {
  "name": "BV Homework",
  "page": "https://hackahobo.info/projects/sites/bv-homework/BVHomework.html",
  "colors": [
   {
    "hex": "#f21411",
    "what": "Red of the logo",
    "src": "image BVHomeworkBigHanako.jpg (the logo), its most common red",
    "px": [
     [
      891,
      59
     ]
    ],
    "img": [
     "bv-1"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#81c8ff",
    "what": "Sky blue page",
    "src": "image background.jpg (body background), its main color\n(the nav hover in the HTML is nearly the same blue, [[#82c8ff]])",
    "px": [
     [
      11,
      11
     ]
    ],
    "img": [
     "bv-2"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#949000",
    "what": "Green nav buttons",
    "src": "BVHomework.html\n.nav { background-color: [[#949000]]; color: white; }",
    "px": [
     [
      153,
      179
     ]
    ],
    "img": [
     "bv-3"
    ],
    "edge": [
     false
    ]
   }
  ],
  "extra": []
 },
 "engen": {
  "name": "EnGen NextGen",
  "page": "https://hackahobo.info/projects/sites/engen/home.php",
  "colors": [
   {
    "hex": "#e15252",
    "what": "Red text, under the logo and across the site",
    "src": "css.css\nfigcaption { color: [[#E15252]]; font-style: oblique; font-variant: small-caps; }",
    "px": [
     [
      399,
      135
     ]
    ],
    "img": [
     "engen-1"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#0055e6",
    "what": "Blue of the logo and headings",
    "src": "css.css\nh3 { color: [[#0055e6]]; }  hr { border-color: [[#0055e6]]; }",
    "px": [
     [
      521,
      108
     ]
    ],
    "img": [
     "engen-2"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#ffffff",
    "what": "White paper",
    "src": "image bg.png (graph-paper background), its main color; css.css .center { background-color: [[#FFFFFF]]; }",
    "px": [
     [
      16,
      208
     ]
    ],
    "img": [
     "engen-3"
    ],
    "edge": [
     false
    ]
   }
  ],
  "extra": []
 },
 "home": {
  "name": "Home",
  "page": "https://hackahobo.info/projects/sites/home-original/index.php",
  "colors": [
   {
    "hex": "#45e8ff",
    "what": "Cyan headers",
    "src": "style.css\n.blue-background-0 { background-color: [[rgb(69,232,255)]]; }",
    "px": [
     [
      153,
      109
     ]
    ],
    "img": [
     "home-1"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#c6f8ff",
    "what": "Light cyan boxes and borders",
    "src": "style.css\n.blue-background-1 { background-color: [[rgb(198,248,255)]]; }",
    "px": [
     [
      268,
      237
     ]
    ],
    "img": [
     "home-2"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#fefefe",
    "what": "White patterned background",
    "src": "style.css  html { background-image: url('pattern.png'); }  body { background: linear-gradient(to right, white, transparent, white); }\nthe most common pixel of the patterned margin",
    "px": [
     [
      30,
      14
     ]
    ],
    "img": [
     "home-3"
    ],
    "edge": [
     false
    ]
   }
  ],
  "extra": []
 },
 "spaceatlas": {
  "name": "Space Atlas",
  "page": "https://spaceatlas.hackahobo.info/",
  "colors": [
   {
    "hex": "#2f2f2f",
    "what": "Gray menu bar",
    "src": "stylesheet.min.css\n#header { background-color: [[#2f2f2f]]; }",
    "px": [
     [
      11,
      11
     ]
    ],
    "img": [
     "sa-1"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#000000",
    "what": "Black background",
    "src": "stylesheet.min.css\nbody { font-family: arial; margin: 0; background-color: [[#000]]; }",
    "px": [
     [
      11,
      90
     ]
    ],
    "img": [
     "sa-2"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#ff8100",
    "what": "Mars orange",
    "src": "stylesheet.min.css\n[id='3headerBody'] { text-decoration-color: [[#ff8100]]; }  .high { background-color: [[#ff8100]]; }",
    "px": [
     [
      699,
      57
     ]
    ],
    "img": [
     "sa-3"
    ],
    "edge": [
     false
    ]
   }
  ],
  "extra": [
   {
    "hex": "#49aae3",
    "what": "Earth blue",
    "src": "stylesheet.min.css\n[id='1headerBody'] { text-decoration-color: [[#49aae3]]; }  .low { background-color: [[#49aae3]]; }",
    "px": [
     [
      537,
      57
     ]
    ],
    "img": [
     "sa-x1"
    ],
    "edge": [
     false
    ]
   }
  ]
 }
};

  // Trial order: the palette page can reorder colors in this browser only. It is saved in localStorage as
  // { site: { colors: [img keys], extra: [img keys] } } and applied here, so every page in this browser
  // shows the trial order until it is reset. The published order above is untouched.
  var KEY = 'splash-palette-order', PUBLISHED = {};
  Object.keys(SITES).forEach(function (k) {
    PUBLISHED[k] = { colors: SITES[k].colors.map(function (c) { return c.img[0]; }), extra: SITES[k].extra.map(function (c) { return c.img[0]; }) };
  });
  function arrange(order) {
    Object.keys(SITES).forEach(function (k) {
      var all = {}, o = order[k] || PUBLISHED[k];
      SITES[k].colors.concat(SITES[k].extra).forEach(function (c) { all[c.img[0]] = c; });
      var take = function (ids) { return ids.filter(function (id) { return all[id]; }).map(function (id) { var c = all[id]; delete all[id]; return c; }); };
      var colors = take(o.colors), extra = take(o.extra);
      Object.keys(all).forEach(function (id) { extra.push(all[id]); });
      SITES[k].colors = colors.length ? colors : extra.splice(0, 1);
      SITES[k].extra = extra;
    });
  }
  var trial = null;
  try { trial = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) {}
  if (trial) arrange(trial);

  function rgb(h) { var n = parseInt(h.slice(1), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; }
  function lum(h) {
    var c = rgb(h).map(function (v) { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); });
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  }
  // WCAG contrast ratio between two hex colors.
  function contrast(a, b) { var x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); }
  function toHex(c) {
    if (/^#[0-9a-f]{6}$/i.test(c)) return c.toLowerCase();
    var m = String(c).match(/\d+(\.\d+)?/g); if (!m) return '#ffffff';
    return '#' + m.slice(0, 3).map(function (v) { return ('0' + Math.round(+v).toString(16)).slice(-2); }).join('');
  }
  function site(key) { return SITES[key === 'hobo26' ? 'hobo' : key]; }
  function ranked(key) { return site(key).colors.map(function (c) { return c.hex; }); }
  // First ranked color that reads against bg at the given ratio; if none does, color 1 as it is.
  function pick(key, bg, min) {
    bg = toHex(bg); min = min || 4.5;
    var r = ranked(key);
    for (var i = 0; i < r.length; i++) if (contrast(r[i], bg) >= min) return r[i];
    return r[0];
  }
  window.PALETTE = {
    sites: SITES,
    // Trial order controls, used by palette.html.
    trial: !!trial,
    published: PUBLISHED,
    saveOrder: function (order) { arrange(order); try { localStorage.setItem(KEY, JSON.stringify(order)); } catch (e) {} this.trial = true; },
    clearOrder: function () { arrange(PUBLISHED); try { localStorage.removeItem(KEY); } catch (e) {} this.trial = false; },
    exportText: function () {
      var lines = ['Palette order for Old Sites', ''];
      Object.keys(SITES).forEach(function (k) {
        var t = SITES[k];
        lines.push(t.name + ': ' + t.colors.map(function (c, i) { return (i + 1) + ' ' + c.hex + ' (' + c.what + ')'; }).join(', '));
        if (t.extra.length) lines.push('  other: ' + t.extra.map(function (c) { return c.hex + ' (' + c.what + ')'; }).join(', '));
      });
      lines.push('', 'order: ' + JSON.stringify(this.order()));
      return lines.join('\n');
    },
    order: function () { var o = {}; Object.keys(SITES).forEach(function (k) { o[k] = { colors: SITES[k].colors.map(function (c) { return c.img[0]; }), extra: SITES[k].extra.map(function (c) { return c.img[0]; }) }; }); return o; },
    contrast: contrast,
    ranked: ranked,
    // Color 1, the site's main color, for fills such as bars and buttons.
    main: function (key) { return ranked(key)[0]; },
    // A site color to use as text or a thin mark on a page background bg (any CSS color).
    ink: function (key, bg, min) { return pick(key, bg, min); },
    // Text color to put on top of a site color fill: the first ranked color that reads on it, or else the
    // palette color with the most contrast against it (color 1 would vanish on its own fill).
    on: function (key, fillHex, min) {
      fillHex = toHex(fillHex); min = min || 4.5;
      var r = ranked(key), best = null;
      for (var i = 0; i < r.length; i++) {
        if (contrast(r[i], fillHex) >= min) return r[i];
        if (!best || contrast(r[i], fillHex) > contrast(best, fillHex)) best = r[i];
      }
      return best;
    }
  };

  // Palette panel: a Palette button on every page that loads this file, for trying a different order in place.
  // A change saves the trial order and reloads the page so it redraws in the new colors; the panel reopens.
  function panel() {
    if (window.PALETTE_NO_PANEL || document.getElementById('pal-btn')) return;
    var P = window.PALETTE, here = new URLSearchParams(location.search).get('site');
    var css = document.createElement('style');
    css.textContent =
      '#pal-btn{position:fixed;right:14px;bottom:14px;z-index:100000;height:38px;padding:0 14px;border:0;border-radius:999px;background:#000000cc;color:#fff;font:700 12px ui-monospace,monospace;cursor:pointer;box-shadow:0 6px 20px #0005}' +
      '#pal-btn i{display:inline-block;width:10px;height:10px;border-radius:50%;background:#ffd23f;margin-right:7px;vertical-align:-1px}' +
      '#pal{position:fixed;right:14px;bottom:62px;z-index:100000;width:min(380px,calc(100vw - 28px));max-height:min(72vh,640px);overflow:auto;background:#fff;color:#15181d;border-radius:14px;box-shadow:0 20px 60px #0007;font:13px/1.4 system-ui,sans-serif;text-align:left;zoom:1}' +
      '#pal *{box-sizing:border-box}#pal[hidden]{display:none}' +
      '#pal .pal-top{position:sticky;top:0;background:#fff;padding:12px 14px 10px;border-bottom:1px solid #e3e6ea;display:flex;flex-wrap:wrap;gap:6px;align-items:center}' +
      '#pal .pal-top b{flex:1 1 100%;font-size:14px}#pal .pal-top small{flex:1 1 100%;color:#5b6270}' +
      '#pal button{font:600 12px system-ui,sans-serif;padding:6px 10px;border-radius:7px;border:1px solid #d6dbe1;background:#f6f7f9;color:#15181d;cursor:pointer}#pal button:disabled{opacity:.3;cursor:default}' +
      '#pal details{border-bottom:1px solid #eef0f3}#pal summary{cursor:pointer;padding:10px 14px;display:flex;align-items:center;gap:8px;font-weight:700;list-style:none}#pal summary::-webkit-details-marker{display:none}' +
      '#pal summary .pal-st{display:flex;gap:2px;margin-left:auto}#pal summary .pal-st span{width:14px;height:14px;border-radius:3px;border:1px solid #0002}' +
      '#pal .pal-c{display:flex;align-items:center;gap:8px;padding:5px 14px}#pal .pal-c .pal-sw{flex:none;width:26px;height:26px;border-radius:6px;border:1px solid #0002;font:700 10px ui-monospace,monospace;display:flex;align-items:center;justify-content:center}' +
      '#pal .pal-c .pal-t{flex:1;min-width:0}#pal .pal-c code{font:600 12px ui-monospace,monospace}#pal .pal-c .pal-w{color:#5b6270;font-size:11.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
      '#pal .pal-c button{padding:4px 7px}#pal .pal-lbl{padding:6px 14px 2px;color:#5b6270;font-size:11px;text-transform:uppercase;letter-spacing:.05em}' +
      '#pal textarea{width:calc(100% - 28px);margin:8px 14px;height:180px;font:11px/1.45 ui-monospace,monospace;border:1px solid #d6dbe1;border-radius:8px;padding:8px}';
    document.head.appendChild(css);
    var btn = document.createElement('button'); btn.id = 'pal-btn'; btn.innerHTML = '<i></i>Palette' + (P.trial ? ' · trial' : '');
    var box = document.createElement('div'); box.id = 'pal'; box.hidden = true;
    document.body.appendChild(box); document.body.appendChild(btn);
    var open = {}; try { open = JSON.parse(sessionStorage.getItem('splash-pal-open') || '{}'); } catch (e) {}
    function sw(h, label) { return '<span class="pal-sw" style="background:' + h + ';color:' + (contrast(h, '#000000') >= contrast(h, '#ffffff') ? '#111' : '#fff') + '">' + label + '</span>'; }
    function line(k, l, i, n, c) {
      var b = function (a, t, off) { return '<button data-k="' + k + '" data-l="' + l + '" data-i="' + i + '" data-a="' + a + '"' + (off ? ' disabled' : '') + '>' + t + '</button>'; };
      return '<div class="pal-c">' + sw(c.hex, l === 'colors' ? i + 1 : '·') + '<div class="pal-t"><code>' + c.hex + '</code><div class="pal-w">' + c.what + '</div></div>' +
        b('up', '↑', i === 0) + b('down', '↓', i === n - 1) + (l === 'colors' ? b('out', '−', n === 1) : b('in', '+')) + '</div>';
    }
    function draw() {
      var keys = Object.keys(SITES); if (here && SITES[here]) keys = [here].concat(keys.filter(function (k) { return k !== here; }));
      box.innerHTML = '<div class="pal-top"><b>Palette order</b><small>' + (P.trial ? 'Trial order on in this browser.' : 'Published order.') +
        ' ↑ ↓ reorder, − takes a color out of the ranking, + adds it back.</small><button data-x="export">Export</button>' +
        (P.trial ? '<button data-x="reset">Reset all</button>' : '') + '<button data-x="full">All details</button><button data-x="close">Close</button></div>' +
        (open.exp ? '<textarea readonly>' + P.exportText().replace(/</g, '&lt;') + '</textarea><div style="padding:0 14px 10px"><button data-x="copy">Copy</button></div>' : '') +
        keys.map(function (k) {
          var t = SITES[k];
          return '<details data-k="' + k + '"' + ((open.page === location.pathname + location.search && open.site ? open.site === k : k === keys[0]) ? ' open' : '') + '><summary>' + t.name +
            '<span class="pal-st">' + t.colors.map(function (c) { return '<span style="background:' + c.hex + '"></span>'; }).join('') + '</span></summary>' +
            t.colors.map(function (c, i) { return line(k, 'colors', i, t.colors.length, c); }).join('') +
            (t.extra.length ? '<div class="pal-lbl">Other colors</div>' + t.extra.map(function (c, i) { return line(k, 'extra', i, t.extra.length, c); }).join('') : '') + '</details>';
        }).join('');
    }
    function keep(site) { open.on = !box.hidden; if (site) { open.site = site; open.page = location.pathname + location.search; } try { sessionStorage.setItem('splash-pal-open', JSON.stringify(open)); } catch (e) {} }
    btn.addEventListener('click', function () { box.hidden = !box.hidden; if (!box.hidden) draw(); keep(); });
    box.addEventListener('toggle', function (e) { if (e.target.open) keep(e.target.dataset.k); }, true);
    box.addEventListener('click', function (e) {
      var t = e.target.closest('button'); if (!t) return;
      if (t.dataset.a) {
        var k = t.dataset.k, l = t.dataset.l, i = +t.dataset.i, o = P.order(), a = o[k][l];
        if (t.dataset.a === 'up') a.splice(i - 1, 0, a.splice(i, 1)[0]);
        if (t.dataset.a === 'down') a.splice(i + 1, 0, a.splice(i, 1)[0]);
        if (t.dataset.a === 'out') o[k].extra.unshift(a.splice(i, 1)[0]);
        if (t.dataset.a === 'in') o[k].colors.push(a.splice(i, 1)[0]);
        P.saveOrder(o); keep(k); location.reload();
      }
      var x = t.dataset.x;
      if (x === 'close') { box.hidden = true; keep(); }
      if (x === 'reset') { P.clearOrder(); keep(); location.reload(); }
      if (x === 'export') { open.exp = !open.exp; keep(); draw(); }
      if (x === 'copy') { var ta = box.querySelector('textarea'); (navigator.clipboard ? navigator.clipboard.writeText(ta.value) : Promise.reject()).then(function () { t.textContent = 'Copied'; }, function () { ta.select(); document.execCommand('copy'); t.textContent = 'Copied'; }); }
      if (x === 'full') location.href = (location.pathname.indexOf('/candidates/') >= 0 ? '../../' : location.pathname.indexOf('/sitepages/') >= 0 ? '../' : '') + 'palette.html';
    });
    if (open.on) { box.hidden = false; draw(); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', panel); else panel();
})();
