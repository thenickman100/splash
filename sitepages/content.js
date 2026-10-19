// Content trial for the site pages. ../content.html lists every piece of each site's content (sections,
// paragraphs, pictures, windows, buttons, lists, logos), and Nick can cut pieces or rewrite text there. The
// trial is kept in this browser and applied here, right after data.js, so every site-page design shows it.
// Export gives the text to send back so it can be published in data.js.
//
// A piece's id is its place in data.js: s2 is the third section, s2.p0 its first paragraph, s2.m0 a picture,
// s2.e its window, s2.b0 a button, s2.l0 a download list, s2.x0 a script, s2.g0 a gallery picture, s2.u0 a
// group of pictures under a smaller heading, s2.o0 a logo, s2.fx the effect buttons and s2.song the song button.
(function () {
  var KEY = 'splash-content';
  var ORIG = JSON.parse(JSON.stringify(window.SITES));

  // Suggested cuts, shown in content.html for Nick to accept or ignore. Nothing here is applied by itself.
  var SUGGEST = {
    awesome: {
      's2.p0': 'Explains why there are two windows; the windows and their addresses already show it.',
      's4.p0': 'The compatibility notes could be one line; the paragraph mostly repeats the list headings.',
      's4.l1': 'Unlisted games are leftovers that the site itself never showed.',
      's4.l2': 'Harry’s games, not yours; a long list that buries your own.',
      's4.l3': 'One unrelated game.',
      's5': 'A fun trick, but a demo rather than part of the story.'
    },
    ask: {
      's2.p1': 'The commented-out line is a detail; the move to Hack a HOBO is already in its own page.',
      's5.o9': 'The everyday logo is already the site’s logo at the top.',
      's6': 'The holiday pages already have their effects; this recreates them a second time.'
    },
    titans: {},
    hobo: {
      's1': 'Profiles were removed and didn’t shape the site.',
      's3.p0': 'Emulator details (Ruffle, CheerpJ, DirPlayer, GitHub builds) date quickly.',
      's4.b1': 'Version compare is a tool page; Every archived version already covers the history.'
    },
    bv: {},
    engen: {
      's2.p0': 'Long; the loss of the domain is the point, the class blog is a detail.'
    },
    home: {},
    spaceatlas: {
      's1.p0': 'Long team details; one or two sentences would do.',
      's3.u1': 'Thirteen draft icons; the logo drafts already show the process.'
    }
  };

  var trial = null;
  try { trial = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) {}

  function short(t, n) { t = String(t || ''); return t.length > n ? t.slice(0, n - 1) + '…' : t; }

  // Every piece of a site's content, in page order: { id, kind, label, text (rewritable), sec }.
  function items(site) {
    var out = [];
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
        (st.cut || []).forEach(function (id) { var it = all[id]; lines.push('  Cut ' + (it ? it.kind + ': ' + (it.kind === 'section' ? it.label : '“' + short(it.label, 70) + '”') + (it.kind !== 'section' ? ' (in ' + site.sections[it.sec].h + ')' : '') : id)); });
        Object.keys(st.text || {}).forEach(function (id) { lines.push('  Rewrite ' + (id === 'lede' ? 'line under the name' : (all[id] ? all[id].kind + ' in ' + site.sections[all[id].sec].h : id)) + ':', '    ' + st.text[id]); });
        lines.push('');
      });
      if (lines.length === 2) lines.push('No changes.', '');
      lines.push('content: ' + JSON.stringify(t));
      return lines.join('\n');
    }
  };
})();
