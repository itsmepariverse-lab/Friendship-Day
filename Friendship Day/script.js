/* ═══════════════════════════════════════════════════════
   reetOS — Friendship Edition
   ═══════════════════════════════════════════════════════ */

/* ─────────── CUSTOM ICON SET ─────────── */
const sq = (id, c1, c2, inner) => `
<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="g${id}" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/>
  </linearGradient></defs>
  <rect x="1" y="1" width="46" height="46" rx="13" fill="url(#g${id})"/>
  <rect x="1" y="1" width="46" height="46" rx="13" fill="none" stroke="rgba(255,255,255,.45)"/>
  ${inner}
</svg>`;

const S = 'stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"';

const ICONS = {
  /* ── brand mark: a hand-drawn ribbon/bow ── */
  ribbon: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 16c-2.6-3.6-5.4-5.6-8.2-5.2-2.4.4-3.6 2.6-2.8 4.8.9 2.4 4.4 3.4 11 .4z"
      fill="#ff8fb8" stroke="#e85a92" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M16 16c2.6-3.6 5.4-5.6 8.2-5.2 2.4.4 3.6 2.6 2.8 4.8-.9 2.4-4.4 3.4-11 .4z"
      fill="#ffa8c8" stroke="#e85a92" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M14.4 16.4L10 26M17.6 16.4L22 26" stroke="#e85a92" stroke-width="1.8" stroke-linecap="round" fill="none"/>
    <circle cx="16" cy="16" r="2.9" fill="#fff0f6" stroke="#e85a92" stroke-width="1.5"/>
  </svg>`,

  /* ── app icons ── */
  appTerminal: sq('t', '#6d5d7a', '#3d2f45', `
    <path d="M14 19l6 5-6 5" ${S}/><path d="M25 29h10" ${S}/>`),
  appPhotos: sq('p', '#ffb3d1', '#ff8fb8', `
    <rect x="11" y="14" width="26" height="20" rx="4" ${S}/>
    <circle cx="18.5" cy="21" r="2.4" ${S}/>
    <path d="M12.5 31l7-7 5.5 5.5 4-3.5 6.5 6" ${S}/>`),
  appLetter: sq('l', '#ffc9a8', '#ff9d8f', `
    <rect x="10" y="15" width="28" height="19" rx="3.5" ${S}/>
    <path d="M10.5 17.5L24 26l13.5-8.5" ${S}/>`),
  appMusic: sq('m', '#c9b3ff', '#9d8fff', `
    <path d="M20 31V16l14-2.6V29" ${S}/>
    <ellipse cx="17" cy="31.5" rx="3.4" ry="2.8" ${S}/>
    <ellipse cx="31" cy="29" rx="3.4" ry="2.8" ${S}/>`),
  appReasons: sq('r', '#ffdb8f', '#ffb35a', `
    <path d="M24 12.5l3.4 7.3 7.6 1-5.6 5.4 1.4 7.8-6.8-3.8-6.8 3.8 1.4-7.8L13 20.8l7.6-1z" ${S}/>`),
  appNotes: sq('n', '#a8e6c4', '#6dd6a8', `
    <rect x="12" y="11" width="24" height="27" rx="4" ${S}/>
    <path d="M17.5 19.5l2 2 3.5-3.8M17.5 27.5l2 2 3.5-3.8" ${S}/>
    <path d="M27 20h5M27 28h5" ${S}/>`),
  appTrash: sq('x', '#c4c9e0', '#9aa2c4', `
    <path d="M13 17h22" ${S}/>
    <path d="M16.5 17l1.4 18a2.5 2.5 0 002.5 2.3h7.2a2.5 2.5 0 002.5-2.3L31.5 17" ${S}/>
    <path d="M20 17v-2.5a2 2 0 012-2h4a2 2 0 012 2V17" ${S}/>`),
  appVideos: sq('v', '#ffc4a8', '#ff9a7a', `
    <rect x="8" y="14" width="21" height="20" rx="4" ${S}/>
    <path d="M29 22.5l8-4.5v12l-8-4.5z" ${S}/>`),
  appAbout: sq('a', '#ffa8d4', '#e87ab0', `
    <circle cx="24" cy="24" r="12" ${S}/>
    <path d="M24 22v8" ${S}/><circle cx="24" cy="17.6" r="1.5" fill="#fff"/>`),

  /* ── UI glyphs ── */
  battery: `<svg viewBox="0 0 26 14"><rect x="1" y="1" width="20" height="12" rx="3.5" fill="none" stroke="currentColor" stroke-width="1.3"/><rect x="3" y="3" width="16" height="8" rx="2" fill="#8fe0c4"/><path d="M23.2 5v4c1.2-.4 1.8-1.1 1.8-2s-.6-1.6-1.8-2z" fill="currentColor"/></svg>`,
  wifi: `<svg viewBox="0 0 24 18"><path d="M2 6.2a15 15 0 0120 0M5.6 10a10 10 0 0112.8 0M9.2 13.7a5 5 0 015.6 0" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="12" cy="16.4" r="1.4" fill="currentColor"/></svg>`,
  grid: `<svg viewBox="0 0 16 16"><rect x="1" y="1" width="6" height="6" rx="1.6" fill="currentColor"/><rect x="9" y="1" width="6" height="6" rx="1.6" fill="currentColor"/><rect x="1" y="9" width="6" height="6" rx="1.6" fill="currentColor"/><rect x="9" y="9" width="6" height="6" rx="1.6" fill="currentColor"/></svg>`,
  close: `<svg viewBox="0 0 16 16"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/></svg>`,
  chevL: `<svg viewBox="0 0 16 16"><path d="M10.5 2.5L5 8l5.5 5.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
  chevR: `<svg viewBox="0 0 16 16"><path d="M5.5 2.5L11 8l-5.5 5.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
  play: `<svg viewBox="0 0 16 16"><path d="M4 2.5l9 5.5-9 5.5z" fill="currentColor" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  pause: `<svg viewBox="0 0 16 16"><rect x="3.5" y="2.5" width="3.4" height="11" rx="1.5" fill="currentColor"/><rect x="9.1" y="2.5" width="3.4" height="11" rx="1.5" fill="currentColor"/></svg>`,
  prev: `<svg viewBox="0 0 16 16"><path d="M12 3v10L5 8z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><rect x="2.6" y="3" width="1.9" height="10" rx="1" fill="currentColor"/></svg>`,
  next: `<svg viewBox="0 0 16 16"><path d="M4 3v10l7-5z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><rect x="11.5" y="3" width="1.9" height="10" rx="1" fill="currentColor"/></svg>`,
  vinyl: `<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="19" fill="none" stroke="rgba(255,255,255,.13)" stroke-width="1"/><circle cx="20" cy="20" r="14" fill="none" stroke="rgba(255,255,255,.11)" stroke-width="1"/><circle cx="20" cy="20" r="9.5" fill="#ff8fb8"/><circle cx="20" cy="20" r="2.6" fill="#fff6fa"/><path d="M20 10.5a9.5 9.5 0 018.6 5.5" stroke="rgba(255,255,255,.55)" stroke-width="1.4" fill="none" stroke-linecap="round"/></svg>`,
  check: `<svg viewBox="0 0 16 16"><path d="M3 8.4l3.4 3.4L13 4.8" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
  trashBig: `<svg viewBox="0 0 48 48"><path d="M11 16h26" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" fill="none"/><path d="M15 16l1.7 21.5A3 3 0 0019.7 40h8.6a3 3 0 003-2.5L33 16" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M19.5 16v-3a2.5 2.5 0 012.5-2.5h4a2.5 2.5 0 012.5 2.5v3" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,

  /* ── reason glyphs ── */
  sparkle: `<svg viewBox="0 0 32 32"><path d="M16 3.5l2.6 8.6 8.9 2.4-8.9 2.5-2.6 9-2.6-9-8.9-2.5 8.9-2.4z" fill="currentColor" opacity=".9"/><path d="M26 22l1 3.2 3.2 1-3.2 1-1 3.2-1-3.2-3.2-1 3.2-1z" fill="currentColor" opacity=".55"/></svg>`,
  heart: `<svg viewBox="0 0 32 32"><path d="M16 27.5S4.5 20.4 4.5 12.9A6.4 6.4 0 0116 9.4a6.4 6.4 0 0111.5 3.5c0 7.5-11.5 14.6-11.5 14.6z" fill="currentColor"/></svg>`,
  star: `<svg viewBox="0 0 32 32"><path d="M16 3.6l3.9 8.3 8.6 1.1-6.3 6.1 1.6 8.8L16 23.7 8.2 27.9l1.6-8.8-6.3-6.1 8.6-1.1z" fill="currentColor"/></svg>`,
  sun: `<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="6.6" fill="currentColor"/><g stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M16 2.5v3.6M16 25.9v3.6M2.5 16h3.6M25.9 16h3.6M6.4 6.4l2.6 2.6M23 23l2.6 2.6M25.6 6.4L23 9M9 23l-2.6 2.6"/></g></svg>`,
  moon: `<svg viewBox="0 0 32 32"><path d="M26 20.4A11.4 11.4 0 0111.6 6 11.5 11.5 0 1026 20.4z" fill="currentColor"/></svg>`,
  flower: `<svg viewBox="0 0 32 32"><g fill="currentColor"><ellipse cx="16" cy="8.4" rx="4.1" ry="5.6"/><ellipse cx="16" cy="23.6" rx="4.1" ry="5.6"/><ellipse cx="8.4" cy="16" rx="5.6" ry="4.1"/><ellipse cx="23.6" cy="16" rx="5.6" ry="4.1"/></g><circle cx="16" cy="16" r="3.6" fill="#fff7fa"/></svg>`,
  cloud: `<svg viewBox="0 0 32 32"><path d="M9 24a5.6 5.6 0 01-.5-11.2 7.6 7.6 0 0114.6-1.6A5.4 5.4 0 0123.5 24z" fill="currentColor"/></svg>`,
  gift: `<svg viewBox="0 0 32 32"><rect x="4.5" y="13" width="23" height="14.5" rx="2.4" fill="currentColor"/><rect x="3" y="8.5" width="26" height="5.6" rx="2" fill="currentColor" opacity=".78"/><path d="M16 8.5v19" stroke="#fff7fa" stroke-width="2.4"/><path d="M16 8.5c-3.6-5.6-8.4-2-4 0M16 8.5c3.6-5.6 8.4-2 4 0" fill="currentColor"/></svg>`,
  chat: `<svg viewBox="0 0 32 32"><path d="M16 5.5c6.6 0 12 4 12 9s-5.4 9-12 9a15 15 0 01-3.4-.4L6 26l1.8-4.6C5.4 19.7 4 17.2 4 14.5c0-5 5.4-9 12-9z" fill="currentColor"/><g fill="#fff7fa"><circle cx="11" cy="14.5" r="1.7"/><circle cx="16" cy="14.5" r="1.7"/><circle cx="21" cy="14.5" r="1.7"/></g></svg>`,
  infinity: `<svg viewBox="0 0 32 32"><path d="M16 16c-2.6-4-5-5.6-7.6-4.8-2.4.7-3.4 3.1-2.3 5.3 1.3 2.6 5.4 3 9.9-.5zM16 16c2.6 4 5 5.6 7.6 4.8 2.4-.7 3.4-3.1 2.3-5.3-1.3-2.6-5.4-3-9.9.5z" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linejoin="round"/></svg>`,
  smile: `<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="12.5" fill="currentColor"/><g fill="#fff7fa"><circle cx="11.6" cy="13.4" r="1.9"/><circle cx="20.4" cy="13.4" r="1.9"/></g><path d="M10.6 19.4a6.4 6.4 0 0010.8 0" stroke="#fff7fa" stroke-width="2.4" stroke-linecap="round" fill="none"/></svg>`,
  hands: `<svg viewBox="0 0 32 32"><path d="M12 27V15.5a2 2 0 014 0V13a2 2 0 014 0v1.5a2 2 0 014 0V22a6 6 0 01-6 6z" fill="currentColor"/><path d="M12 27a6 6 0 01-6-6v-5.5a2 2 0 014 0" fill="currentColor" opacity=".7"/></svg>`,
};

function renderIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach(el => {
    const key = el.getAttribute('data-icon');
    if (ICONS[key] && !el.dataset.filled) {
      el.innerHTML = ICONS[key];
      el.dataset.filled = '1';
    }
  });
}
renderIcons();

/* ─────────── HELPERS ─────────── */
const $ = (s, r = document) => r.querySelector(s);
const isMobile = () => window.matchMedia('(max-width: 768px)').matches;
const pad = n => String(n).padStart(2, '0');

function toast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => t.remove(), 400);
  }, 2600);
}

/* ═══════════ BOOT SEQUENCE ═══════════ */
const BOOT_LINES = [
  ['initializing reetOS kernel', 'ok'],
  ['mounting /memories', 'ok'],
  ['loading friendship drivers', 'ok'],
  ['checking heart integrity', 'ok'],
  ['scanning for flaws in Reet', 'none found', 'hl'],
  ['calibrating serotonin levels', 'ok'],
  ['establishing forever connection', 'ok'],
  ['date: august 2 · friendship day', 'ready', 'hl'],
];

const bootLog = $('#bootLog');
const bootFill = $('#bootBarFill');
const bootPct = $('#bootPct');

let bootStep = 0;
function runBoot() {
  if (bootStep >= BOOT_LINES.length) {
    bootFill.style.width = '100%';
    bootPct.textContent = '100%';
    setTimeout(showLock, 550);
    return;
  }
  const [label, status, cls] = BOOT_LINES[bootStep];
  const line = document.createElement('div');
  line.innerHTML = `<span class="dim">[${pad(bootStep + 1)}]</span> ${label} … <span class="${cls === 'hl' ? 'hl' : 'ok'}">${status}</span>`;
  bootLog.appendChild(line);
  bootLog.scrollTop = bootLog.scrollHeight;

  bootStep++;
  const pctVal = Math.round((bootStep / BOOT_LINES.length) * 100);
  bootFill.style.width = pctVal + '%';
  bootPct.textContent = pctVal + '%';
  setTimeout(runBoot, 260 + Math.random() * 180);
}
setTimeout(runBoot, 700);

/* ═══════════ LOCK SCREEN ═══════════ */
function showLock() {
  $('#boot').classList.add('out');
  const lock = $('#lock');
  lock.classList.remove('hidden');
  updateLockClock();
  setInterval(updateLockClock, 1000);
}

