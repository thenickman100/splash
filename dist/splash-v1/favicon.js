// The browser tab's icon follows the site picked on a main page: siteIcon(key) swaps in that site's own
// favicon, the same ones the site pages use (sitepages/data.js).
(function () {
  var BASE = (document.currentScript && document.currentScript.src || '').replace(/favicon\.js[^/]*$/, '');
  var IC = BASE + 'icons/', IMG = BASE + 'img/';
  var ICONS = {
    awesome: IC + 'awesomestuff/favicon.ico',
    ask: IC + 'askthenickman/favicon.ico',
    titans: IMG + 'softball.ico',
    hobo: IC + 'hackahobo/favicon.ico',
    hobo26: IC + 'hackahobo/favicon.ico',
    bv: IMG + 'blank.ico',
    engen: IC + 'engen/favicon_red.ico',
    home: IC + 'home-original/favicon.ico',
    spaceatlas: IC + 'spaceatlas/favicon.ico'
  };
  var shown = null;
  window.siteIcon = function (key) {
    if (key === shown || !ICONS[key]) return;
    shown = key;
    // A new link element, since some browsers ignore a changed href on the old one.
    document.querySelectorAll('link[rel~="icon"]').forEach(function (l) { l.remove(); });
    var l = document.createElement('link'); l.rel = 'icon'; l.href = ICONS[key]; document.head.appendChild(l);
  };
})();
