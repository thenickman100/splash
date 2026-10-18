/* Back and forward for the walk-in windows: the first two dots in each browser bar.
   They light up when the embedded site has somewhere to go back or forward to. */
document.querySelectorAll('.browser').forEach(b => {
  const frame = b.querySelector('iframe');
  const dots = b.querySelectorAll('.chrome i');
  if (!frame || dots.length < 2) return;
  const back = dots[0], fwd = dots[1];
  back.classList.add('nav-dot'); fwd.classList.add('nav-dot');
  back.title = 'Back'; fwd.title = 'Forward';
  let list = [], at = -1;
  const update = () => {
    back.classList.toggle('live', at > 0);
    fwd.classList.toggle('live', at < list.length - 1);
  };
  // Record where the window is now. Arriving where a back/forward step was headed changes
  // nothing; arriving anywhere else is a new visit, which clears the forward history.
  const record = () => {
    let url = null;
    try { url = frame.contentWindow.location.href; } catch (e) {}
    if (url && url !== 'about:blank' && url !== list[at]) { list = list.slice(0, at + 1); list.push(url); at = list.length - 1; }
    update();
  };
  frame.addEventListener('load', () => {
    record();
    try {
      const w = frame.contentWindow;
      w.addEventListener('hashchange', record);
    } catch (e) {}
  });
  const go = d => {
    const n = at + d;
    if (n < 0 || n >= list.length) return;
    at = n; update();
    try { frame.contentWindow.location.replace(list[at]); } catch (e) { frame.src = list[at]; }
  };
  back.addEventListener('click', () => go(-1));
  fwd.addEventListener('click', () => go(1));
});

/* Image viewer. Pictures in figures open full screen instead of leaving the page; arrows, the
   arrow keys, or a swipe step through every picture on the page, and Esc or a click outside closes it.
   Logos that load a theme when clicked (#holidays, #themes) keep their own behavior. */
(() => {
  const imgs = Array.from(document.querySelectorAll('figure img')).filter(i => !i.closest('#holidays, #themes, .room-hero, .engen-logo'));
  if (!imgs.length) return;
  const v = document.createElement('div');
  v.className = 'viewer';
  v.innerHTML = '<span class="viewer-count"></span><button class="viewer-close" aria-label="Close">&times;</button>' +
    '<button class="viewer-prev" aria-label="Previous">&#8249;</button><img alt="" /><div class="viewer-cap"></div>' +
    '<button class="viewer-next" aria-label="Next">&#8250;</button>';
  document.body.appendChild(v);
  const big = v.querySelector('img'), cap = v.querySelector('.viewer-cap'), count = v.querySelector('.viewer-count');
  let at = 0;
  const show = n => {
    at = (n + imgs.length) % imgs.length;
    const img = imgs[at], fc = img.closest('figure').querySelector('figcaption');
    big.src = img.currentSrc || img.src; big.alt = img.alt;
    cap.textContent = fc ? fc.textContent : img.alt;
    count.textContent = (at + 1) + ' / ' + imgs.length;
  };
  const open = n => { show(n); v.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const close = () => { v.classList.remove('open'); document.body.style.overflow = ''; };
  imgs.forEach((img, i) => {
    img.classList.add('zoomable');
    const a = img.closest('a'); if (a) a.addEventListener('click', e => e.preventDefault());
    img.addEventListener('click', e => { e.preventDefault(); open(i); });
  });
  v.querySelector('.viewer-prev').addEventListener('click', e => { e.stopPropagation(); show(at - 1); });
  v.querySelector('.viewer-next').addEventListener('click', e => { e.stopPropagation(); show(at + 1); });
  v.querySelector('.viewer-close').addEventListener('click', close);
  v.addEventListener('click', e => { if (e.target === v) close(); });
  big.addEventListener('click', e => e.stopPropagation());
  addEventListener('keydown', e => {
    if (!v.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(at - 1);
    if (e.key === 'ArrowRight') show(at + 1);
  });
  let x0 = null;
  v.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
  v.addEventListener('touchend', e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) show(at + (dx < 0 ? 1 : -1)); x0 = null; });
})();