function updateLockClock() {
  const d = new Date();
  const lt = $('#lockTime');
  if (lt) lt.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}`;
  const ld = $('#lockDate');
  if (ld) {
    ld.textContent = d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  }
}

$('#lockBtn').addEventListener('click', unlock);

let unlocked = false;
let desktopReady = false;
function unlock() {
  if (unlocked) return;
  unlocked = true;
  $('#lock').classList.add('out');
  $('#desktop').classList.remove('hidden');

  if (!desktopReady) {
    desktopReady = true;
    initDesktop();
    setTimeout(() => {
      toast('welcome back, Reet 🎀');
      setTimeout(() => openApp('letter'), 900);
    }, 700);
  } else {
    setTimeout(() => toast('welcome back again 🎀'), 500);
  }
}

/* ═══════════ APP REGISTRY ═══════════ */
const APPS = {
  terminal: { name: 'terminal',    icon: 'appTerminal', tpl: 'tpl-terminal', w: 520, h: 380, init: initTerminal, desktop: true },
  photos:   { name: 'memories',    icon: 'appPhotos',   tpl: 'tpl-photos',   w: 480, h: 420, init: initPhotos,   desktop: true },
  videos:   { name: 'clips',       icon: 'appVideos',   tpl: 'tpl-videos',   w: 460, h: 460, init: initVideos,   desktop: true },
  letter:   { name: 'letter.txt',  icon: 'appLetter',   tpl: 'tpl-letter',   w: 440, h: 430, init: initLetter,   desktop: true },
  music:    { name: 'music',       icon: 'appMusic',    tpl: 'tpl-music',    w: 320, h: 460, init: initMusic },
  reasons:  { name: 'reasons',     icon: 'appReasons',  tpl: 'tpl-reasons',  w: 360, h: 400, init: initReasons },
  notes:    { name: 'our list',    icon: 'appNotes',    tpl: 'tpl-notes',    w: 380, h: 420, init: initNotes },
  about:    { name: 'about this friendship', icon: 'appAbout', tpl: 'tpl-about', w: 380, h: 440, init: initAbout },
  trash:    { name: 'trash',       icon: 'appTrash',    tpl: 'tpl-trash',    w: 340, h: 280, init: null, desktop: true },
};

/* ═══════════ WINDOW MANAGER ═══════════ */
const openWindows = {};
let zTop = 200;
let cascade = 0;

function openApp(id) {
  const app = APPS[id];
  if (!app) return;

  if (openWindows[id]) {
    const w = openWindows[id];
    if (w.dataset.min) restoreWin(id); else focusWin(w);
    return;
  }

  const win = document.createElement('div');
  win.className = 'win win-enter';
  win.dataset.app = id;
  // setTimeout still fires when a tab is throttled, unlike animation events
  setTimeout(() => win.classList.remove('win-enter'), 450);

  if (!isMobile()) {
    const offset = (cascade % 5) * 28;
    const maxL = Math.max(20, window.innerWidth - app.w - 40);
    const maxT = Math.max(44, window.innerHeight - app.h - 100);
    win.style.width = app.w + 'px';
    win.style.height = app.h + 'px';
    win.style.left = Math.min(90 + offset, maxL) + 'px';
    win.style.top = Math.min(70 + offset, maxT) + 'px';
    cascade++;
  }

  win.innerHTML = `
    <div class="win-bar">
      <div class="win-lights">
        <button class="wl wl-close" title="close"></button>
        <button class="wl wl-min" title="minimize"></button>
        <button class="wl wl-max" title="zoom"></button>
      </div>
      <div class="win-title"><span data-icon="${app.icon}"></span>${app.name}</div>
      <div class="win-spacer"></div>
    </div>
    <div class="win-body"></div>`;

  const tpl = $('#' + app.tpl);
  win.querySelector('.win-body').appendChild(tpl.content.cloneNode(true));

  $('#windows').appendChild(win);
  renderIcons(win);

  win.querySelector('.wl-close').addEventListener('click', e => { e.stopPropagation(); closeWin(id); });
  win.querySelector('.wl-min').addEventListener('click', e => { e.stopPropagation(); minimizeWin(id); });
  win.querySelector('.wl-max').addEventListener('click', e => { e.stopPropagation(); toggleMax(win, app); });
  win.addEventListener('pointerdown', () => focusWin(win));

  if (!isMobile()) makeDraggable(win, win.querySelector('.win-bar'));

  openWindows[id] = win;
  focusWin(win);
  markDock(id, true);

  if (app.init) app.init(win);
}

function closeWin(id) {
  const win = openWindows[id];
  if (!win) return;
  win.dispatchEvent(new CustomEvent('win-closing'));
  // never leave audio/video playing behind a closed window
  win.querySelectorAll('audio, video').forEach(m => { try { m.pause(); } catch (_) {} });
  win.classList.add('closing');
  setTimeout(() => win.remove(), 240);
  delete openWindows[id];
  markDock(id, false);
}

function focusWin(win) {
  zTop++;
  win.style.zIndex = zTop;
}

// Minimize keeps the app running (music keeps playing); the dock restores it.
function minimizeWin(id) {
  const win = openWindows[id];
  if (!win) return;
  win.dataset.min = '1';
  win.style.display = 'none';
  toast('minimized — tap it in the dock to bring it back');
}

function restoreWin(id) {
  const win = openWindows[id];
  if (!win) return;
  delete win.dataset.min;
  win.style.display = '';
  focusWin(win);
}

function closeAllWindows() {
  const n = Object.keys(openWindows).length;
  Object.keys(openWindows).forEach(closeWin);
  return n;
}

function toggleMax(win, app) {
  if (win.dataset.maxed) {
    win.style.width = app.w + 'px';
    win.style.height = app.h + 'px';
    win.style.left = win.dataset.prevL;
    win.style.top = win.dataset.prevT;
    delete win.dataset.maxed;
  } else {
    win.dataset.prevL = win.style.left;
    win.dataset.prevT = win.style.top;
    win.style.left = '16px';
    win.style.top = '40px';
    win.style.width = (window.innerWidth - 32) + 'px';
    win.style.height = (window.innerHeight - 130) + 'px';
    win.dataset.maxed = '1';
  }
}

function makeDraggable(win, handle) {
  let sx = 0, sy = 0, ox = 0, oy = 0, dragging = false;

  handle.addEventListener('pointerdown', e => {
    if (e.target.closest('.wl')) return;
    dragging = true;
    sx = e.clientX; sy = e.clientY;
    ox = win.offsetLeft; oy = win.offsetTop;
    handle.setPointerCapture(e.pointerId);
    focusWin(win);
  });

  handle.addEventListener('pointermove', e => {
    if (!dragging) return;
    const nx = ox + (e.clientX - sx);
    const ny = oy + (e.clientY - sy);
    win.style.left = Math.max(-win.offsetWidth + 90, Math.min(nx, window.innerWidth - 90)) + 'px';
    win.style.top = Math.max(30, Math.min(ny, window.innerHeight - 60)) + 'px';
  });

  const stop = e => {
    dragging = false;
    try { handle.releasePointerCapture(e.pointerId); } catch (_) {}
  };
  handle.addEventListener('pointerup', stop);
  handle.addEventListener('pointercancel', stop);
}

/* ═══════════ DESKTOP INIT ═══════════ */
function initDesktop() {
  const dock = $('#dock');
  const dIcons = $('#desktopIcons');

  Object.entries(APPS).forEach(([id, app]) => {
    const item = document.createElement('div');
    item.className = 'dock-item';
    item.dataset.app = id;
    item.innerHTML = `<div class="dock-img" data-icon="${app.icon}"></div>
      <div class="dock-tip">${app.name}</div><div class="dock-dot"></div>`;
    item.addEventListener('click', () => openApp(id));
    dock.appendChild(item);

    if (app.desktop) {
      const di = document.createElement('div');
      di.className = 'dicon';
      di.innerHTML = `<div class="dicon-img" data-icon="${app.icon}"></div>
        <div class="dicon-label">${app.name}</div>`;
      di.addEventListener('dblclick', () => openApp(id));
      di.addEventListener('click', () => {
        dIcons.querySelectorAll('.dicon').forEach(x => x.classList.remove('selected'));
        di.classList.add('selected');
      });
      dIcons.appendChild(di);
    }
  });

  renderIcons($('#desktop'));
  initMenuBar();
  restoreWallpaper();
  startClock();
  startStars();

  // double-tap/click empty desktop to change wallpaper
  $('#wallpaper').addEventListener('dblclick', cycleWallpaper);
}

function markDock(id, running) {
  const item = document.querySelector(`.dock-item[data-app="${id}"]`);
  if (item) item.classList.toggle('running', running);
}

/* ═══════════ WALLPAPER ═══════════ */
const WALLPAPERS = [
  { id: 'pastel',  name: 'Pastel Dream',  src: null },
  { id: 'collage', name: 'Her Collage',   src: 'wallpapers/collage-soft.jpg' },
  { id: 'sharp',   name: 'Collage, Sharp', src: 'wallpapers/collage.jpg', sharp: true },
];

function setWallpaper(id, announce) {
  const wp = WALLPAPERS.find(w => w.id === id) || WALLPAPERS[0];
  const el = $('#wallpaper');
  const photo = $('#wpPhoto');
  el.classList.toggle('photo', !!wp.src);
  el.classList.toggle('sharp', !!wp.sharp);
  if (wp.src) photo.style.backgroundImage = `url("${wp.src}")`;
  try { localStorage.setItem('reetos-wallpaper', wp.id); } catch (_) {}
  if (announce) toast('wallpaper: ' + wp.name);
  return wp;
}

function cycleWallpaper() {
  let cur = 'pastel';
  try { cur = localStorage.getItem('reetos-wallpaper') || 'pastel'; } catch (_) {}
  const i = WALLPAPERS.findIndex(w => w.id === cur);
  setWallpaper(WALLPAPERS[(i + 1) % WALLPAPERS.length].id, true);
}

function restoreWallpaper() {
  let saved = null;
  try { saved = localStorage.getItem('reetos-wallpaper'); } catch (_) {}
  setWallpaper(saved || 'collage', false);   // her collage is the default
}

/* ═══════════ MENU BAR ═══════════ */
const MENUS = {
  system: [
    { l: 'About This Friendship', do: () => openApp('about') },
    { l: 'Our Playlist',          do: () => openApp('music') },
    { l: 'Change Wallpaper', k: '⌥W', do: cycleWallpaper },
    { sep: true },
    { l: 'Send Love',   k: '♥', do: () => { heartRain(); } },
    { l: 'Lock Screen', k: '⇧⌘Q', do: relock },
    { l: 'Restart reetOS',        do: () => location.reload() },
  ],
  file: [
    { l: 'Open Letter',    do: () => openApp('letter') },
    { l: 'Open Albums',    do: () => openApp('photos') },
    { l: 'Open Playlist',  do: () => openApp('music') },
    { l: 'Open Terminal',  do: () => openApp('terminal') },
    { sep: true },
    { l: 'Close All Windows', k: '⌘W', do: () => {
        const n = closeAllWindows();
        toast(n ? `closed ${n} window${n > 1 ? 's' : ''}` : 'nothing was open');
      } },
  ],
  feelings: [
    { l: 'Tell Me a Reason', do: () => {
        const r = REASONS[Math.floor(Math.random() * REASONS.length)];
        toast(r.t);
      } },
    { l: 'Make It Rain Hearts', do: heartRain },
    { l: 'Give Me a Compliment', do: () => {
        const c = COMPLIMENTS[Math.floor(Math.random() * COMPLIMENTS.length)];
        toast(c);
      } },
    { sep: true },
    { l: 'Things To Do Together', do: () => openApp('notes') },
    { l: 'Reasons App',           do: () => openApp('reasons') },
  ],
  help: [
    { l: 'Terminal Commands', do: () => { openApp('terminal'); setTimeout(() => runTerminal('help'), 260); } },
    { l: 'What Is This?',     do: () => openApp('about') },
    { sep: true },
    { l: 'Who Made This?', do: () => toast('someone who thinks the world of you 🤍') },
  ],
};

const COMPLIMENTS = [
  "you're the friend everyone wishes they had",
  'genuinely one of the good ones',
  'the world is nicer because you\'re in it',
  'you make people feel safe — that\'s rare',
  'your laugh is the best sound in any room',
  'you have never once been too much',
];

let openMenu = null;

function closeMenu() {
  document.querySelectorAll('.menu-pop').forEach(m => m.remove());
  document.querySelectorAll('.mb-item.open').forEach(i => i.classList.remove('open'));
  openMenu = null;
}

function buildMenu(trigger, key) {
  if (openMenu === key) { closeMenu(); return; }
  closeMenu();
  const items = MENUS[key];
  if (!items) return;

  const pop = document.createElement('div');
  pop.className = 'menu-pop';
  items.forEach(it => {
    if (it.sep) { pop.appendChild(Object.assign(document.createElement('div'), { className: 'menu-sep' })); return; }
    const row = document.createElement('div');
    row.className = 'menu-row';
    row.innerHTML = `<span>${it.l}</span>${it.k ? `<span class="mk">${it.k}</span>` : ''}`;
    row.addEventListener('click', e => { e.stopPropagation(); closeMenu(); it.do(); });
    pop.appendChild(row);
  });

  $('#desktop').appendChild(pop);
  const r = trigger.getBoundingClientRect();
  pop.style.left = Math.min(r.left, window.innerWidth - pop.offsetWidth - 8) + 'px';
  trigger.classList.add('open');
  openMenu = key;
}

function initMenuBar() {
  document.querySelectorAll('.mb-item[data-menu]').forEach(item => {
    item.addEventListener('click', e => {
      e.stopPropagation();
      buildMenu(item, item.dataset.menu);
    });
  });

  $('#battery').addEventListener('click', e => {
    e.stopPropagation(); closeMenu();
    toast('battery: infinite. this friendship does not run out.');
  });
  $('#wifi').addEventListener('click', e => {
    e.stopPropagation(); closeMenu();
    toast('connected to: each other — signal strength excellent');
  });
  $('#menuClock').addEventListener('click', e => {
    e.stopPropagation(); closeMenu();
    toast(new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) + ' — a good day');
  });

  document.addEventListener('click', closeMenu);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
}

function relock() {
  closeAllWindows();
  const lock = $('#lock');
  lock.classList.remove('hidden', 'out');
  $('#desktop').classList.add('hidden');
  unlocked = false;
  cascade = 0;
}

function startClock() {
  const el = $('#menuClock');
  const tick = () => {
    const d = new Date();
    el.textContent = `${d.toLocaleDateString('en-US', { weekday: 'short' })} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  };
  tick();
  setInterval(tick, 1000);
}

