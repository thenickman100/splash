// Content trial for the site pages. ../content.html lists every piece of each site's content (sections,
// paragraphs, pictures, windows, buttons, lists, logos), and Nick can cut pieces or rewrite text there. The
// trial is kept in this browser and applied here, right after data.js, so every site-page design shows it.
// Export gives the text to send back so it can be published in data.js.
//
// A piece's id is its place in data.js: s2 is the third section, s2.p0 its first paragraph, s2.m0 a picture,
// s2.e its window, s2.b0 a button, s2.l0 a download list, s2.x0 a script, s2.g0 a gallery picture, s2.u0 a
// group of pictures under a smaller heading, s2.o0 a logo, s2.fx the effect buttons and s2.song the song button.
// The windows at the top are t0, t1…, with the song beside them as song and its links as tl0, tl1….
(function () {
  // The key changes each time a review is published, since piece ids follow data.js's order.
  var KEY = 'splash-content-5';
  var ORIG = JSON.parse(JSON.stringify(window.SITES));

  // Suggested cuts, shown in content.html for Nick to accept or ignore. Nothing here is applied by itself.
  // (The first round was reviewed and published on Nick's choices.)
  var SUGGEST = {};

  var trial = null;
  try { trial = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) {}

  function short(t, n) { t = String(t || ''); return t.length > n ? t.slice(0, n - 1) + '…' : t; }

  // Every piece of a site's content, in page order: { id, kind, label, text (rewritable), sec }.
  function items(site) {
    var out = [], add0 = function (id, kind, label) { out.push({ id: id, kind: kind, label: label, sec: -1 }); };
    (site.top || []).forEach(function (t, j) {
      var e = t.ref ? site.sections.map(function (x) { return x.embed; }).filter(function (o) { return o && o.id === t.ref; })[0] : t;
      add0('t' + j, 'top window', (e ? e.title + ' · ' + e.addr : t.ref) + (t.ref ? ' (also in its section)' : ''));
    });
    if (site.song) add0('song', 'top button', site.song.play);
    (site.topLinks || []).forEach(function (l, j) { add0('tl' + j, 'top button', l.text); });
    site.sections.forEach(function (x, i) {
      var s = 's' + i, add = function (id, kind, label, text) { out.push({ id: id, kind: kind, label: label, text: text, sec: i }); };
      add(s, 'section', x.h, x.h);
      (x.p || []).forEach(function (t, j) { add(s + '.p' + j, 'paragraph', short(t, 90), t); });
      (x.media || []).forEach(function (m, j) { add(s + '.m' + j, 'picture', m.cap || 'Picture', m.cap); });
      if (x.embed) add(s + '.e', 'window', x.embed.title + ' · ' + x.embed.addr);
      if (x.fx) add(s + '.fx', 'buttons', 'Snow, Fireworks and Cursor trail buttons');
      (x.buttons || []).forEach(function (b, j) { add(s + '.b' + j, 'button', b.text); });
      if (x.song) add(s + '.song', 'button', x.song.play);
      (x.lists || []).forEach(function (l, j) { add(s + '.l' + j, 'download list', l.h + ' · ' + l.items.length + ' files'); });
      (x.scripts || []).forEach(function (sc, j) { add(s + '.x' + j, 'script', sc.h); });
      if (x.logos) x.logos.items.forEach(function (o, j) { add(s + '.o' + j, o.text ? 'button' : 'logo', o.name || o.text); });
      (x.gallery || []).forEach(function (g, j) { add(s + '.g' + j, 'picture', g.cap || 'Picture', g.cap); });
      (x.sub || []).forEach(function (u, j) { add(s + '.u' + j, 'pictures', u.h + ' · ' + ((u.gallery || u.icons || []).length) + ' pictures'); });
    });
    return out;
  }

  // A site with the trial's cuts and rewrites applied (a new object; the original is left alone).
  function apply(site, t) {
    site = JSON.parse(JSON.stringify(site));
    if (!t) return site;
    var cut = {}; (t.cut || []).forEach(function (id) { cut[id] = true; });
    var txt = t.text || {};
    if (txt.lede != null) site.lede = txt.lede;
    if (site.top) site.top = site.top.filter(function (_, j) { return !cut['t' + j]; });
    if (cut.song) delete site.song;
    if (site.topLinks) site.topLinks = site.topLinks.filter(function (_, j) { return !cut['tl' + j]; });
    var keep = function (base, arr, tag) { return (arr || []).filter(function (_, j) { return !cut[base + '.' + tag + j]; }); };
    var re = function (id, v) { return txt[id] != null ? txt[id] : v; };
    site.sections = site.sections.map(function (x, i) {
      var s = 's' + i;
      if (cut[s]) return null;
      x.h = re(s, x.h);
      if (x.p) x.p = x.p.map(function (v, j) { return re(s + '.p' + j, v); }).filter(function (_, j) { return !cut[s + '.p' + j]; });
      if (x.media) x.media = x.media.map(function (m, j) { m.cap = re(s + '.m' + j, m.cap); return m; }).filter(function (_, j) { return !cut[s + '.m' + j]; });
      if (x.gallery) x.gallery = x.gallery.map(function (g, j) { g.cap = re(s + '.g' + j, g.cap); return g; }).filter(function (_, j) { return !cut[s + '.g' + j]; });
      if (cut[s + '.e']) delete x.embed;
      if (cut[s + '.fx']) delete x.fx;
      if (cut[s + '.song']) delete x.song;
      x.buttons = keep(s, x.buttons, 'b'); x.lists = keep(s, x.lists, 'l'); x.scripts = keep(s, x.scripts, 'x'); x.sub = keep(s, x.sub, 'u');
      if (x.logos) { x.logos.items = keep(s, x.logos.items, 'o'); if (!x.logos.items.length) delete x.logos; }
      var empty = !(x.p && x.p.length) && !(x.media && x.media.length) && !x.embed && !x.fx && !x.song && !x.buttons.length &&
        !x.lists.length && !x.scripts.length && !x.logos && !(x.gallery && x.gallery.length) && !x.sub.length;
      return empty ? null : x;
    }).filter(Boolean);
    // Holiday logos load into a window by id; without that window they open the page in a new tab instead.
    var ids = site.sections.map(function (x) { return x.embed && x.embed.id; });
    site.sections.forEach(function (x) { if (x.logos && ids.indexOf(x.logos.target) < 0) x.logos.target = ''; });
    return site;
  }

  function save(t) { trial = t; try { if (t) localStorage.setItem(KEY, JSON.stringify(t)); else localStorage.removeItem(KEY); } catch (e) {} }

  // The site pages see the trial.
  if (trial) window.SITES = ORIG.map(function (s) { return apply(s, trial[s.key]); });

  window.CONTENT = {
    original: ORIG,
    suggest: SUGGEST,
    items: items,
    apply: apply,
    get: function () { return trial || {}; },
    save: save,
    trial: function () { return !!trial; },
    exportText: function () {
      var t = trial || {}, lines = ['Site page content for Old Sites', ''];
      ORIG.forEach(function (site) {
        var st = t[site.key]; if (!st || (!(st.cut || []).length && !Object.keys(st.text || {}).length)) return;
        var all = {}; items(site).forEach(function (it) { all[it.id] = it; });
        lines.push(site.name);
        (st.cut || []).forEach(function (id) { var it = all[id]; lines.push('  Cut ' + (it ? it.kind + ': ' + (it.kind === 'section' ? it.label : '“' + short(it.label, 70) + '”') + (it.kind !== 'section' && it.sec >= 0 ? ' (in ' + site.sections[it.sec].h + ')' : '') : id)); });
        Object.keys(st.text || {}).forEach(function (id) { lines.push('  Rewrite ' + (id === 'lede' ? 'line under the name' : (all[id] && all[id].sec >= 0 ? all[id].kind + ' in ' + site.sections[all[id].sec].h : id)) + ':', '    ' + st.text[id]); });
        lines.push('');
      });
      if (lines.length === 2) lines.push('No changes.', '');
      lines.push('content: ' + JSON.stringify(t));
      return lines.join('\n');
    }
  };
})();
