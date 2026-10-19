// Back and forward for the fake browser windows, like v0.1's. The old sites load from hackahobo.info, so a
// window's own history can't be read from here. Instead this uses the page's joint session history: every
// navigation inside a window adds an entry to the page's history, and history.back()/forward() step through
// them. A record of which window made each entry keeps each window's buttons honest.
//
// BrowserNav.attach(iframe, backButton, forwardButton) wires one window; buttons get the class "bn-on" and
// lose aria-disabled when they have somewhere to go. Pages that redraw their windows mark each window with a
// data-bn attribute holding an iframe, a .bn-back and a .bn-fwd; those are found and wired automatically.
(function () {
  var CAP = 50;      // browsers stop counting history.length here
  var frames = [];   // { f, back, fwd, loads }
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

  function state() {
    frames.forEach(function (r) {
      var b = at > 0 && log[at - 1] === r, f = at < log.length && log[at] === r;
      // Unavailable buttons stay ordinary buttons that do nothing (aria-disabled), not disabled ones: a phone snaps a
      // tap on a disabled button to the nearest live one, so tapping a gray forward would go back.
      if (r.back) { r.back.classList.toggle('bn-on', b); r.back.setAttribute('aria-disabled', String(!b)); }
      if (r.fwd) { r.fwd.classList.toggle('bn-on', f); r.fwd.setAttribute('aria-disabled', String(!f)); }
    });
  }
  function find(f) { for (var i = 0; i < frames.length; i++) if (frames[i].f === f) return frames[i]; return null; }
  function record(r) { log = log.slice(0, at); log.push(r); at = log.length; state(); }
  function stepping() { return Date.now() < stepUntil; }
  function guessOpen() { return guessed >= 0 && guessed === at - 1 && Date.now() - guessAt < 15000; }

  // A window's page loaded. Count it unless it was our own step, or a reload that added no history entry
  // (history.length didn't change and nothing ahead was dropped; past the cap the length can't tell, so count it).
  function loaded(r) {
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
  // History changed before (or without) a load on one of our windows: a window, or a frame inside an old page,
  // navigated. Credit the window last clicked into, or the most recently added one, until a load says whose it was.
  setInterval(function () {
    var L = history.length;
    if (stepping()) { len = L; return; }
    if (L > len && location.href !== href) record(PAGE);
    // History grew, or shrank (a new page after going back drops what was ahead): a new step.
    else if (L !== len) { var r = active && frames.indexOf(active) >= 0 ? active : frames[frames.length - 1]; if (r) { record(r); guessed = at - 1; guessAt = Date.now(); } }
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
    r = { f: f, back: back, fwd: fwd, loads: 0, base: history.length, lastLoad: 0 };
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
  // debug() reports the record, for tests: which window made each entry, where we are, and the history length seen.
  window.BrowserNav = { attach: attach, debug: function () { return { log: log.map(function (r) { return frames.indexOf(r); }), at: at, len: len, frames: frames.length, loads: frames.map(function (r) { return r.loads; }), tap: frames.map(function (r) { return !!r.tap; }), active: document.activeElement && document.activeElement.tagName }; } };
})();