/* ═══════════ WALLPAPER STARS ═══════════ */
function startStars() {
  const cv = $('#starCanvas');
  const ctx = cv.getContext('2d');
  let stars = [];

  const resize = () => {
    cv.width = window.innerWidth;
    cv.height = window.innerHeight;
    stars = Array.from({ length: 46 }, () => ({
      x: Math.random() * cv.width,
      y: Math.random() * cv.height,
      r: 0.6 + Math.random() * 1.6,
      a: Math.random(),
      sp: 0.004 + Math.random() * 0.012,
      dy: 0.05 + Math.random() * 0.16,
    }));
  };
  resize();
  window.addEventListener('resize', resize);

  (function draw() {
    ctx.clearRect(0, 0, cv.width, cv.height);
    stars.forEach(s => {
      s.a += s.sp;
      s.y -= s.dy;
      if (s.y < -4) { s.y = cv.height + 4; s.x = Math.random() * cv.width; }
      ctx.globalAlpha = 0.25 + Math.abs(Math.sin(s.a)) * 0.5;
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  })();
}

/* ═══════════ APP: LETTER ═══════════ */
const LETTER = [
  { c: 'greet', t: 'Dear Reet,' },
  { t: "Happy Friendship Day. I built you an entire operating system because a card felt a little insufficient." },
  { t: "Here's the thing about you — you make people feel like the version of themselves they were hoping to be. You listen properly. You remember the small stuff. You show up without being asked, and you never once make it feel like a favour." },
  { t: "Thank you for the 2am voice notes, for laughing at jokes that genuinely were not funny, and for being the person I want to tell things to first." },
  { t: "Every app on this desktop is something I think about when I think about you. Poke around. There's more hidden in the terminal." },
  { c: 'sig', t: 'always your person ✦' },
];

function initLetter(win) {
  const body = win.querySelector('#letterBody');
  body.innerHTML = '';
  let bi = 0;

  function nextBlock() {
    if (bi >= LETTER.length) return;
    const block = LETTER[bi];
    const el = document.createElement(block.c ? 'span' : 'p');
    if (block.c) el.className = block.c;
    else el.style.marginBottom = '.9rem';
    body.appendChild(el);

    const caret = document.createElement('span');
    caret.className = 'caret';
    caret.innerHTML = '&nbsp;';

    let ci = 0;
    const speed = block.c ? 46 : 15;
    (function typeChar() {
      if (ci <= block.t.length) {
        el.textContent = block.t.slice(0, ci);
        el.appendChild(caret);
        ci++;
        body.parentElement.scrollTop = body.parentElement.scrollHeight;
        setTimeout(typeChar, speed);
      } else {
        caret.remove();
        bi++;
        setTimeout(nextBlock, 300);
      }
    })();
  }
  nextBlock();
}

/* ═══════════ APP: PHOTOS ═══════════ */
// Albums are named after her own Instagram highlight folders.
// Files are pre-optimised: photos/<key>/<key>NN.jpg (full, max 1400px)
//                          photos/<key>/t/<key>NN.jpg (thumb, max 420px)
const ALBUMS_DATA = [
  { key: 'us',         title: 'Us',         n: 23, caps: ['the whole crew', 'partners in crime', 'my people', 'chaos, organised', 'bestie era', 'no notes'] },
  { key: 'holi',       title: 'Holi',       n: 17, caps: ['colours everywhere', 'happiest mess', 'rang barse', 'unfiltered joy', 'covered in it'] },
  { key: 'her',        title: 'Her',        n: 22, caps: ['main character', 'that smile', 'glowing', 'effortless', 'radiant', 'timeless'] },
  { key: 'art',        title: 'Her Art',    n: 4,  caps: ['made by her', 'steady hands', 'patience, drawn', 'her patterns'] },
  { key: 'moments',    title: 'Moments',    n: 11, caps: ['worth keeping', 'a good day', 'celebration mode', 'all dressed up'] },
  { key: 'favourites', title: 'Favourites', n: 33, caps: ['my favourite', 'pure joy', 'golden hour', 'caught laughing', 'sunshine', 'the best one'] },
];

const albThumb = (k, i) => `photos/${k}/t/${k}${pad(i + 1)}.jpg`;
const albFull  = (k, i) => `photos/${k}/${k}${pad(i + 1)}.jpg`;

function initPhotos(win) {
  const app = win.querySelector('#photosApp');
  const albumsGrid = win.querySelector('#albumsGrid');
  const grid = win.querySelector('#photosGrid');
  const scroll = win.querySelector('#photosScroll');
  const label = win.querySelector('#phLabel');
  const countEl = win.querySelector('#photoCount');
  const backBtn = win.querySelector('#phBack');
  const lb = win.querySelector('#lightbox');
  const lbImg = win.querySelector('#lbImg');
  const lbCap = win.querySelector('#lbCap');
  const lbIdx = win.querySelector('#lbIdx');

  let album = null;   // current album object
  let idx = 0;

  /* ---- album chooser ---- */
  ALBUMS_DATA.forEach(a => {
    const card = document.createElement('div');
    card.className = 'album-card';
    card.innerHTML = `
      <div class="album-cover"><img src="${albThumb(a.key, 0)}" alt="${a.title}" loading="lazy"></div>
      <div class="album-meta">
        <div class="album-title">${a.title}</div>
        <div class="album-count">${a.n} photos</div>
      </div>`;
    card.addEventListener('click', () => openAlbum(a));
    albumsGrid.appendChild(card);
  });

  function openAlbum(a) {
    album = a;
    grid.innerHTML = '';
    for (let i = 0; i < a.n; i++) {
      const cell = document.createElement('div');
      cell.className = 'ph-thumb';
      const img = new Image();
      img.src = albThumb(a.key, i);
      img.alt = a.title;
      img.loading = 'lazy';
      img.decoding = 'async';
      cell.appendChild(img);
      cell.addEventListener('click', () => { idx = i; showPhoto(); });
      grid.appendChild(cell);
    }
    albumsGrid.classList.add('hidden');
    grid.classList.remove('hidden');
    app.classList.add('in-album');
    label.textContent = a.title;
    countEl.textContent = a.n + ' photos';
    scroll.scrollTop = 0;
  }

  function backToAlbums() {
    album = null;
    grid.classList.add('hidden');
    albumsGrid.classList.remove('hidden');
    app.classList.remove('in-album');
    label.textContent = 'Albums';
    countEl.textContent = '';
    scroll.scrollTop = 0;
  }
  backBtn.addEventListener('click', backToAlbums);

  /* ---- lightbox ---- */
  function showPhoto() {
    if (!album) return;
    lbImg.src = albFull(album.key, idx);
    lbCap.textContent = album.caps[idx % album.caps.length];
    lbIdx.textContent = `${idx + 1} / ${album.n}`;
    lb.classList.add('open');
  }
  const step = d => { if (album) { idx = (idx + d + album.n) % album.n; showPhoto(); } };

  win.querySelector('#lbClose').addEventListener('click', () => lb.classList.remove('open'));
  win.querySelector('#lbPrev').addEventListener('click', () => step(-1));
  win.querySelector('#lbNext').addEventListener('click', () => step(1));
  lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });

  // swipe left/right to move between photos (mobile has no arrow buttons)
  let tx = 0, ty = 0;
  lb.addEventListener('touchstart', e => {
    tx = e.changedTouches[0].clientX; ty = e.changedTouches[0].clientY;
  }, { passive: true });
  lb.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx;
    const dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
    else if (dy > 70 && Math.abs(dy) > Math.abs(dx)) lb.classList.remove('open');
  }, { passive: true });
}

