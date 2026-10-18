// Back and forward for the fake browser windows, like v0.1's. The old sites load from hackahobo.info, so a
// window's own history can't be read from here. Instead this uses the page's joint session history: every
// navigation inside a window adds an entry to the page's history, and history.back()/forward() step through
// them. A record of which window made each entry keeps each window's buttons honest.
//
// BrowserNav.attach(iframe, backButton, forwardButton) wires one window; buttons get the class "bn-on" and
// lose "disabled" when they have somewhere to go. Pages that redraw their windows mark each window with a
// data-bn attribute holding an iframe, a .bn-back and a .bn-fwd; those are found and wired automatically.
(function () {
  var frames = [];   // { f, back, fwd, loads }
  var log = [];      // frame records in navigation order
  var at = 0;        // entries in log that are behind the current point (log[at] is the next forward)
  var stepping = 0;  // loads still expected from our own back/forward
  var len = history.length; // history length after the last counted change

  function state() {
    frames.forEach(function (r) {
      var b = at > 0 && log[at - 1] === r, f = at < log.length && log[at] === r;
      if (r.back) { r.back.classList.toggle('bn-on', b); r.back.disabled = !b; }
      if (r.fwd) { r.fwd.classList.toggle('bn-on', f); r.fwd.disabled = !f; }
    });
  }
  function find(f) { for (var i = 0; i < frames.length; i++) if (frames[i].f === f) return frames[i]; return null; }

  function attach(f, back, fwd) {
    var r = find(f);
    if (r) { r.back = back; r.fwd = fwd; state(); return; }
    r = { f: f, back: back, fwd: fwd, loads: 0 };
    frames.push(r);
    f.addEventListener('load', function () {
      r.loads++;
      if (r.loads === 1) return;                       // the window's first page
      if (stepping > 0) { stepping--; len = history.length; return state(); } // our own back or forward arriving
      // Only count loads that added a history entry (a reload or a same-page link doesn't). A new entry drops
      // any entries ahead of the current point and adds one.
      var grew = history.length === len - (log.length - at) + 1 || history.length > len;
      len = history.length;
      if (!grew) return state();
      log = log.slice(0, at); log.push(r); at = log.length; state();
    });
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
    at += d; stepping++; state();
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
