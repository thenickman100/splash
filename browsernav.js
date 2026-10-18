// Back and forward for the fake browser windows, like v0.1's. The old sites load from hackahobo.info, so a
// window's own history can't be read from here. Instead this uses the page's joint session history: every
// navigation inside a window adds an entry to the page's history, and history.back()/forward() step through
// them. A record of which window made each entry keeps each window's buttons honest.
//
// BrowserNav.attach(iframe, backButton, forwardButton) wires one window; buttons get the class "bn-on" and
// lose "disabled" when they have somewhere to go. Pages that redraw their windows mark each window with a
// data-bn attribute holding an iframe, a .bn-back and a .bn-fwd; those are found and wired automatically.
(function () {
  var CAP = 50;      // browsers stop counting history.length here
  var frames = [];   // { f, back, fwd, loads }
  var log = [];      // frame records in navigation order
  var at = 0;        // entries in log behind the current point (log[at] is the next forward)
  var stepUntil = 0; // until then, changes are our own back/forward arriving
  var len = history.length;
  var active = null; // the window last clicked into
  var polled = 0;    // when the history check last recorded an entry itself

  function state() {
    frames.forEach(function (r) {
      var b = at > 0 && log[at - 1] === r, f = at < log.length && log[at] === r;
      if (r.back) { r.back.classList.toggle('bn-on', b); r.back.disabled = !b; }
      if (r.fwd) { r.fwd.classList.toggle('bn-on', f); r.fwd.disabled = !f; }
    });
  }
  function find(f) { for (var i = 0; i < frames.length; i++) if (frames[i].f === f) return frames[i]; return null; }
  function record(r) { log = log.slice(0, at); log.push(r); at = log.length; state(); }
  function stepping() { return Date.now() < stepUntil; }

  // A window's page loaded. Count it unless it was our own step, or a reload that added no history entry
  // (history.length didn't change and nothing ahead was dropped; past the cap the length can't tell, so count it).
  function loaded(r) {
    r.loads++;
    var L = history.length;
    if (r.loads === 1) { len = L; return; }
    if (stepping()) { len = L; return state(); }
    // The history check already saw this step; make sure it is credited to this window.
    if (Date.now() - polled < 1500 && at > 0) { log[at - 1] = r; polled = 0; len = L; return state(); }
    var ahead = log.length - at;
    if (L > len || (ahead > 0 && L === len - ahead + 1) || L >= CAP) record(r);
    len = L;
  }
  // History grew without a load on one of our windows: a frame inside an old page navigated. Credit the
  // window last clicked into, or the most recently added one.
  setInterval(function () {
    var L = history.length;
    if (stepping()) { len = L; return; }
    if (L > len) { var r = active && frames.indexOf(active) >= 0 ? active : frames[frames.length - 1]; if (r) { record(r); polled = Date.now(); } }
    len = L;
  }, 300);
  addEventListener('blur', function () {
    setTimeout(function () { var r = find(document.activeElement); if (r) active = r; }, 0);
  });

  function attach(f, back, fwd) {
    var r = find(f);
    if (r) { r.back = back; r.fwd = fwd; state(); return; }
    r = { f: f, back: back, fwd: fwd, loads: 0 };
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
  window.BrowserNav = { attach: attach };
})();