/* ═══════════ APP: VIDEOS ═══════════ */
/* Collections come from video-data.js (generated by tools/build_videos.py).
   Grid shows poster JPEGs only — video bytes load on tap, never upfront. */
const VID_SETS = typeof VIDEOS !== 'undefined' ? VIDEOS : [];
const vidPoster = (k, f) => `videos/${k}/p/${f}.jpg`;
const vidFile   = (k, f) => `videos/${k}/${f}.mp4`;

function initVideos(win) {
  const app = win.querySelector('#videosApp');
  const setsEl = win.querySelector('#vdSets');
  const grid = win.querySelector('#vdGrid');
  const scroll = win.querySelector('#vdScroll');
  const label = win.querySelector('#vdLabel');
  const countEl = win.querySelector('#vdCount');
  const player = win.querySelector('#vdPlayer');
  const video = win.querySelector('#vdVideo');
  const titleEl = win.querySelector('#vdTitle');
  const dateEl = win.querySelector('#vdDate');

  let set = null, idx = 0;

  VID_SETS.forEach(c => {
    const card = document.createElement('div');
    card.className = 'album-card';
    card.innerHTML = `
      <div class="album-cover"><img src="${vidPoster(c.key, c.items[0].f)}" alt="${c.title}" loading="lazy"></div>
      <div class="album-meta">
        <div class="album-title">${c.title}</div>
        <div class="album-count">${c.items.length} clips</div>
      </div>`;
    card.addEventListener('click', () => openSet(c));
    setsEl.appendChild(card);
  });

  function openSet(c) {
    set = c;
    grid.innerHTML = '';
    c.items.forEach((it, i) => {
      const cell = document.createElement('div');
      cell.className = 'vd-cell';
      cell.innerHTML = `
        <div class="vd-poster">
          <img src="${vidPoster(c.key, it.f)}" alt="${it.t}" loading="lazy" decoding="async">
          <div class="vd-play">${ICONS.play}</div>
          <div class="vd-cap">${it.t}</div>
        </div>`;
      cell.addEventListener('click', () => { idx = i; playClip(); });
      grid.appendChild(cell);
    });
    setsEl.classList.add('hidden');
    grid.classList.remove('hidden');
    app.classList.add('in-album');
    label.textContent = c.title;
    countEl.textContent = c.items.length + ' clips';
    scroll.scrollTop = 0;
  }

  function backToSets() {
    set = null;
    grid.classList.add('hidden');
    setsEl.classList.remove('hidden');
    app.classList.remove('in-album');
    label.textContent = 'Clips';
    countEl.textContent = '';
  }
  win.querySelector('#vdBack').addEventListener('click', backToSets);

  function playClip() {
    if (!set) return;
    const it = set.items[idx];
    video.src = vidFile(set.key, it.f);
    video.poster = vidPoster(set.key, it.f);
    titleEl.textContent = it.t;
    dateEl.textContent = it.d || '';
    player.classList.add('open');
    video.play().catch(() => {});   // autoplay may be blocked; controls remain
  }

  const stepClip = d => { if (set) { idx = (idx + d + set.items.length) % set.items.length; playClip(); } };

  function closePlayer() {
    video.pause();
    video.removeAttribute('src');
    video.load();
    player.classList.remove('open');
  }
  win.querySelector('#vdClose').addEventListener('click', closePlayer);
  win.querySelector('#vdPrev').addEventListener('click', () => stepClip(-1));
  win.querySelector('#vdNext').addEventListener('click', () => stepClip(1));
  video.addEventListener('ended', () => stepClip(1));

  // swipe between clips / down to close
  let tx = 0, ty = 0;
  player.addEventListener('touchstart', e => {
    tx = e.changedTouches[0].clientX; ty = e.changedTouches[0].clientY;
  }, { passive: true });
  player.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) stepClip(dx < 0 ? 1 : -1);
    else if (dy > 80 && Math.abs(dy) > Math.abs(dx)) closePlayer();
  }, { passive: true });

  // stop audio if the window is closed while playing
  win.addEventListener('win-closing', closePlayer);
}

