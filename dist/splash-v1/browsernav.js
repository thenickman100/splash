// Back and forward for the fake browser windows, like v0.1's.
//
// On hackahobo.info the old sites are on the same site as these pages, so each window keeps its own history:
// the list of pages it has shown, read straight from the window. A navigation inside a window replaces its page
// instead of adding an entry to the browser's history, so the page's own history stays clean (the browser's back
// button leaves the page instead of stepping through windows, and windows a page takes out leave nothing behind).
// The window's back and forward buttons load the page before or after it in its list.
//
// Windows on another site (Space Atlas, and every window on the test site at github.io) can't be read from here.
// Those fall back to the page's joint session history: every navigation inside such a window adds an entry to
// the page's history, and history.back()/forward() step through them. A record of which window made each entry
// keeps each window's buttons honest.
//
// BrowserNav.attach(iframe, backButton, forwardButton) wires one window; buttons get the class "bn-on" and
// lose aria-disabled when they have somewhere to go. Pages that redraw their windows mark each window with a
// data-bn attribute holding an iframe, a .bn-back and a .bn-fwd; those are found and wired automatically.
(function () {
  var CAP = 50;      // browsers stop counting history.length here
  var frames = [];   // { f, back, fwd, own, ... }: own is true for a window read directly, false for joint history
  // Joint history (windows on another site).
  var log = [];      // frame records in navigation order
  var at = 0;        // entries in log behind the current point (log[at] is the next forward)
  var stepUntil = 0; // until then, changes are our own back/forward arriving
  var len = history.length;
  var active = null; // the window last clicked into
  var guessed = -1;  // a step the history check credited by guess (index in log), until a window's load confirms it
  var guessAt = 0;
  // An entry the page made for itself (a jump to a section, #...), not one of the windows: it never lights a window.
  var PAGE = { page: true };
  var href = location.href;

  // The address a window is showing: a string, null while it has nothing yet, undefined when it's on another site.
  function where(f) {
    try { var u = f.contentWindow.location.href; return u && u !== 'about:blank' ? u : null; } catch (e) { return undefined; }
  }

  function state() {
    frames.forEach(function (r) {
      var b, f;
      if (r.own) { b = back(r) >= 0; f = r.i < r.list.length - 1 && !!r.list[r.i + 1]; }
      else { b = at > 0 && log[at - 1] === r; f = at < log.length && log[at] === r; }
      // Unavailable buttons stay ordinary buttons that do nothing (aria-disabled), not disabled ones: a phone snaps a
      // tap on a disabled button to the nearest live one, so tapping a gray forward would go back.
      if (r.back) { r.back.classList.toggle('bn-on', b); r.back.setAttribute('aria-disabled', String(!b)); }
      if (r.fwd) { r.fwd.classList.toggle('bn-on', f); r.fwd.setAttribute('aria-disabled', String(!f)); }
    });
  }
  function find(f) { for (var i = 0; i < frames.length; i++) if (frames[i].f === f) return frames[i]; return null; }

  // ---- Windows read directly ----

  // The nearest earlier page with a known address ('' is a page on another site that we couldn't read).
  function back(r) { for (var j = r.i - 1; j >= 0; j--) if (r.list[j]) return j; return -1; }
  // The window now shows url (or '' for a page on another site we didn't send it to). pushed: a navigation inside
  // the window that we steered (a new page, even one that's the same as the page before it).
  function seen(r, url, pushed) {
    if (r.going) {
      // Our own back or forward arriving; a redirect on the way just updates that page's address.
      r.going = false;
      if (url) r.list[r.i] = url;
    } else if (url && url === r.list[r.i]) {
      return; // a reload
    } else if (pushed) {
      r.list = r.list.slice(0, r.i + 1); r.list.push(url); r.i++;
    } else if (url && r.i > 0 && r.list[r.i - 1] === url) {
      r.i--; // the browser's own back (a page that slipped an entry into the history, like a POST form)
    } else if (url && r.list[r.i + 1] === url) {
      r.i++;
    } else {
      r.list = r.list.slice(0, r.i + 1); r.list.push(url); r.i++;
    }
    state();
  }
  // Keep a navigation inside the window from adding to the page's history: it replaces the window's page instead.
  // Frames inside an old page get the same treatment, so they don't add entries either.
  function hook(r, w, top) {
    var d;
    try { if (!w || w.__bn) return; d = w.document; w.__bn = true; } catch (e) { return; }
    var to = function (url) { if (top) r.sent = url; w.location.replace(url); };
    if (w.navigation && w.navigation.addEventListener) {
      // Every kind of navigation: links, forms, and scripts setting location.
      w.navigation.addEventListener('navigate', function (e) {
        if (e.navigationType !== 'push' || !e.cancelable || e.formData || e.downloadRequest != null) return;
        e.preventDefault(); to(e.destination.url);
      });
    }
    d.addEventListener('click', function (e) {
      if (e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target.closest && e.target.closest('a[href], area[href]'); if (!a) return;
      var t = (a.getAttribute('target') || '').toLowerCase();
      // Links that would take over the whole page (_top, _parent) stay in the window, as they did on the old site.
      if (t === '_top' || t === '_parent') { if (top) { e.preventDefault(); to(a.href); } return; }
      if (w.navigation || (t && t !== '_self') || /^javascript:/i.test(a.href)) return;
      // Without the navigation API (older browsers), links are steered here; forms and scripts still add entries,
      // which the window's list follows.
      e.preventDefault(); to(a.href);
    });
    var sub = function () {
      d.querySelectorAll('iframe, frame').forEach(function (c) {
        if (c.__bn) return; c.__bn = true;
        c.addEventListener('load', function () { try { hook(r, c.contentWindow, false); } catch (e) {} });
        try { if (c.contentDocument && c.contentDocument.readyState !== 'loading') hook(r, c.contentWindow, false); } catch (e) {}
      });
    };
    sub();
    if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', sub);
  }
  function ownLoad(r) {
    var url = where(r.f);
    if (url === null) return;
    var sent = r.sent; r.sent = null;
    if (url === undefined) url = sent || ''; else hook(r, r.f.contentWindow, true);
    if (r.list.length) seen(r, url, !!sent); else { r.list = [url]; r.i = 0; state(); }
  }

  // ---- Windows on another site: the page's joint history ----

  function record(r) { log = log.slice(0, at); log.push(r); at = log.length; state(); }
  function stepping() { return Date.now() < stepUntil; }
  function guessOpen() { return guessed >= 0 && guessed === at - 1 && Date.now() - guessAt < 15000; }

  // A window's page loaded. Count it unless it was our own step, or a reload that added no history entry
  // (history.length didn't change and nothing ahead was dropped; past the cap the length can't tell, so count it).
  function loaded(r) {
    if (r.own == null) { var u = where(r.f); if (u === null) return; r.own = u !== undefined; }
    if (r.own) return ownLoad(r);
    r.loads++;
    var L = history.length, tapped = r.tap, quick = Date.now() - r.lastLoad < 1500;
    // Each load uses up the tap that led to it, and hands focus back to the page so the next tap is seen.
    r.tap = false; r.lastLoad = Date.now();
    if (document.activeElement === r.f) r.f.blur();
    if (stepping()) { len = L; return state(); }
    // A window's first load is its opening page, unless history grew since it was set up: then its opening page
    // never finished loading (some keep fetching) and this load is a step. A step the history check already
    // credited by guess is left as it is.
    if (r.loads === 1) {
      // (Past the 50-entry cap growth can't show, so a window someone has clicked into counts.)
      if (!guessOpen() && ((L > r.base && L < CAP && L > len) || (L >= CAP && r.touched))) record(r);
      len = L; return state();
    }
    // The history check already saw this step and guessed whose it was: the first window to finish loading
    // owns it (slow pages can take several seconds).
    if (guessOpen()) { log[guessed] = r; guessed = -1; len = L; return state(); }
    var ahead = log.length - at;
    var replaced = (ahead > 0 && L === len - ahead + 1) || L >= CAP;
    if (L > len) record(r);
    // No new entry. After a tap inside the window it's a new page (one that replaced what was ahead); without a
    // tap it's the browser's or phone's own back or forward moving this window, unless the page just redirected.
    else if (tapped || quick) { if (replaced) record(r); }
    else if (at > 0 && log[at - 1] === r) { at--; state(); }
    else if (at < log.length && log[at] === r) { at++; state(); }
    else if (replaced) record(r);
    len = L;
  }
  setInterval(function () {
    // Windows read directly: catch a window as soon as it's readable (some pages never finish loading), and
    // address changes that come without a load (a jump to #section).
    frames.forEach(function (r) {
      if (r.own === false) return;
      var u = where(r.f);
      if (r.own == null) { if (u === undefined) { r.own = false; r.loads = 0; } else if (u && r.f.contentDocument.readyState !== 'loading') { r.own = true; ownLoad(r); } return; }
      if (u) { try { if (r.f.contentDocument.readyState !== 'loading') hook(r, r.f.contentWindow, true); } catch (e) {} }
      if (u && r.going && u === r.list[r.i]) r.going = false; // a step within one page (#...) brings no load
      if (u && r.list.length && u !== r.list[r.i] && !r.going && r.f.contentDocument.readyState !== 'loading') { var sent = r.sent === u; if (sent) r.sent = null; seen(r, u, sent); }
    });
    // Joint history changed before (or without) a load on one of the windows: a window, or a frame inside an old
    // page, navigated. Credit the window last clicked into, or the most recently added one, until a load says whose.
    var L = history.length;
    if (stepping()) { len = L; return; }
    var joint = frames.filter(function (r) { return r.own === false; });
    if (L > len && location.href !== href) record(PAGE);
    // History grew, or shrank (a new page after going back drops what was ahead): a new step. A window read
    // directly that slipped in an entry (a POST form) keeps track of itself.
    else if (L !== len && !(active && active.own)) { var r = active && joint.indexOf(active) >= 0 ? active : joint[joint.length - 1]; if (r) { record(r); guessed = at - 1; guessAt = Date.now(); } }
    len = L; href = location.href;
  }, 300);
  // The browser's own back or forward moved through one of the page's own entries.
  addEventListener('popstate', function () {
    href = location.href;
    if (stepping()) return;
    if (at > 0 && log[at - 1] === PAGE) at--;
    else if (at < log.length && log[at] === PAGE) at++;
    state();
  });
  addEventListener('blur', function () {
    setTimeout(function () { var r = find(document.activeElement); if (r) { active = r; r.touched = true; r.tap = true; } }, 0);
  });

  function attach(f, back, fwd) {
    prune(); // windows that were taken out (a page swapping in a fresh one) drop out first
    var r = find(f);
    if (r) { r.back = back; r.fwd = fwd; state(); return; }
    r = { f: f, back: back, fwd: fwd, own: null, list: [], i: -1, loads: 0, base: history.length, lastLoad: 0 };
    frames.push(r);
    f.addEventListener('load', function () { loaded(r); });
    state();
  }
  // Clicks are handled here, so buttons that a page redraws keep working.
  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('button'); if (!t) return;
    frames.forEach(function (r) {
      if (t === r.back) { e.preventDefault(); e.stopPropagation(); go(r, -1); }
      if (t === r.fwd) { e.preventDefault(); e.stopPropagation(); go(r, 1); }
    });
  }, true);
  function go(r, d) {
    if (r.own) {
      var j = d < 0 ? back(r) : r.i + 1;
      if (j < 0 || !r.list[j]) return;
      r.i = j; r.going = true; state();
      r.f.contentWindow.location.replace(r.list[j]);
      return;
    }
    if (d < 0 && !(at > 0 && log[at - 1] === r)) return;
    if (d > 0 && !(at < log.length && log[at] === r)) return;
    at += d; stepUntil = Date.now() + 1500; state();
    if (d < 0) history.back(); else history.forward();
  }
  // Windows that get replaced (a page swapping which site it shows) drop out of the record.
  function prune() {
    var gone = frames.filter(function (r) { return !document.contains(r.f); });
    if (!gone.length) return;
    frames = frames.filter(function (r) { return document.contains(r.f); });
    var keep = 0;
    log = log.filter(function (r, i) { var k = gone.indexOf(r) < 0; if (k && i < at) keep++; return k; });
    at = keep; state();
  }
  function scan() {
    document.querySelectorAll('[data-bn]').forEach(function (w) {
      var f = w.querySelector('iframe'); if (f) attach(f, w.querySelector('.bn-back'), w.querySelector('.bn-fwd'));
    });
    prune();
  }
  setInterval(scan, 500);
  // debug() reports the record, for tests: each window's own list, and for joint history which window made each
  // entry, where we are, and the history length seen.
  // load(iframe, url): the page itself sends a window somewhere (a holiday logo). A window read directly keeps it in
  // its own list; one on joint history gets a new history entry, as a click inside it would.
  function load(f, url) {
    var r = find(f);
    if (r && r.own) { try { f.contentWindow.location.replace(url); return; } catch (e) {} }
    f.src = url;
  }
  window.BrowserNav = { attach: attach, load: load, debug: function () { return {
    own: frames.map(function (r) { return r.own ? { i: r.i, list: r.list } : r.own; }),
    log: log.map(function (r) { return frames.indexOf(r); }), at: at, len: len, history: history.length, frames: frames.length,
    loads: frames.map(function (r) { return r.loads; }), tap: frames.map(function (r) { return !!r.tap; }), active: document.activeElement && document.activeElement.tagName }; } };
})();