/* ═══════════ APP: MUSIC ═══════════ */
/* Stations come from music-data.js, generated from assets/music/.
   "Ours" is prepended so their own song stays the default track. */
const OURS = { name: 'Ours', key: null, tracks: [{ t: 'Falak Tak', f: null, src: '../assets/falak_tak.mp3' }] };
const ALL_STATIONS = [OURS, ...(typeof STATIONS !== 'undefined' ? STATIONS : [])];

const trackSrc = (station, tr) =>
  tr.src ? tr.src : `assets/music/${encodeURIComponent(station.key)}/${encodeURIComponent(tr.f)}`;

function initMusic(win) {
  const audio = win.querySelector('#muAudio');
  const playBtn = win.querySelector('#muPlay');
  const disc = win.querySelector('#muDisc');
  const seek = win.querySelector('#muSeek');
  const cur = win.querySelector('#muCur');
  const dur = win.querySelector('#muDur');
  const viz = win.querySelector('#muViz');
  const titleEl = win.querySelector('#muTitle');
  const artistEl = win.querySelector('#muArtist');
  const listEl = win.querySelector('#muTracks');
  const stationsEl = win.querySelector('#muStations');
  const listWrap = win.querySelector('.mu-list');
  const stationBtn = win.querySelector('#muStationBtn');
  const stationName = win.querySelector('#muStationName');
  const shuffleBtn = win.querySelector('#muShuffle');

  for (let i = 0; i < 26; i++) viz.appendChild(document.createElement('i'));
  const bars = viz.querySelectorAll('i');

  const fmt = s => (isFinite(s) && s > 0 ? `${Math.floor(s / 60)}:${pad(Math.floor(s % 60))}` : '0:00');
  const setIcon = key => { playBtn.dataset.filled = ''; playBtn.setAttribute('data-icon', key); renderIcons(win); };

  let station = ALL_STATIONS[0];
  let current = 0;
  let shuffle = false;
  let rows = [];

  /* ---- station picker ---- */
  ALL_STATIONS.forEach(st => {
    const row = document.createElement('div');
    row.className = 'mu-station';
    row.innerHTML = `<span>${st.name}</span><span class="n">${st.tracks.length}</span>`;
    row.addEventListener('click', () => showStation(st));
    stationsEl.appendChild(row);
  });

  function showStation(st) {
    station = st;
    listEl.innerHTML = '';
    rows = st.tracks.map((tr, i) => {
      const row = document.createElement('div');
      row.className = 'mu-track';
      row.innerHTML = `<span class="mu-tnum">${pad(i + 1)}</span>
        <span class="mu-tinfo"><div class="mu-tname">${tr.t}</div></span>`;
      row.addEventListener('click', () => load(i, true));
      listEl.appendChild(row);
      return row;
    });
    stationsEl.classList.add('hidden');
    listEl.classList.remove('hidden');
    listWrap.classList.add('in-station');
    stationName.textContent = st.name;
    markActive();
  }

  function showStations() {
    stationsEl.classList.remove('hidden');
    listEl.classList.add('hidden');
    listWrap.classList.remove('in-station');
    stationName.textContent = 'stations';
  }
  stationBtn.addEventListener('click', () => {
    if (listWrap.classList.contains('in-station')) showStations();
  });

  shuffleBtn.addEventListener('click', () => {
    shuffle = !shuffle;
    shuffleBtn.classList.toggle('on', shuffle);
    toast(shuffle ? 'shuffle on' : 'shuffle off');
  });

  const markActive = () => rows.forEach((r, n) => r.classList.toggle('active', n === current));

  function load(i, autoplay) {
    current = i;
    const tr = station.tracks[i];
    audio.src = trackSrc(station, tr);
    titleEl.textContent = tr.t;
    artistEl.textContent = station.name === 'Ours' ? 'the one that\'s always been ours' : station.name;
    dur.textContent = '0:00'; cur.textContent = '0:00'; seek.value = 0;
    markActive();
    if (autoplay) play();
  }

  function play() {
    audio.play().then(() => { setIcon('pause'); disc.classList.add('playing'); })
      .catch(() => {
        setIcon('play'); disc.classList.remove('playing');
        toast('could not play that track');
      });
  }

  playBtn.addEventListener('click', () => {
    if (audio.paused) play();
    else { audio.pause(); setIcon('play'); disc.classList.remove('playing'); }
  });

  const skip = d => {
    const n = station.tracks.length;
    if (shuffle && n > 1) {
      let r = current;
      while (r === current) r = Math.floor(Math.random() * n);
      load(r, !audio.paused);
    } else {
      load((current + d + n) % n, !audio.paused);
    }
  };
  win.querySelector('#muBack').addEventListener('click', () => skip(-1));
  win.querySelector('#muFwd').addEventListener('click', () => skip(1));

  audio.addEventListener('loadedmetadata', () => { dur.textContent = fmt(audio.duration); });
  audio.addEventListener('timeupdate', () => {
    if (!audio.duration) return;
    seek.value = (audio.currentTime / audio.duration) * 1000;
    cur.textContent = fmt(audio.currentTime);
  });
  audio.addEventListener('ended', () => skip(1));
  audio.addEventListener('error', () => {
    if (audio.src) { setIcon('play'); disc.classList.remove('playing'); }
  });

  seek.addEventListener('input', () => { if (audio.duration) audio.currentTime = (seek.value / 1000) * audio.duration; });

  (function animViz() {
    if (!win.isConnected) return;
    const playing = !audio.paused;
    bars.forEach((b, i) => {
      b.style.height = (playing ? 20 + Math.abs(Math.sin(Date.now() / 190 + i * 0.7)) * 78 * Math.random() : 18) + '%';
    });
    setTimeout(animViz, 110);
  })();

  showStation(ALL_STATIONS[0]);
  load(0, false);
  showStations();
}

/* ═══════════ APP: REASONS ═══════════ */
const REASONS = [
  { g: 'chat',     t: "you reply to my nonsense at 2am like it's urgent news" },
  { g: 'heart',    t: "you notice when I'm off before I've said a single word" },
  { g: 'smile',    t: "you laugh at my worst jokes — genuinely, not politely" },
  { g: 'hands',    t: "you show up. every time. without being asked" },
  { g: 'star',     t: "you celebrate my wins louder than I do" },
  { g: 'sun',      t: "you turn an ordinary tuesday into something worth remembering" },
  { g: 'moon',     t: "you sit with me in the quiet and never rush it" },
  { g: 'flower',   t: "you're kind to people who can do nothing for you" },
  { g: 'cloud',    t: "you make hard days feel survivable" },
  { g: 'gift',     t: "you remember the small things nobody else bothers to" },
  { g: 'infinity', t: "you've never once made me earn your friendship" },
  { g: 'sparkle',  t: "you're just genuinely, absurdly good to be around" },
];

function initReasons(win) {
  const display = win.querySelector('#rsDisplay');
  const btn = win.querySelector('#rsBtn');
  const counter = win.querySelector('#rsCounter');
  let pool = [];
  const seen = new Set();

  btn.addEventListener('click', () => {
    if (!pool.length) pool = [...REASONS].sort(() => Math.random() - 0.5);
    const r = pool.pop();
    seen.add(r.t);

    display.classList.remove('pop');
    void display.offsetWidth;
    display.innerHTML = `<div class="rs-glyph" data-icon="${r.g}"></div><div class="rs-text">${r.t}</div>`;
    renderIcons(display);
    display.classList.add('pop');

    counter.textContent = `${seen.size} of ${REASONS.length} discovered`;
    if (seen.size === REASONS.length) {
      setTimeout(() => toast("that's all 12 — and I could keep going 🎀"), 500);
    }
  });
}

/* ═══════════ APP: NOTES ═══════════ */
const TODOS = [
  'a road trip with genuinely terrible music',
  'stay up all night talking about nothing',
  'that café we keep saying we\'ll try',
  'watch the sunrise instead of sleeping',
  'plan a surprise for someone else together',
  'a photo dump nobody else understands',
  'grow old and still be this annoying',
  'reread this list years from now',
];

/* Saved to localStorage so her ticks and her own additions survive a refresh.
   Shape: { done: { "<text>": true }, custom: ["…"] } */
const LIST_KEY = 'reetos-list';

function loadList() {
  try {
    const raw = JSON.parse(localStorage.getItem(LIST_KEY) || '{}');
    return { done: raw.done || {}, custom: Array.isArray(raw.custom) ? raw.custom : [] };
  } catch (_) {
    return { done: {}, custom: [] };
  }
}
function saveList(state) {
  try { localStorage.setItem(LIST_KEY, JSON.stringify(state)); } catch (_) {}
}

function initNotes(win) {
  const list = win.querySelector('#ntList');
  const foot = win.querySelector('#ntFoot');
  const form = win.querySelector('#ntAdd');
  const input = win.querySelector('#ntInput');

  const state = loadList();

  const update = () => {
    const items = list.querySelectorAll('.nt-item');
    const done = list.querySelectorAll('.nt-item.done').length;
    foot.textContent = `${done} of ${items.length} completed`;
    if (items.length && done === items.length) toast('a whole life planned out 🤍');
  };

  function addRow(text, mine) {
    const li = document.createElement('li');
    li.className = 'nt-item' + (mine ? ' mine' : '');
    li.dataset.text = text;
    li.innerHTML = `<span class="nt-box"><span data-icon="check"></span></span>
      <span class="nt-txt"></span>
      ${mine ? '<button class="nt-del" aria-label="remove">×</button>' : ''}`;
    li.querySelector('.nt-txt').textContent = text;   // textContent: no HTML injection
    if (state.done[text]) li.classList.add('done');

    li.addEventListener('click', e => {
      if (e.target.closest('.nt-del')) return;
      li.classList.toggle('done');
      if (li.classList.contains('done')) state.done[text] = true;
      else delete state.done[text];
      saveList(state); update();
    });

    const del = li.querySelector('.nt-del');
    if (del) del.addEventListener('click', e => {
      e.stopPropagation();
      state.custom = state.custom.filter(x => x !== text);
      delete state.done[text];
      saveList(state); li.remove(); update();
    });

    list.appendChild(li);
    renderIcons(li);
    return li;
  }

  TODOS.forEach(t => addRow(t, false));
  state.custom.forEach(t => addRow(t, true));
  update();

  form.addEventListener('submit', e => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    if (state.custom.includes(text) || TODOS.includes(text)) {
      toast('that one is already on the list');
      input.value = '';
      return;
    }
    state.custom.push(text);
    saveList(state);
    const li = addRow(text, true);
    input.value = '';
    update();
    li.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    toast('added 🤍');
  });
}

/* ═══════════ APP: ABOUT ═══════════ */
const BOOT_TIME = Date.now();
function initAbout(win) {
  const el = win.querySelector('#abUptime');
  const tick = () => {
    if (!win.isConnected) return;
    const s = Math.floor((Date.now() - BOOT_TIME) / 1000);
    el.textContent = `${pad(Math.floor(s / 60))}m ${pad(s % 60)}s · (really, years)`;
    setTimeout(tick, 1000);
  };
  tick();
}

/* ═══════════ APP: TERMINAL ═══════════ */
// Set by initTerminal so menus/other apps can drive the terminal.
let runTerminal = () => {};

function initTerminal(win) {
  const out = win.querySelector('#termOut');
  const input = win.querySelector('#termInput');
  const history = [];
  let hIdx = -1;

  const print = (text, cls = '') => {
    const d = document.createElement('div');
    d.className = 'term-line ' + cls;
    d.textContent = text;
    out.appendChild(d);
    out.scrollTop = out.scrollHeight;
  };

  const printAll = (arr, cls) => arr.forEach(l => print(l, cls));

  const COMMANDS = {
    help: () => printAll([
      'available commands:',
      '  whoami            who you are, officially',
      '  reasons           why you matter (try: reasons --all)',
      '  memories          open the photo albums',
      '  clips             home videos & reels',
      '  cat letter.txt    read the letter',
      '  play              open the playlist',
      '  songs             list every track',
      '  ls                list what\'s on this machine',
      '  neofetch          system specs',
      '  friendship -s     current status report',
      '  hug               it does what you think',
      '  sudo love         ⚠ elevated privileges',
      '  clear             wipe the screen',
    ], 'lav'),

    whoami: () => printAll([
      'reet',
      'uid=1  gid=1  groups=best_friend,favourite_person,emergency_contact',
      'status: irreplaceable',
    ], 'pink'),

    reasons: (args) => {
      if (args[0] === '--all') {
        print('listing all 12 reasons:', 'dim');
        REASONS.forEach((r, i) => print(`  [${pad(i + 1)}] ${r.t}`, 'pink'));
      } else {
        const r = REASONS[Math.floor(Math.random() * REASONS.length)];
        print('  ' + r.t, 'pink');
        print('  (run "reasons --all" for the full list)', 'dim');
      }
    },

    ls: () => printAll([
      'letter.txt        memories/         our_list.md',
      'reasons.app       music/            trash/  (empty)',
      '.secrets/         ← nothing here. I tell you everything.',
    ], 'lav'),

    'cat': (args) => {
      if (args[0] === 'letter.txt') { print('opening letter.txt …', 'dim'); openApp('letter'); }
      else if (!args[0]) print('cat: missing file name', 'err');
      else print(`cat: ${args[0]}: no such file`, 'err');
    },

    memories: () => { print('mounting /memories …', 'dim'); openApp('photos'); },
    clips: () => {
      const n = VID_SETS.reduce((a, c) => a + c.items.length, 0);
      print(`${n} clips across ${VID_SETS.length} sets — rolling …`, 'dim');
      VID_SETS.forEach(c => print(`  ${c.title.padEnd(10)} ${c.items.length}`, 'pink'));
      openApp('videos');
    },
    play: () => { print('opening the playlist …', 'dim'); openApp('music'); },
    songs: (args) => {
      const total = ALL_STATIONS.reduce((n, s) => n + s.tracks.length, 0);
      const q = args.join(' ').toLowerCase();
      if (q) {
        const hits = [];
        ALL_STATIONS.forEach(s => s.tracks.forEach(t => {
          if (t.t.toLowerCase().includes(q)) hits.push(`${t.t} — ${s.name}`);
        }));
        if (!hits.length) return print(`no track matching "${q}"`, 'err');
        print(`${hits.length} match${hits.length > 1 ? 'es' : ''}:`, 'dim');
        hits.slice(0, 25).forEach(h => print('  ' + h, 'pink'));
        if (hits.length > 25) print(`  … and ${hits.length - 25} more`, 'dim');
        return;
      }
      print(`${total} tracks across ${ALL_STATIONS.length} stations:`, 'dim');
      ALL_STATIONS.forEach(s => print(`  ${s.name.padEnd(16)} ${s.tracks.length} tracks`, 'pink'));
      print('  (try: songs <name> to search)', 'dim');
    },
    neofetch: () => printAll([
      '     🎀      reet@friendship',
      '    ╭──╮     ─────────────────',
      '   ╱    ╲    OS       reetOS 2.0 (Friendship Edition)',
      '  │  ♡♡  │   Host     Your Corner Of The Internet',
      '   ╲    ╱    Uptime   as long as I can remember',
      '    ╰──╯     Memory   ∞ GB used / ∞ GB (all good ones)',
      '             Shell    unfiltered honesty',
      '             Theme    pastel-forever',
    ], 'lav'),

    'friendship': (args) => {
      if (args[0] === '-s' || args[0] === '--status') {
        printAll([
          'FRIENDSHIP STATUS REPORT',
          '  connection ......... stable (no packet loss, ever)',
          '  trust level ........ maximum',
          '  inside jokes ....... 999+ (overflow error)',
          '  expiry date ........ none found',
          '  verdict ............ permanent',
        ], 'pink');
      } else print('usage: friendship -s', 'err');
    },

    hug: () => { printAll(['        ╭───────────╮', '        │  ⊂(  ˘ ³˘)⊃  │', '        ╰───────────╯', 'consider yourself hugged.'], 'pink'); },

    sudo: (args) => {
      if (args.join(' ') === 'love') {
        print('[sudo] password for reet: ********', 'dim');
        print('permission granted. you never needed to ask.', 'big');
        heartRain();
      } else if (!args.length) print('sudo: a command is required', 'err');
      else print(`sudo: ${args[0]}: permission denied (nice try)`, 'err');
    },

    wallpaper: () => { cycleWallpaper(); print('wallpaper changed.', 'pink'); },
    date: () => print(new Date().toString(), 'lav'),
    echo: (args) => print(args.join(' ')),
    clear: () => { out.innerHTML = ''; },

    shutdown: () => print('shutdown: refused. this one stays on forever.', 'err'),
    exit: () => print('exit: you can close the window, but you\'re stuck with me.', 'err'),
    rm: () => print('rm: operation not permitted on protected memories.', 'err'),
    thanks: () => print('anytime. genuinely.', 'pink'),
    sorry: () => print('nothing to apologise for. never has been.', 'pink'),
  };

  const ALIASES = { r: 'reasons', h: 'help', '?': 'help', cls: 'clear', photos: 'memories', music: 'play' };

  function runCommand(raw) {
    const line = raw.trim();
    print(`reet@friendship ~ $ ${line}`, 'cmd');
    if (!line) return;
    history.unshift(line);
    hIdx = -1;

    const parts = line.split(/\s+/);
    let cmd = parts[0].toLowerCase();
    const args = parts.slice(1);
    if (ALIASES[cmd]) cmd = ALIASES[cmd];

    if (COMMANDS[cmd]) COMMANDS[cmd](args);
    else print(`${cmd}: command not found — type "help"`, 'err');
  }

  runTerminal = cmd => { if (win.isConnected) runCommand(cmd); };

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      runCommand(input.value);
      input.value = '';
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (hIdx < history.length - 1) { hIdx++; input.value = history[hIdx]; }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (hIdx > 0) { hIdx--; input.value = history[hIdx]; }
      else { hIdx = -1; input.value = ''; }
    }
  });

  // Tapping a chip runs a command without needing the phone keyboard.
  const CHIPS = ['help', 'whoami', 'reasons', 'friendship -s', 'hug', 'neofetch', 'memories', 'sudo love', 'clear'];
  const chipBar = win.querySelector('#termChips');
  CHIPS.forEach(c => {
    const b = document.createElement('button');
    b.className = 'term-chip';
    b.textContent = c;
    b.addEventListener('click', () => runCommand(c));
    chipBar.appendChild(b);
  });

  // Focus the input on desktop only — on mobile this would pop the keyboard
  // over the output the moment the app opens.
  win.querySelector('.term').addEventListener('click', e => {
    if (!isMobile() && !e.target.closest('.term-chip')) input.focus();
  });

  printAll([
    'reetOS 2.0 · friendship edition',
    'last login: today, and every day before that',
  ], 'dim');
  print('');
  print('hey Reet 🎀  type "help" to see what this thing does.', 'big');
  if (isMobile()) print('(or just tap one of the buttons below)', 'dim');
  print('');
  if (!isMobile()) setTimeout(() => input.focus(), 300);
}

/* ═══════════ EASTER EGG: HEART RAIN ═══════════ */
function heartRain() {
  let cv = $('#heartRain');
  if (!cv) {
    cv = document.createElement('canvas');
    cv.id = 'heartRain';
    document.body.appendChild(cv);
  }
  cv.width = window.innerWidth;
  cv.height = window.innerHeight;
  const ctx = cv.getContext('2d');
  const cols = ['#ff8fb8', '#e85a92', '#b79dff', '#ffb98f', '#8fc7ff'];

  const hearts = Array.from({ length: 90 }, () => ({
    x: Math.random() * cv.width,
    y: -Math.random() * cv.height,
    s: 8 + Math.random() * 14,
    vy: 1.4 + Math.random() * 2.6,
    vx: (Math.random() - 0.5) * 1.1,
    rot: Math.random() * Math.PI * 2,
    vr: (Math.random() - 0.5) * 0.06,
    col: cols[Math.floor(Math.random() * cols.length)],
  }));

  const start = Date.now();
  (function frame() {
    const elapsed = Date.now() - start;
    ctx.clearRect(0, 0, cv.width, cv.height);
    ctx.globalAlpha = elapsed > 4200 ? Math.max(0, 1 - (elapsed - 4200) / 900) : 1;

    hearts.forEach(h => {
      h.y += h.vy; h.x += h.vx; h.rot += h.vr;
      if (h.y > cv.height + 30) { h.y = -30; h.x = Math.random() * cv.width; }
      ctx.save();
      ctx.translate(h.x, h.y);
      ctx.rotate(h.rot);
      ctx.fillStyle = h.col;
      ctx.beginPath();
      const s = h.s;
      ctx.moveTo(0, s * 0.35);
      ctx.bezierCurveTo(-s, -s * 0.4, -s * 0.5, -s, 0, -s * 0.42);
      ctx.bezierCurveTo(s * 0.5, -s, s, -s * 0.4, 0, s * 0.35);
      ctx.fill();
      ctx.restore();
    });

    if (elapsed < 5200) requestAnimationFrame(frame);
    else cv.remove();
  })();

  toast('sudo love: access granted 💗');
}

/* ═══════════ GLOBAL ═══════════ */
window.addEventListener('resize', () => {
  const hr = $('#heartRain');
  if (hr) { hr.width = window.innerWidth; hr.height = window.innerHeight; }
});
