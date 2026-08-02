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
  appStory: sq('y', '#ffb8c8', '#e87a9e', `
    <circle cx="24" cy="13" r="2.6" fill="#fff"/>
    <circle cx="24" cy="24" r="2.6" fill="#fff"/>
    <circle cx="24" cy="35" r="2.6" fill="#fff"/>
    <path d="M24 15.6v5.8M24 26.6v5.8" ${S}/>
    <path d="M29 13h7M29 24h5M29 35h8" ${S}/>`),
  appQuiz: sq('q', '#a8dcff', '#6db4e8', `
    <path d="M18.5 18.5a5.5 5.5 0 1111 .5c0 3.5-5.5 4-5.5 8" ${S}/>
    <circle cx="24" cy="34.5" r="1.9" fill="#fff"/>`),
  appReply: sq('w', '#ffe0a8', '#f5b85a', `
    <path d="M12 33.5V27l14.5-14.5a3 3 0 014.2 0l2.8 2.8a3 3 0 010 4.2L19 34h-7z" ${S}/>
    <path d="M25 15.5l7 7" ${S}/>`),
  appShayari: sq('s', '#f2b8ff', '#c98fe8', `
    <path d="M17 32c-3-8 1-16 9-19.5" ${S}/>
    <path d="M26 12.5c1.6 5.4.6 11-3 14.2-2.3 2-5.2 2.4-7.4 1.2" ${S}/>
    <path d="M13.5 35.5c1.6-2.2 3.4-4 5.5-5.5" ${S}/>
    <path d="M30 30h6M30 35h4" ${S}/>`),
  appVideos: sq('v', '#ffc4a8', '#ff9a7a', `
    <rect x="8" y="14" width="21" height="20" rx="4" ${S}/>
    <path d="M29 22.5l8-4.5v12l-8-4.5z" ${S}/>`),
  appAbout: sq('a', '#ffa8d4', '#e87ab0', `
    <circle cx="24" cy="24" r="12" ${S}/>
    <path d="M24 22v8" ${S}/><circle cx="24" cy="17.6" r="1.5" fill="#fff"/>`),
  appAI: sq('i', '#b3e0ff', '#7ab8ff', `
    <path d="M24 12l2.6 6.9 6.9 2.6-6.9 2.6-2.6 6.9-2.6-6.9-6.9-2.6 6.9-2.6z" ${S}/>
    <circle cx="34" cy="14" r="2.4" fill="#fff"/>`),
  appBrowser: sq('b', '#9de0d0', '#5ec2ac', `
    <circle cx="24" cy="24" r="12.5" ${S}/>
    <path d="M11.5 24h25M24 11.5c3.4 3.4 5 8 5 12.5s-1.6 9.1-5 12.5c-3.4-3.4-5-8-5-12.5s1.6-9.1 5-12.5z" ${S}/>`),
  appThrowback: sq('k', '#ffd8a8', '#ff9d6b', `
    <path d="M15 19l-4.5 5 4.5 5" ${S}/>
    <path d="M10.5 24h13a7 7 0 100-14h-2" ${S}/>`),
  appPromise: sq('z', '#ffb8d4', '#ff7aa8', `
    <path d="M16 24c-2.6-3.6-5.4-5.6-8.2-5.2-2.4.4-3.6 2.6-2.8 4.8.9 2.4 4.4 3.4 11 .4z" fill="#fff" opacity=".9"/>
    <path d="M16 24c2.6-3.6 5.4-5.6 8.2-5.2 2.4.4 3.6 2.6 2.8 4.8-.9 2.4-4.4 3.4-11 .4z" fill="#fff" opacity=".9"/>
    <circle cx="16" cy="24" r="2.2" fill="#fff"/>
    <path d="M8 14l4 4M24 14l-4 4" ${S}/>`),
  appSecret: sq('sec', '#ffe08f', '#ffb347', `
    <path d="M24 14c-3.6-4.6-7.4-6.4-10.6-4.9-3 1.4-3.8 5-1.6 8.3C14 21 24 30 24 30s10-9 12.2-12.6c2.2-3.3 1.4-6.9-1.6-8.3-3.2-1.5-7 .3-10.6 4.9z" fill="#fff" opacity=".95"/>
    <path d="M15 30h18v6a2 2 0 01-2 2H17a2 2 0 01-2-2v-6z" ${S}/>
    <path d="M15 30l9 6 9-6" ${S}/>`),
  appSettings: sq('cog', '#c4c9e0', '#8a92c4', `
    <circle cx="24" cy="24" r="6.2" ${S}/>
    <path d="M24 12.5v4M24 31.5v4M35.5 24h-4M16.5 24h-4M31.9 16.1l-2.8 2.8M18.9 29.1l-2.8 2.8M31.9 31.9l-2.8-2.8M18.9 18.9l-2.8-2.8" ${S}/>`),

  /* ── UI glyphs ── */
  battery: `<svg viewBox="0 0 26 14"><rect x="1" y="1" width="20" height="12" rx="3.5" fill="none" stroke="currentColor" stroke-width="1.3"/><rect x="3" y="3" width="16" height="8" rx="2" fill="#8fe0c4"/><path d="M23.2 5v4c1.2-.4 1.8-1.1 1.8-2s-.6-1.6-1.8-2z" fill="currentColor"/></svg>`,
  wifi: `<svg viewBox="0 0 24 18"><path d="M2 6.2a15 15 0 0120 0M5.6 10a10 10 0 0112.8 0M9.2 13.7a5 5 0 015.6 0" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="12" cy="16.4" r="1.4" fill="currentColor"/></svg>`,
  bell: `<svg viewBox="0 0 20 20"><path d="M10 2.5c-2.4 0-4 1.9-4 4.3v2.3c0 .9-.3 1.8-.9 2.5l-.7.9h11.2l-.7-.9a3.9 3.9 0 01-.9-2.5V6.8c0-2.4-1.6-4.3-4-4.3z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M8 15a2 2 0 004 0" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
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
  download: `<svg viewBox="0 0 16 16"><path d="M8 2v8.5M4.6 7.6L8 11l3.4-3.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M3 13.5h10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  send: `<svg viewBox="0 0 16 16"><path d="M2 8l12-5.5-4.5 12-2-5-5.5-1.5z" fill="currentColor" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round"/></svg>`,
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
  playTone('notif');
  pushNotif(msg);
}

/* ═══════════ SYSTEM SOUNDS (synthesized — no assets, works offline) ═══════════ */
const SOUND_KEY = 'reetos-sound';
function isSoundOn() {
  try { return localStorage.getItem(SOUND_KEY) !== 'off'; } catch (_) { return true; }
}
function setSoundOn(on) {
  try { localStorage.setItem(SOUND_KEY, on ? 'on' : 'off'); } catch (_) {}
}

let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    audioCtx = new AC();
  }
  if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
  return audioCtx;
}

const TONE_PRESETS = {
  open:  { freq: 660, dur: .09, type: 'sine',     vol: .05 },
  close: { freq: 340, dur: .09, type: 'sine',     vol: .045 },
  notif: { freq: 880, dur: .07, type: 'triangle', vol: .035 },
  click: { freq: 520, dur: .05, type: 'sine',     vol: .04 },
};
function playTone(preset) {
  if (!isSoundOn()) return;
  const p = TONE_PRESETS[preset];
  if (!p) return;
  try {
    const ctx = getAudioCtx();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = p.type;
    osc.frequency.value = p.freq;
    gain.gain.value = p.vol;
    gain.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + p.dur);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + p.dur);
  } catch (_) {}
}

/* ═══════════ NOTIFICATION CENTER ═══════════ */
const NOTIF_LOG = [];
function pushNotif(msg) {
  NOTIF_LOG.unshift({ msg, time: new Date() });
  if (NOTIF_LOG.length > 20) NOTIF_LOG.length = 20;
  const dot = document.getElementById('notifDot');
  if (dot) dot.classList.remove('hidden');
  renderNotifPanel();
}
function renderNotifPanel() {
  const list = document.getElementById('notifList');
  if (!list) return;
  if (!NOTIF_LOG.length) {
    list.innerHTML = '<div class="notif-empty">nothing yet — go explore something 🎀</div>';
    return;
  }
  list.innerHTML = NOTIF_LOG.map(n => `
    <div class="notif-row">
      <div class="notif-msg"></div>
      <div class="notif-time">${n.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
    </div>`).join('');
  list.querySelectorAll('.notif-msg').forEach((el, i) => { el.textContent = NOTIF_LOG[i].msg; });
}
function initNotifCenter() {
  const btn = document.getElementById('notifBtn');
  const panel = document.getElementById('notifPanel');
  const clearBtn = document.getElementById('notifClearBtn');
  const dot = document.getElementById('notifDot');
  if (!btn || !panel) return;

  btn.addEventListener('click', e => {
    e.stopPropagation();
    panel.classList.toggle('hidden');
    if (!panel.classList.contains('hidden')) dot.classList.add('hidden');
  });
  document.addEventListener('click', e => {
    if (!panel.contains(e.target) && e.target !== btn) panel.classList.add('hidden');
  });
  clearBtn.addEventListener('click', () => {
    NOTIF_LOG.length = 0;
    renderNotifPanel();
  });
  renderNotifPanel();
}

/* ═══════════ PWA INSTALL ═══════════ */
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

const isStandalone = () =>
  window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent);

let deferredInstallPrompt = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredInstallPrompt = e;
});

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

let bootStep = 0;
function runBoot() {
  const bootLog = $('#bootLog');
  const bootFill = $('#bootBarFill');
  const bootPct = $('#bootPct');
  if (!bootLog || !bootFill || !bootPct) {
    setTimeout(runBoot, 150);
    return;
  }

  if (bootStep >= BOOT_LINES.length) {
    bootFill.style.width = '100%';
    bootPct.textContent = '100%';
    setTimeout(offerInstallOrLock, 1000);   // let 100% actually register before moving on
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
  // uneven, slightly slow — a boot that flies past reads as a loading flicker
  setTimeout(runBoot, 430 + Math.random() * 320);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setTimeout(runBoot, 600));
} else {
  setTimeout(runBoot, 600);
}

/* Offer the "add to home screen" panel — mobile only, and only if there's
   somewhere useful to add it (not already installed, not on desktop). */
function offerInstallOrLock() {
  const panel = $('#bootInstall');
  const canOffer = isMobile() && !isStandalone() && (deferredInstallPrompt || isIOS());

  if (!canOffer) { showLock(); return; }

  panel.classList.remove('hidden');
  const installBtn = $('#installBtn');
  const continueBtn = $('#continueBtn');
  renderIcons(panel);

  if (isIOS() && !deferredInstallPrompt) {
    installBtn.querySelector('span:last-child').textContent = 'tap ⬆ share, then "Add to Home Screen"';
  }

  installBtn.addEventListener('click', async () => {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice.catch(() => {});
      deferredInstallPrompt = null;
      showLock();
    }
    // iOS has no programmatic install — the label itself is the instruction,
    // so a tap here just moves on once she's read it.
    else showLock();
  }, { once: true });

  continueBtn.addEventListener('click', showLock, { once: true });
}

/* ═══════════ LOCK SCREEN ═══════════ */
/* Dynamic lock screen slideshow cycling through all photos in her sheet (her01.jpg .. her22.jpg) */
const LOCK_PHOTOS = Array.from({ length: 22 }, (_, i) => `photos/her/her${pad(i + 1)}.jpg`);
let lockPhotoIdx = Math.floor(Math.random() * LOCK_PHOTOS.length);
let activeLockPhotoEl = 'A';
let lockSlideshowTimer = null;

function changeLockPhoto() {
  const nextIdx = (lockPhotoIdx + 1) % LOCK_PHOTOS.length;
  lockPhotoIdx = nextIdx;
  const src = LOCK_PHOTOS[nextIdx];
  
  const currentEl = $('#lockPhoto' + activeLockPhotoEl);
  const nextElKey = activeLockPhotoEl === 'A' ? 'B' : 'A';
  const nextEl = $('#lockPhoto' + nextElKey);
  
  if (!nextEl) return;
  const img = new Image();
  img.onload = () => {
    nextEl.style.backgroundImage = `url("${src}")`;
    nextEl.style.opacity = '1';
    if (currentEl) currentEl.style.opacity = '0';
    activeLockPhotoEl = nextElKey;
  };
  img.src = src;
}

function startLockSlideshow() {
  if (!lockSlideshowTimer) {
    lockSlideshowTimer = setInterval(changeLockPhoto, 5000);
  }
}

function stopLockSlideshow() {
  if (lockSlideshowTimer) {
    clearInterval(lockSlideshowTimer);
    lockSlideshowTimer = null;
  }
}

function showLock() {
  $('#boot').classList.add('out');
  const lock = $('#lock');
  
  const initialSrc = LOCK_PHOTOS[lockPhotoIdx];
  const photoA = $('#lockPhotoA');
  if (photoA) {
    const img = new Image();
    img.onload = () => {
      photoA.style.backgroundImage = `url("${initialSrc}")`;
      photoA.style.opacity = '1';
    };
    img.src = initialSrc;
  }
  
  lock.classList.remove('hidden');
  const lockBtn = $('#lockBtn');
  if (lockBtn) lockBtn.onclick = unlock;
  updateLockClock();
  setInterval(updateLockClock, 1000);
  startLockSlideshow();
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

let unlocked = false;
let desktopReady = false;
function unlock() {
  if (unlocked) return;
  unlocked = true;
  stopLockSlideshow();
  $('#lock').classList.add('out');
  $('#desktop').classList.remove('hidden');

  if (!desktopReady) {
    desktopReady = true;
    initDesktop();
    setTimeout(() => {
      toast('welcome to reetOS, Reet 🎀');
      checkBadges();
      checkWelcomeModal();
    }, 1200);
  } else {
    setTimeout(() => toast('welcome back again 🎀'), 900);
  }
}

/* ═══════════ APP REGISTRY ═══════════ */
const APPS = {
  terminal: { name: 'reet.sh',     icon: 'appTerminal', tpl: 'tpl-terminal', w: 520, h: 380, init: initTerminal, desktop: true },
  photos:   { name: 'her albums',  icon: 'appPhotos',   tpl: 'tpl-photos',   w: 480, h: 420, init: initPhotos,   desktop: true },
  videos:   { name: 'reet in motion', icon: 'appVideos',   tpl: 'tpl-videos',   w: 460, h: 460, init: initVideos,   desktop: true },
  letter:   { name: 'letter.txt',  icon: 'appLetter',   tpl: 'tpl-letter',   w: 440, h: 430, init: initLetter,   desktop: true },
  music:    { name: 'reet radio',  icon: 'appMusic',    tpl: 'tpl-music',    w: 320, h: 460, init: initMusic },
  story:    { name: 'how we became us', icon: 'appStory', tpl: 'tpl-story', w: 420, h: 500, init: initStory, desktop: true },
  shayari:  { name: 'shayari',     icon: 'appShayari',  tpl: 'tpl-shayari',  w: 380, h: 440, init: initShayari, desktop: true },
  quiz:     { name: 'reet 101',    icon: 'appQuiz',     tpl: 'tpl-quiz',     w: 380, h: 460, init: initQuiz },
  reply:    { name: 'reet replies',icon: 'appReply',    tpl: 'tpl-reply',    w: 380, h: 440, init: initReply },
  reasons:  { name: 'why reet',    icon: 'appReasons',  tpl: 'tpl-reasons',  w: 360, h: 400, init: initReasons },
  notes:    { name: 'our list',    icon: 'appNotes',    tpl: 'tpl-notes',    w: 380, h: 420, init: initNotes },
  about:    { name: 'about this friendship', icon: 'appAbout', tpl: 'tpl-about', w: 380, h: 440, init: initAbout },
  trash:    { name: 'regrets',     icon: 'appTrash',    tpl: 'tpl-trash',    w: 340, h: 280, init: null, desktop: true },
  mood:     { name: 'mood check',  icon: 'appReply',    tpl: 'tpl-mood',     w: 360, h: 440, init: initMood },
  scratch:  { name: 'scratch card',icon: 'appLetter',   tpl: 'tpl-scratch',  w: 340, h: 420, init: initScratch },
  magic8:   { name: 'magic 8 reet',icon: 'appAbout',    tpl: 'tpl-magic8',   w: 340, h: 460, init: initMagic8 },
  match:    { name: 'memory match',icon: 'appPhotos',   tpl: 'tpl-match',    w: 400, h: 500, init: initMatch },
  slot:     { name: 'compliment 🎰',icon: 'appReasons', tpl: 'tpl-slot',     w: 340, h: 460, init: initSlot },
  vibe:     { name: 'guess the vibe',icon: 'appQuiz',   tpl: 'tpl-vibe',     w: 360, h: 480, init: initVibe },
  snake:    { name: 'reel snake',  icon: 'appVideos',   tpl: 'tpl-snake',    w: 360, h: 500, init: initSnake },
  sticky:   { name: 'care notes 📌', icon: 'appNotes',   tpl: 'tpl-sticky',   w: 420, h: 480, init: initStickyNotes, desktop: true },
  theme:    { name: 'settings ⚙️', icon: 'appSettings', tpl: 'tpl-theme',    w: 380, h: 520, init: initThemeApp, desktop: true },
  quest:    { name: 'reet quest 🏆', icon: 'appStory',  tpl: 'tpl-quest',    w: 380, h: 480, init: initQuestApp, desktop: true },
  ai:       { name: 'reet.ai',     icon: 'appAI',      tpl: 'tpl-ai',       w: 360, h: 480, init: initAI,       desktop: true },
  browser:  { name: 'ReetNet',     icon: 'appBrowser',  tpl: 'tpl-browser', w: 380, h: 520, init: initBrowser,  desktop: true },
  throwback:{ name: 'throwback 📼', icon: 'appThrowback', tpl: 'tpl-throwback', w: 360, h: 420, init: initThrowback, desktop: true },
  promise:  { name: 'seal the promise', icon: 'appPromise', tpl: 'tpl-promise', w: 400, h: 560, init: initPromise, desktop: true },
  secret:   { name: 'a final thing 💌', icon: 'appSecret', tpl: 'tpl-secret', w: 380, h: 460, init: initSecret, desktop: true, hidden: true },
};

/* ═══════════ WINDOW MANAGER ═══════════ */
const openWindows = {};
let zTop = 200;
let cascade = 0;

function openApp(id) {
  const app = APPS[id];
  if (!app) return;
  markAppExplored(id);

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
    <div class="win-grab"></div>
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
  else makeDismissable(win, id);

  openWindows[id] = win;
  focusWin(win);
  markDock(id, true);
  syncHomeState();
  playTone('open');

  if (app.init) app.init(win);
}

function closeWin(id) {
  const win = openWindows[id];
  if (!win) return;
  playTone('close');
  win.dispatchEvent(new CustomEvent('win-closing'));
  // never leave audio/video playing behind a closed window
  win.querySelectorAll('audio, video').forEach(m => { try { m.pause(); } catch (_) {} });
  win.classList.add('closing');
  setTimeout(() => win.remove(), 240);
  delete openWindows[id];
  markDock(id, false);
  syncHomeState();
}

function focusWin(win) {
  zTop++;
  win.style.zIndex = zTop;
  document.querySelectorAll('.win.active-win').forEach(w => w.classList.remove('active-win'));
  win.classList.add('active-win');
}

// Minimize keeps the app running (music keeps playing); the dock restores it.
function minimizeWin(id) {
  const win = openWindows[id];
  if (!win) return;
  win.dataset.min = '1';
  win.style.display = 'none';
  syncHomeState();
  toast('minimized — tap it in the dock to bring it back');
}

function restoreWin(id) {
  const win = openWindows[id];
  if (!win) return;
  delete win.dataset.min;
  win.style.display = '';
  focusWin(win);
  syncHomeState();
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

/* iOS-style dismiss: drag down on the title bar to close the app. */
function makeDismissable(win, id) {
  const bar = win.querySelector('.win-bar');
  if (!bar) return;
  let y0 = 0, dy = 0, dragging = false;

  bar.addEventListener('touchstart', e => {
    if (e.target.closest('.wl')) return;
    dragging = true; y0 = e.touches[0].clientY; dy = 0;
    win.style.transition = 'none';
  }, { passive: true });

  bar.addEventListener('touchmove', e => {
    if (!dragging) return;
    dy = Math.max(0, e.touches[0].clientY - y0);
    win.style.transform = `translateY(${dy}px)`;
  }, { passive: true });

  const end = () => {
    if (!dragging) return;
    dragging = false;
    win.style.transition = 'transform .28s cubic-bezier(.2,.9,.3,1)';
    if (dy > 110) { win.style.transform = 'translateY(100%)'; setTimeout(() => closeWin(id), 200); }
    else win.style.transform = '';
  };
  bar.addEventListener('touchend', end);
  bar.addEventListener('touchcancel', end);
}

/* The home indicator closes the frontmost app, like swiping up on iOS. */
function initHomeIndicator() {
  const bar = $('#homeBar');
  const goHome = () => {
    const open = Object.keys(openWindows);
    if (!open.length) return;
    open.forEach(closeWin);
  };
  bar.addEventListener('click', goHome);

  let y0 = 0;
  bar.addEventListener('touchstart', e => { y0 = e.changedTouches[0].clientY; }, { passive: true });
  bar.addEventListener('touchend', e => {
    if (y0 - e.changedTouches[0].clientY > 24) goHome();
  }, { passive: true });
}

// Home screen recedes behind an open app, and returns when the last one closes.
function syncHomeState() {
  const anyOpen = Object.values(openWindows).some(w => !w.dataset.min);
  $('#desktop').classList.toggle('app-open', anyOpen);
  const home = $('#home');
  if (home) home.classList.toggle('behind', anyOpen);
}

/* ═══════════ DESKTOP INIT ═══════════ */
// On phones the dock behaves like iOS: only these four are pinned,
// everything else lives on the home screen grid.
const PINNED = ['letter', 'photos', 'music', 'terminal'];

/* Grouping the ~27 apps into folders (iOS/Android-style) so the home
   screen and desktop don't turn into one giant flat grid. PINNED apps
   stay as standalone favorites; everything else lives in a folder.
   The dock stays flat/scrollable — that's how real docks work too. */
const FOLDERS = [
  { id: 'games',    name: 'games',    icon: '🎮', apps: ['quiz', 'magic8', 'match', 'slot', 'vibe', 'snake', 'scratch'] },
  { id: 'memories', name: 'memories', icon: '📸', apps: ['videos', 'story', 'throwback', 'shayari', 'notes', 'reasons', 'promise'] },
  { id: 'connect',  name: 'connect',  icon: '💬', apps: ['ai', 'browser', 'reply', 'mood'] },
  { id: 'system',   name: 'system',   icon: '⚙️', apps: ['theme', 'quest', 'sticky', 'trash', 'about'] },
];

function makeAppIcon(id, app, kind) {
  const el = document.createElement('div');
  el.className = kind;
  el.dataset.app = id;
  const imgClass = kind === 'dock-item' ? 'dock-img' : kind === 'hi-app' ? 'hi-img' : 'dicon-img';
  const labelClass = kind === 'dock-item' ? 'dock-tip' : kind === 'hi-app' ? 'hi-label' : 'dicon-label';
  el.innerHTML = `<div class="${imgClass}" data-icon="${app.icon}"></div>
    <div class="${labelClass}">${app.name}</div>${kind === 'dock-item' ? '<div class="dock-dot"></div>' : ''}`;
  return el;
}

function makeFolderIcon(folder, kind, appsInFolder) {
  const el = document.createElement('div');
  el.className = kind + ' folder-icon';
  el.dataset.folder = folder.id;
  const imgClass = kind === 'hi-app' ? 'hi-img' : 'dicon-img';
  const labelClass = kind === 'hi-app' ? 'hi-label' : 'dicon-label';
  const preview = appsInFolder.slice(0, 4).map(a => `<span data-icon="${a.icon}"></span>`).join('');
  el.innerHTML = `<div class="${imgClass} folder-preview">${preview}</div>
    <div class="${labelClass}">${folder.icon} ${folder.name}</div>`;
  if (kind === 'hi-app') {
    el.addEventListener('click', () => openFolder(folder));
  } else {
    el.addEventListener('dblclick', () => openFolder(folder));
    el.addEventListener('click', () => {
      el.parentElement.querySelectorAll('.dicon').forEach(x => x.classList.remove('selected'));
      el.classList.add('selected');
    });
  }
  return el;
}

function openFolder(folder) {
  const overlay = $('#folderOverlay');
  const title = $('#folderTitle');
  const grid = $('#folderGrid');
  title.textContent = `${folder.icon} ${folder.name}`;
  grid.innerHTML = '';
  folder.apps.forEach(id => {
    const app = APPS[id];
    if (!app) return;
    const item = document.createElement('div');
    item.className = 'folder-app';
    item.innerHTML = `<div class="folder-app-img" data-icon="${app.icon}"></div><div class="folder-app-label">${app.name}</div>`;
    item.addEventListener('click', () => {
      overlay.classList.add('hidden');
      openApp(id);
    });
    grid.appendChild(item);
  });
  renderIcons(grid);
  overlay.classList.remove('hidden');
}

function initFolderOverlay() {
  const overlay = $('#folderOverlay');
  if (!overlay) return;
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.add('hidden');
  });
  $('#folderCloseBtn').addEventListener('click', () => overlay.classList.add('hidden'));
}

function initDesktop() {
  const dock = $('#dock');
  const dIcons = $('#desktopIcons');
  const homeGrid = $('#homeGrid');
  const folderedIds = new Set(FOLDERS.flatMap(f => f.apps));

  // dock: flat, scrollable — every app, unfoldered (matches a real OS dock/taskbar)
  Object.entries(APPS).forEach(([id, app]) => {
    if (app.hidden) return;
    const item = makeAppIcon(id, app, 'dock-item');
    item.classList.toggle('not-pinned', !PINNED.includes(id));
    item.addEventListener('click', () => openApp(id));
    dock.appendChild(item);
  });

  // home screen (mobile) + desktop icons: pinned favorites + folders
  PINNED.forEach(id => {
    const app = APPS[id];
    if (!app) return;
    const hi = makeAppIcon(id, app, 'hi-app');
    hi.addEventListener('click', () => openApp(id));
    homeGrid.appendChild(hi);
    if (app.desktop) {
      const di = makeAppIcon(id, app, 'dicon');
      di.addEventListener('dblclick', () => openApp(id));
      di.addEventListener('click', () => {
        dIcons.querySelectorAll('.dicon').forEach(x => x.classList.remove('selected'));
        di.classList.add('selected');
      });
      dIcons.appendChild(di);
    }
  });

  FOLDERS.forEach(folder => {
    const homeApps = folder.apps.map(id => APPS[id]).filter(Boolean);
    if (homeApps.length) homeGrid.appendChild(makeFolderIcon(folder, 'hi-app', homeApps));

    const deskApps = folder.apps.map(id => APPS[id]).filter(a => a && a.desktop);
    if (deskApps.length) dIcons.appendChild(makeFolderIcon(folder, 'dicon', deskApps));
  });

  // any app that's neither pinned nor in a folder (shouldn't happen, but stay safe)
  Object.entries(APPS).forEach(([id, app]) => {
    if (app.hidden || PINNED.includes(id) || folderedIds.has(id)) return;
    const hi = makeAppIcon(id, app, 'hi-app');
    hi.addEventListener('click', () => openApp(id));
    homeGrid.appendChild(hi);
    if (app.desktop) {
      const di = makeAppIcon(id, app, 'dicon');
      di.addEventListener('dblclick', () => openApp(id));
      dIcons.appendChild(di);
    }
  });

  renderIcons($('#desktop'));
  initMenuBar();
  initNotifCenter();
  initFolderOverlay();
  restoreWallpaper();
  restoreTheme();
  if (isSecretUnlocked()) revealSecretIcon(false);
  initTimeVibe();
  initSparkleTrail();

  const themeBtn = $('#themeBtn');
  if (themeBtn) themeBtn.addEventListener('click', () => openApp('theme'));

  if (!isMobile()) { initWidget(); initStickyWidget(); }   // desktop widgets
  else initHomeIndicator();
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
    { l: 'About Reet', do: () => openApp('about') },
    { l: 'Reet Radio',          do: () => openApp('music') },
    { l: 'Change Wallpaper', k: '⌥W', do: cycleWallpaper },
    { l: 'Change Theme',     k: '⌥T', do: () => openApp('theme') },
    { sep: true },
    { l: 'Send Love',   k: '♥', do: () => { heartRain(); } },
    { l: 'Lock Screen', k: '⇧⌘Q', do: relock },
    { l: 'Restart reetOS',        do: () => location.reload() },
  ],
  file: [
    { l: 'The Letter',    do: () => openApp('letter') },
    { l: 'Her Albums',    do: () => openApp('photos') },
    { l: 'Reet Radio',  do: () => openApp('music') },
    { l: 'reet.sh',  do: () => openApp('terminal') },
    { sep: true },
    { l: 'Close All Windows', k: '⌘W', do: () => {
        const n = closeAllWindows();
        toast(n ? `closed ${n} window${n > 1 ? 's' : ''}` : 'nothing was open');
      } },
  ],
  feelings: [
    { l: 'Our Story',         do: () => openApp('story') },
    { l: 'Write Back To Him', do: () => openApp('reply') },
    { l: 'Read Me a Shayari', do: () => openApp('shayari') },
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
    { l: 'Our List', do: () => openApp('notes') },
    { l: 'Why Reet',           do: () => openApp('reasons') },
  ],
  help: [
    { l: 'Reet\'s Exploration Quest 🏆', do: () => openApp('quest') },
    { l: 'Start Welcome Tour ✨',        do: showWelcomeModal },
    { sep: true },
    { l: 'What Can reet.sh Do?', do: () => { openApp('terminal'); setTimeout(() => runTerminal('help'), 260); } },
    { l: 'What Is reetOS?',     do: () => openApp('about') },
    { sep: true },
    { l: 'Who Made This?', do: () => toast('someone who thinks the world of you 🤍') },
  ],
};

const COMPLIMENTS = [
  "to me, you're not replaceable by anyone — not even a little",
  'my world genuinely runs better with you in it',
  "I notice you — the small things too, not just the big ones",
  'you make ordinary days feel like they mattered, just by being in them',
  'your laugh is my favourite sound, and I will not be taking questions on this',
  "you have never once been too much for me — not once",
  "however busy my world gets, there's always room in it for you",
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

/* ═══════════ EASTER EGG: KONAMI CODE ═══════════ */
// Up Up Down Down Left Right Left Right B A — the classic. Works anywhere on the desktop.
const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiProgress = 0;
document.addEventListener('keydown', e => {
  const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
  konamiProgress = (key === KONAMI[konamiProgress]) ? konamiProgress + 1 : (key === KONAMI[0] ? 1 : 0);
  if (konamiProgress === KONAMI.length) {
    konamiProgress = 0;
    heartRain();
    toast('🎮 secret code found — this friendship has cheat codes enabled 💕');
    markEggFound();
  }
});

function relock() {
  closeAllWindows();
  const lock = $('#lock');
  lock.classList.remove('hidden', 'out');
  $('#desktop').classList.add('hidden');
  unlocked = false;
  cascade = 0;
  startLockSlideshow();
}

function startClock() {
  const el = $('#menuClock');
  const tick = () => {
    const d = new Date();
    el.textContent = `${d.toLocaleDateString('en-US', { weekday: 'short' })} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    const left = document.querySelector('.menubar-left');
    if (left) left.dataset.time = `${pad(d.getHours())}:${pad(d.getMinutes())}`;
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
  { t: "Happy Friendship Day. I built you an entire operating system, because a card felt a little insufficient." },
  { t: "Here's the thing about you — you make people feel like the version of themselves they were hoping to be. You listen properly, the way most people don't. You remember the small stuff nobody else bothered to keep. You show up without being asked, and you have never once made it feel like a favour." },
  { t: "Thank you for the late night messages. For laughing at jokes that genuinely were not funny. For being the person I want to tell things to first — before I've worked out how I feel about them, before they're even a story worth telling." },
  { t: "Friendship gets spoken about like it's the smaller thing. It isn't. Nobody signs anything. You just choose it, quietly, over and over, with nothing owed either way. That's the part that gets me." },
  { t: "Every app on this desktop is something I think about when I think about you. The photos worth keeping. The songs that sound like specific evenings. A list of things we still haven't done — add to it, it saves." },
  { t: "Poke around. There's more hidden in the terminal than it lets on." },
  { c: 'sig', t: 'always your person ✦' },
];

function initLetter(win) {
  const body = win.querySelector('#letterBody');
  const hint = win.querySelector('#letterHint');
  body.innerHTML = '';

  let bi = 0;
  let timer = null;
  let finished = false;

  function makeEl(block) {
    const el = document.createElement(block.c ? 'span' : 'p');
    if (block.c) el.className = block.c;
    else el.style.marginBottom = '.9rem';
    return el;
  }

  // Render everything at once and stop typing — for anyone who'd rather just read.
  function finish() {
    if (finished) return;
    finished = true;
    clearTimeout(timer);
    body.innerHTML = '';
    LETTER.forEach(block => {
      const el = makeEl(block);
      el.textContent = block.t;
      body.appendChild(el);
    });
    if (hint) hint.remove();
  }

  function nextBlock() {
    if (bi >= LETTER.length) { finished = true; if (hint) hint.remove(); return; }
    const block = LETTER[bi];
    const el = makeEl(block);
    body.appendChild(el);

    const caret = document.createElement('span');
    caret.className = 'caret';
    caret.innerHTML = '&nbsp;';

    let ci = 0;
    const speed = block.c ? 44 : 14;
    (function typeChar() {
      if (finished) return;
      if (ci <= block.t.length) {
        el.textContent = block.t.slice(0, ci);
        el.appendChild(caret);
        ci++;
        body.parentElement.scrollTop = body.parentElement.scrollHeight;
        timer = setTimeout(typeChar, speed);
      } else {
        caret.remove();
        bi++;
        timer = setTimeout(nextBlock, 290);
      }
    })();
  }

  win.querySelector('.letter-app').addEventListener('click', finish);
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
// Path stays inside this folder so the site can be deployed with
// "Friendship Day" as the project root (Vercel, Pages, anything static).
const OURS = { name: 'Falak Tak', key: null, tracks: [{ t: 'Falak Tak', f: null, src: 'assets/falak_tak.mp3' }] };
const ALL_STATIONS = [OURS, ...(typeof STATIONS !== 'undefined' ? STATIONS : [])];

const MUSIC_BASE = typeof MUSIC_BASE_URL !== 'undefined' ? MUSIC_BASE_URL : '';
const trackSrc = (station, tr) =>
  tr.src ? tr.src : `${MUSIC_BASE}assets/music/${encodeURIComponent(station.key)}/${encodeURIComponent(tr.f)}`;

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
  // The station MP3s are gitignored (2GB of commercial music), so a deployed
  // copy won't have them unless MUSIC_BASE_URL points at an external host.
  // Probe one file per station rather than all 241, and label the ones
  // whose audio isn't present wherever this is being served.
  ALL_STATIONS.forEach(st => {
    const row = document.createElement('div');
    row.className = 'mu-station';
    row.innerHTML = `<span>${st.name}</span><span class="n">${st.tracks.length}</span>`;
    row.addEventListener('click', () => showStation(st));
    stationsEl.appendChild(row);
    st._row = row;

    if (!MUSIC_BASE && location.protocol !== 'file:') {
      fetch(trackSrc(st, st.tracks[0]), { method: 'HEAD' })
        .then(r => { if (!r.ok) flagStation(st); })
        .catch(() => flagStation(st));
    }
  });

  function flagStation(st) {
    st.unavailable = true;
    st._row.classList.add('unavailable');
    st._row.querySelector('.n').textContent = 'no audio';
  }

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
    if (st.unavailable) {
      const n = document.createElement('div');
      n.className = 'mu-unavail';
      n.textContent = 'these tracks aren\'t on this copy of the site — they play from the local build';
      listEl.prepend(n);
    }
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
    artistEl.textContent = station.name;
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

/* ═══════════ APP: OUR STORY ═══════════ */
/* Counts run from today, so they stay true without anyone editing them. */
const STORY = [
  { d: [2011, 6],      approx: true,  what: 'The first time I ever saw you',
    note: 'You had no idea. Neither did I, really.' },
  { d: [2013, 4],      approx: true,  what: 'We ended up in the same class',
    note: 'Two years later, the room finally got smaller.' },
  { d: [2013, 11],     approx: true,  what: 'We spoke for the first time',
    note: 'Late, considering.' },
  { d: [2014, 5],      approx: true,  what: 'Properly friends now',
    note: 'The kind you stop introducing and just bring along.' },
  { d: [2015, 6],      approx: true,  what: 'The bond got real',
    note: 'This is the year it stopped being casual.' },
  { d: [2019, 6],      approx: true,  what: 'Reconnected',
    note: 'Some things come back around on their own.' },
  { d: [2020, 10, 24], break: true,   what: 'Everything fell apart',
    note: 'No version of this one is easy to write.' },
  { d: [2020, 11, 20], break: true,   what: 'The last message',
    note: 'Neither of us knew it was the last one.' },
  { gap: [[2020, 10, 24], [2024, 11, 18]], label: 'days of not speaking' },
  { d: [2024, 11, 18], bloom: true,   what: 'A Haldi ceremony, four years later',
    note: "Friend's sister's wedding. We saw each other again." },
  { d: [2024, 11, 24], bloom: true,   what: 'The Baraat and the wedding day',
    note: 'Six days later it already felt easier.' },
  { d: [2025, 3, 3],   now: true,     what: 'Back — and better than it ever was',
    note: 'Since this day: talking, sharing, laughing. Not one day missed.' },
];

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const dayDiff = (a, b) => Math.round((b - a) / 86400000);
const fmtNum = n => n.toLocaleString('en-IN');

function initStory(win) {
  const rail = win.querySelector('#stRail');
  const today = new Date(); today.setHours(0, 0, 0, 0);

  const toDate = d => new Date(d[0], d[1] - 1, d[2] || 1);

  win.querySelector('#stTotal').textContent = fmtNum(dayDiff(toDate(STORY[0].d), today));
  const streak = dayDiff(new Date(2025, 2, 3), today);
  win.querySelector('#stStreak').textContent = `${fmtNum(streak)} days of talking every single day, none missed`;

  STORY.forEach(item => {
    if (item.gap) {
      const [a, b] = item.gap;
      const g = document.createElement('div');
      g.className = 'st-gap';
      g.innerHTML = `<div class="st-gap-num"></div><div class="st-gap-label"></div>`;
      const n = dayDiff(toDate(a), toDate(b));
      g.querySelector('.st-gap-num').textContent = fmtNum(n);
      g.querySelector('.st-gap-label').textContent =
        `${item.label} · about ${(n / 365.25).toFixed(1)} years`;
      rail.appendChild(g);
      return;
    }

    const date = toDate(item.d);
    const when = item.approx
      ? `${MONTHS[item.d[1] - 1]} ${item.d[0]}`
      : `${item.d[2]} ${MONTHS[item.d[1] - 1]} ${item.d[0]}`;

    const node = document.createElement('div');
    node.className = 'st-node' +
      (item.break ? ' break' : '') + (item.bloom ? ' bloom' : '') + (item.now ? ' now' : '');
    node.innerHTML = `<div class="st-when"></div><div class="st-what"></div>
      <div class="st-note"></div><div class="st-ago"></div>`;
    node.querySelector('.st-when').textContent = when;
    node.querySelector('.st-what').textContent = item.what;
    node.querySelector('.st-note').textContent = item.note;
    node.querySelector('.st-ago').textContent =
      `${fmtNum(dayDiff(date, today))} days ago${item.approx ? ' (about)' : ''}`;
    rail.appendChild(node);
  });
}

/* ═══════════ APP: QUIZ ═══════════ */
const QUIZ = [
  { q: 'Jab mere paas koi super juicy gossip hoti hai, toh pehla step kya hota hai?', o: ['Formal email likhna', 'Bina kisi context ke direct aag lagana', '10 din baad batana', 'Secret rakh ke bhool jana'], a: 1,
    n: 'No preamble, no hello. Seedha main point pe aao!' },
  { q: 'Jab tum koi photo ya status share karti ho, toh mera pehla reaction kya hota hai?', o: ['Chupchap delete kar dena', 'Khushi se memory ki tarah save kar lena (because you look so gorgeous!)', 'Blackmail karne ki dhamki dena', 'Ignore kar dena'], a: 1,
    n: 'Zero blackmailing — tumhaari har picture hamesha gorgeous hoti hai aur sweet memory ban jati hai! ✨' },
  { q: 'Humari daily conversation aur connection ka sabse favourite medium kya hai?', o: ['Ghanto lambi formal calls', 'Texting and endless Instagram reels share karna', 'Formal letters', 'Walkie-talkie pe baat karna'], a: 1,
    n: 'Calls tabhi jab super urgent ho, baki toh texts aur reels ki non-stop streaming!' },
  { q: 'Agar tumhara din thoda kharab ja raha ho, toh kya karna allowed hai?', o: ['Akele chup chaap bethna', 'Mujhe poora rant sunana aur mood thik karwana', 'Faltu tension lena', 'Khana khana bhool jana'], a: 1,
    n: 'Hamesha sunne ke liye taiyaar hoon, stress bilkul nahi lene ka!' },
  { q: 'Kon tumhe bina kisi reason ke pareshan aur irritate karne ka haq rakhta hai?', o: ['Koi bhi nahi', 'Sirf tumhari best friend (yani main!)', 'Neighbors', 'Social media strangers'], a: 1,
    n: 'Yeh VIP access sirf mere paas reserved hai!' },
  { q: 'Hum kitne bhi busy ho jayein ya dino baad baat karein, kya change hota hai?', o: ['Hum strangers ban jaate hain', 'Kuch bhi nahi, wahi same pagalpan continue hota hai', 'Formal baatein hone lagti hain', 'Ek doosre ko bhool jaate hain'], a: 1,
    n: 'Zero distance, zero gap. Wahi se shuru jahan chhoda tha!' },
  { q: 'Instagram pe reels share karne ka humara unspoken bestie rule kya hai?', o: ['Relatable reels spam karna jo relatable lage without thinking hehe', 'Sirf educational videos bhejna', 'Mahine mein ek reel bhejna', 'Zero reels'], a: 0,
    n: 'Reels feed is basically our unofficial chat room!' },
  { q: 'Jab tum koi ajeeb decision lene lagti ho, toh mera duty kya hota hai?', o: ['Taali bajana', 'Sahi raasta dikhana aur hamesha tumhare saath khade rehna', 'Door se dekh ke hasna', 'Ignore karna'], a: 1,
    n: 'Full support aur saath hamesha milega!' },
  { q: 'Humari friendship ki expiry date kab tak ki hai?', o: ['Agley mahine tak', 'Exam khatam hone tak', 'Lifetime & beyond — non-negotiable!', 'Sirf 1 saal'], a: 2,
    n: 'Koi exit door nahi hai, ab jhelna hi padega lifetime!' },
  { q: 'Is poore quiz aur app ka sabse bada secret truth kya hai?', o: ['Yeh bas ek random test hai', 'You are extremely special, loved and appreciated, hamesha! 🎀', 'Yeh bas ek code project hai', 'Kuch nahi'], a: 1,
    n: 'Hamesha yaad rakhna, you mean the absolute world! 🎀' },
];

function initQuiz(win) {
  const intro = win.querySelector('#qzIntro');
  const play = win.querySelector('#qzPlay');
  const done = win.querySelector('#qzDone');
  const qEl = win.querySelector('#qzQ');
  const optsEl = win.querySelector('#qzOpts');
  const noteEl = win.querySelector('#qzNote');
  const stepEl = win.querySelector('#qzStep');
  const fill = win.querySelector('#qzBarFill');

  let i = 0, score = 0, locked = false;

  function show() {
    locked = false;
    const item = QUIZ[i];
    stepEl.textContent = `question ${i + 1} of ${QUIZ.length}`;
    fill.style.width = ((i) / QUIZ.length * 100) + '%';
    qEl.textContent = item.q;
    noteEl.textContent = '';
    optsEl.innerHTML = '';
    item.o.forEach((opt, n) => {
      const b = document.createElement('button');
      b.className = 'qz-opt';
      b.textContent = opt;
      b.addEventListener('click', () => choose(n, b));
      optsEl.appendChild(b);
    });
  }

  function choose(n, btn) {
    if (locked) return;
    locked = true;
    const item = QUIZ[i];
    const buttons = [...optsEl.children];
    buttons.forEach((b, k) => {
      if (k === item.a) b.classList.add('right');
      else if (k === n) b.classList.add('wrong');
      else b.classList.add('dim');
    });
    if (n === item.a) score++;
    noteEl.textContent = item.n;
    fill.style.width = ((i + 1) / QUIZ.length * 100) + '%';
    setTimeout(() => {
      i++;
      if (i < QUIZ.length) show(); else finish();
    }, 1900);
  }

  function finish() {
    play.classList.add('hidden');
    done.classList.remove('hidden');
    win.querySelector('#qzScore').textContent = `${score} / ${QUIZ.length}`;
    const v = score === QUIZ.length ? '100% Certified Bestie! Tu toh bilkul topper nikli 🎀'
      : score >= 8 ? 'Almost 100%! Officially certified bestie status approved 🎀'
      : score >= 6 ? 'Solid score! Poore marks for being awesome.'
      : 'Score jo bhi ho, 100% full marks for just being Reet! 🎀';
    win.querySelector('#qzVerdict').textContent = v;
  }

  win.querySelector('#qzStart').addEventListener('click', () => {
    intro.classList.add('hidden'); play.classList.remove('hidden'); show();
  });
  win.querySelector('#qzAgain').addEventListener('click', () => {
    i = 0; score = 0; done.classList.add('hidden'); play.classList.remove('hidden'); show();
  });
}

/* ═══════════ APP: WRITE BACK ═══════════ */
// Put your number here in full international form, digits only, e.g. '918986022102'.
const REPLY_WHATSAPP = '918986022102';
const REPLY_KEY = 'reetos-reply';

function initReply(win) {
  const ta = win.querySelector('#rpText');
  const count = win.querySelector('#rpCount');
  const saved = win.querySelector('#rpSaved');
  const hint = win.querySelector('#rpHint');

  try { ta.value = localStorage.getItem(REPLY_KEY) || ''; } catch (_) {}

  const sync = () => {
    count.textContent = `${ta.value.length} characters`;
    try { localStorage.setItem(REPLY_KEY, ta.value); saved.textContent = 'saved'; } catch (_) {}
    setTimeout(() => { saved.textContent = ''; }, 1200);
  };
  ta.addEventListener('input', sync);
  count.textContent = `${ta.value.length} characters`;

  hint.textContent = REPLY_WHATSAPP
    ? 'opens WhatsApp with your message ready to send'
    : 'opens your share sheet — or use copy and paste it anywhere';

  win.querySelector('#rpSend').addEventListener('click', () => {
    const text = ta.value.trim();
    if (!text) { toast('write something first 🤍'); ta.focus(); return; }
    const body = `From Reet, on Friendship Day:\n\n${text}`;

    if (REPLY_WHATSAPP) {
      window.open(`https://wa.me/${REPLY_WHATSAPP}?text=${encodeURIComponent(body)}`, '_blank');
      return;
    }
    if (navigator.share) {
      navigator.share({ text: body }).catch(() => {});
      return;
    }
    if (navigator.clipboard) {
      navigator.clipboard.writeText(body)
        .then(() => toast('copied — paste it wherever you like'))
        .catch(() => toast('could not copy'));
    } else toast('select the text and copy it manually');
  });

  win.querySelector('#rpCopy').addEventListener('click', () => {
    if (!ta.value.trim()) { toast('nothing to copy yet'); return; }
    if (navigator.clipboard) {
      navigator.clipboard.writeText(ta.value)
        .then(() => toast('copied 🤍')).catch(() => toast('could not copy'));
    } else toast('could not copy');
  });
}

/* ═══════════ APP: SHAYARI ═══════════ */
/* Written for this site — not quoted from anywhere. */
const SHAYARI = {
  hi: [
    ['कुछ रिश्ते ख़ून से नहीं, वक़्त से बनते हैं —', 'और तुम उसी वक़्त का सबसे हसीन हिस्सा हो।'],
    ['हर बात कहने को अल्फ़ाज़ नहीं चाहिए,', 'कुछ लोग ख़ामोशी भी पढ़ लेते हैं — तुम वही हो।'],
    ['तुमसे मिलने के बाद ये समझ आया,', 'कि घर सिर्फ़ जगह नहीं, कोई इंसान भी होता है।'],
    ['भीड़ में जब भी मुड़ के देखा,', 'एक चेहरा हमेशा वहीं मिला — तुम्हारा।'],
    ['शिकायतें भी हैं, और शुक्रिया भी,', 'मगर जो भी है, तुम्हारे बिना अधूरा है।'],
    ['दोस्ती वो नहीं जो हँसी में साथ हो,', 'दोस्ती वो है जो ख़ामोशी में भी पास हो।'],
    ['हमने माँगा भी नहीं, फिर भी मिल गए तुम —', 'शायद कुछ दुआएँ नाम लिखवा कर आती हैं।'],
    ['वक़्त बदला, शहर बदले, लोग भी बदले,', 'एक तुम हो जो हर बार वैसी ही निकलीं।'],
    ['तारीफ़ में क्या लिखूँ तुम्हारे लिए,', 'जो भी लिखा, कम ही लगा — हर बार।'],
    ['ज़िंदगी ने बहुत कुछ छीना है मुझसे,', 'पर तुम्हें देकर सारा हिसाब बराबर कर दिया।'],
  ],
  en: [
    ['Some people are not chapters in your story.', 'They are the handwriting.'],
    ['You never once asked me to be easier to love.', 'That is the whole gift.'],
    ['I have a hundred people to laugh with,', 'and exactly one I can be quiet with.'],
    ['If I ever have to explain you to someone,', "I will just say: she stayed."],
    ['Friendship is the only love', 'that never asked me to prove it.'],
    ['We are not the same person.', 'We are just never lost in the same room.'],
    ['Everyone gets a few people who feel like home.', 'I got lucky on the first try.'],
    ['You remember the version of me', 'I was too embarrassed to keep. Thank you for that.'],
    ['Distance is a rumour', 'people like us never believed.'],
    ['You are the only plot twist', 'I saw coming and still cried about.'],
  ],
};

function initShayari(win) {
  const card = win.querySelector('#shCard');
  const count = win.querySelector('#shCount');
  const nextBtn = win.querySelector('#shNext');
  const copyBtn = win.querySelector('#shCopy');

  let lang = 'hi';
  let pool = [];
  let cur = null;
  const seen = { hi: new Set(), en: new Set() };

  function render() {
    if (!pool.length) pool = SHAYARI[lang].map((_, i) => i).sort(() => Math.random() - 0.5);
    const i = pool.pop();
    cur = SHAYARI[lang][i];
    seen[lang].add(i);

    card.classList.remove('pop');
    void card.offsetWidth;
    card.className = 'sh-card ' + lang;
    card.innerHTML = cur.map(l => '<span class="sh-line"></span>').join('') +
      '<div class="sh-sig">— for you, always</div>';
    card.querySelectorAll('.sh-line').forEach((el, n) => { el.textContent = cur[n]; });
    card.classList.add('pop');

    count.textContent = `${seen[lang].size} of ${SHAYARI[lang].length} ${lang === 'hi' ? 'शायरी' : 'read'}`;
  }

  win.querySelectorAll('.sh-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      if (tab.dataset.lang === lang) return;
      win.querySelectorAll('.sh-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      lang = tab.dataset.lang;
      pool = [];
      render();
    });
  });

  nextBtn.addEventListener('click', render);
  card.addEventListener('click', render);

  copyBtn.addEventListener('click', () => {
    const text = cur.join('\n');
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
        .then(() => toast('copied — go send it to someone'))
        .catch(() => toast('could not copy'));
    } else toast('could not copy');
  });

  render();
}

/* ═══════════ DESKTOP WIDGET ═══════════ */
function initWidget() {
  const wg = document.createElement('div');
  wg.className = 'widget';
  wg.innerHTML = `
    <div class="wg-head"><span>aaj ki baat</span><span data-icon="sparkle"></span></div>
    <div class="wg-body" id="wgBody"></div>
    <div class="wg-foot">tap for another</div>`;
  $('#desktop').appendChild(wg);
  renderIcons(wg);

  const body = wg.querySelector('#wgBody');
  let lang = 'hi';

  function shuffleIn() {
    const list = SHAYARI[lang];
    const lines = list[Math.floor(Math.random() * list.length)];
    body.className = 'wg-body' + (lang === 'en' ? ' en' : '');
    body.innerHTML = '';
    lines.forEach(l => {
      const s = document.createElement('span');
      s.className = 'sh-line';
      s.textContent = l;
      body.appendChild(s);
    });
    wg.classList.remove('flip');
    void wg.offsetWidth;
    wg.classList.add('flip');
    lang = lang === 'hi' ? 'en' : 'hi';   // alternate languages
  }

  wg.addEventListener('click', shuffleIn);
  shuffleIn();
  return wg;
}

/* ═══════════ DESKTOP STICKY NOTE WIDGET ═══════════ */
const STICKY_NOTES = [
  { t: "Don't forget to take care of yourself today 🌸.", c: "st-pink" },
  { t: "Be Hydrated and Eat food on time 🍲💧.", c: "st-yellow" },
  { t: "Give hugs and kisses to Ashvik & Atharv 👶💕", c: "st-peach" },
  { t: "Love and Treat Yourself More ✨", c: "st-lavender" },
  { t: "Things will be alright , More Beautiful things on your way 🌈.", c: "st-blue" },
  { t: "Take deep breaths — you're doing better than you think 🌿.", c: "st-mint" },
  { t: "Remember how loved, valued & appreciated you are 🤍.", c: "st-pink" },
  { t: "Smile! You look absolutely gorgeous today 🎀.", c: "st-yellow" },
  { t: "Never shrink yourself to make others comfortable ✨.", c: "st-lavender" },
  { t: "Chai break time? Take 5 mins just for yourself ☕.", c: "st-peach" },
  { t: "Don't stress over what you can't control today 🌸.", c: "st-blue" },
  { t: "You've survived 100% of your tough days — champion status 🌟.", c: "st-mint" },
];

function initStickyWidget() {
  const st = document.createElement('div');
  st.className = 'sticky-widget';
  st.innerHTML = `
    <div class="st-w-body" id="stWBody"></div>
    <div class="st-w-foot">next →</div>`;
  $('#desktop').appendChild(st);

  const body = st.querySelector('#stWBody');
  let idx = 0;

  function nextNote() {
    const note = STICKY_NOTES[idx % STICKY_NOTES.length];
    st.className = `sticky-widget ${note.c}`;
    body.textContent = note.t;
    st.classList.remove('pop');
    void st.offsetWidth;
    st.classList.add('pop');
    idx++;
  }

  st.addEventListener('click', nextNote);
  nextNote();
  return st;
}

function initStickyNotes(win) {
  const grid = win.querySelector('#stGrid');
  grid.innerHTML = '';
  STICKY_NOTES.forEach((note, i) => {
    const card = document.createElement('div');
    card.className = `st-card ${note.c}`;
    card.style.animationDelay = (i * 0.06) + 's';
    card.innerHTML = `<div class="st-card-txt">${note.t}</div>`;
    card.addEventListener('click', () => {
      toast('noted 🤍');
    });
    grid.appendChild(card);
  });
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
      '  shayari [hi|en]   a couplet, written for you',
      '  story             every date that mattered',
      '  quiz              how well do you know us?',
      '  reply             write something back',
      '  cat letter.txt    read the letter',
      '  play              open the playlist',
      '  songs             list every track',
      '  ls                list what\'s on this machine',
      '  neofetch          system specs',
      '  friendship -s     current status report',
      '  hug               it does what you think',
      '  weather           today\'s forecast',
      '  fortune           a random one-liner',
      '  ping              check if this friendship is responsive',
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
      const joined = args.join(' ');
      if (joined === 'love') {
        print('[sudo] password for reet: ********', 'dim');
        print('permission granted. you never needed to ask.', 'big');
        heartRain();
      } else if (joined === 'rm -rf /' || joined === 'rm -rf /*') {
        print('[sudo] password for reet: ********', 'dim');
        print('nice try. this friendship has no uninstall option.', 'err');
      } else if (!args.length) print('sudo: a command is required', 'err');
      else print(`sudo: ${args[0]}: permission denied (nice try)`, 'err');
    },

    weather: () => printAll([
      'fetching forecast…',
      '  today:     100% chance of you being kind of a big deal',
      '  tonight:   scattered good vibes, clearing up nicely',
      '  outlook:   consistently better than the actual weather app',
    ], 'lav'),

    ping: (args) => {
      const target = args[0] || 'reet';
      printAll([
        `PING ${target}: 4 packets transmitted, 4 received, 0% loss`,
        `  time=0ms — you're never actually far`,
      ], 'lav');
    },

    fortune: () => {
      const fortunes = [
        'a good WiFi signal and an even better friend — you have both.',
        'plot twist: you were the main character the whole time.',
        'today\'s forecast: minor chaos, major main-character energy.',
        'reminder: you are someone\'s favourite notification.',
        'error 404: reasons to doubt yourself not found.',
        'warning: this level of likeable should require a permit.',
      ];
      print(fortunes[Math.floor(Math.random() * fortunes.length)], 'pink');
    },

    shayari: (args) => {
      const l = args[0] === 'en' ? 'en' : 'hi';
      const s = SHAYARI[l][Math.floor(Math.random() * SHAYARI[l].length)];
      print('');
      s.forEach(line => print('   ' + line, 'pink'));
      print('   — for you, always', 'dim');
      print('');
      print('   (shayari en  ·  shayari hi  ·  or open the app)', 'dim');
    },
    story: () => {
      const today = new Date(); today.setHours(0, 0, 0, 0);
      const total = dayDiff(new Date(2011, 5, 1), today);
      const streak = dayDiff(new Date(2025, 2, 3), today);
      printAll([
        `${fmtNum(total)} days since I first saw you.`,
        `${fmtNum(1486)} of those we did not speak at all.`,
        `${fmtNum(streak)} days of talking every single day — none missed.`,
      ], 'pink');
      print('opening the full timeline …', 'dim');
      openApp('story');
    },
    quiz: () => { print('ten questions. good luck.', 'dim'); openApp('quiz'); },
    reply: () => { print('the floor is yours …', 'dim'); openApp('reply'); },
    wallpaper: () => { cycleWallpaper(); print('wallpaper changed.', 'pink'); },
    date: () => print(new Date().toString(), 'lav'),
    echo: (args) => print(args.join(' ')),
    clear: () => { out.innerHTML = ''; },

    shutdown: () => print('shutdown: refused. this one stays on forever.', 'err'),
    exit: () => print('exit: you can close the window, but you\'re stuck with me.', 'err'),
    rm: () => print('rm: operation not permitted on protected memories.', 'err'),
    thanks: () => print('anytime. genuinely.', 'pink'),
    sorry: () => print('nothing to apologise for. never has been.', 'pink'),

    /* hidden — not listed in "help" on purpose */
    konami: () => { print('achievement unlocked: found a secret without the cheat code.', 'big'); heartRain(); markEggFound(); },
    'iam': (args) => {
      if (args.join(' ').toLowerCase() === 'reet') { print('confirmed. system already knew.', 'big'); heartRain(); markEggFound(); }
      else print('identity not recognized — but everyone gets a hug anyway.', 'dim');
    },
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

/* ═══════════ APP: MOOD CHECK-IN ═══════════ */
const MOODS = [
  { e: '😊', l: 'Happy / Khush',
    fn: () => { heartRain(); toast('yaar aaj toh sun shine aaya! acha chal raha hai 🎀'); } },
  { e: '😔', l: 'Sad / Down',
    fn: () => { heartRain(); toast('aw yaar 🥺 main hoon na. chalo shayari suno...'); setTimeout(() => openApp('shayari'), 1000); } },
  { e: '😴', l: 'Tired / Neend',
    fn: () => { toast('thoda rest kar le 🌙 music chhod deta hoon halka sa'); setTimeout(() => openApp('music'), 1000); } },
  { e: '🤩', l: 'Excited / Hyped',
    fn: () => { heartRain(); toast('YEH ENERGY!! Main bhi excited ho gaya 🎉🎉'); } },
  { e: '😒', l: 'Bored / Faltu',
    fn: () => { toast('boring? chalo photos dekhtey hain tumhari! 📸'); setTimeout(() => openApp('photos'), 800); } },
  { e: '😤', l: 'Annoyed / Upset',
    fn: () => { heartRain(); toast('jo bhi hua — sab theek ho jayega. I promise 🤍'); } },
  { e: '🥳', l: 'Celebratory',
    fn: () => { heartRain(); toast('CELEBRATE! Aaj ka din toh yaadgaar hai 🎊🎀'); } },
  { e: '🤔', l: 'Confused / Soch mein',
    fn: () => { toast('kya soch rahi ho? khol ke baat karo 🤍'); setTimeout(() => openApp('reply'), 1000); } },
];

function initMood(win) {
  const grid = win.querySelector('#moodGrid');
  const result = win.querySelector('#moodResult');
  const resEmoji = win.querySelector('#moodResEmoji');
  const resText = win.querySelector('#moodResText');
  const again = win.querySelector('#moodAgain');

  MOODS.forEach(m => {
    const btn = document.createElement('button');
    btn.className = 'mood-btn';
    btn.innerHTML = `<span class="mood-emoji">${m.e}</span><span class="mood-label">${m.l}</span>`;
    btn.addEventListener('click', () => {
      grid.classList.add('hidden');
      resEmoji.textContent = m.e;
      resText.textContent = m.l;
      result.classList.remove('hidden');
      m.fn();
    });
    grid.appendChild(btn);
  });

  again.addEventListener('click', () => {
    result.classList.add('hidden');
    grid.classList.remove('hidden');
  });
}

/* ═══════════ APP: SCRATCH CARD ═══════════ */
const SCRATCH_MESSAGES = [
  'you are genuinely one of the most beautiful people I know — inside and out 🌸',
  'har din tumse baat karna meri favourite part of the day hai 🤍',
  'you don\'t need to be anything other than exactly what you are 🎀',
  'some people make life easier just by being in it. you are one of them ✨',
  'I hope you know how much you are appreciated, seen, and loved 💕',
  'aaj ka lucky charm: you. obviously. always. 🍀',
  'tumhari smile genuinely makes the room better — documented fact 🌟',
  'the world is lowkey a better place because you exist in it 🌸',
];

function initScratch(win) {
  const canvas = win.querySelector('#scratchCanvas');
  const msgEl = win.querySelector('#scratchMsg');
  const hint = win.querySelector('#scratchHint');
  const newBtn = win.querySelector('#scratchNew');
  const ctx = canvas.getContext('2d');

  let revealed = false;
  let scratching = false;
  let scratchedPx = 0;
  const TOTAL_PX = 0;

  function setup() {
    revealed = false;
    scratchedPx = 0;
    newBtn.classList.add('hidden');
    hint.classList.remove('hidden');

    const msg = SCRATCH_MESSAGES[Math.floor(Math.random() * SCRATCH_MESSAGES.length)];
    msgEl.textContent = msg;

    const W = canvas.offsetWidth || 280;
    const H = canvas.offsetHeight || 160;
    canvas.width = W;
    canvas.height = H;

    // Fill with shiny gold scratch layer
    const grad = ctx.createLinearGradient(0, 0, W, H);
    grad.addColorStop(0, '#d4a0c8');
    grad.addColorStop(0.5, '#e8c0e0');
    grad.addColorStop(1, '#c8a0d4');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Draw scratch text
    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    ctx.font = 'bold 14px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('✦  scratch here  ✦', W / 2, H / 2 - 8);
    ctx.fillText('koi surprise chhupa hai', W / 2, H / 2 + 14);
  }

  function scratch(x, y) {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';

    // Check how much is scratched
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let cleared = 0;
    for (let i = 3; i < data.length; i += 4) if (data[i] === 0) cleared++;
    const pct = cleared / (canvas.width * canvas.height);
    if (pct > 0.55 && !revealed) {
      revealed = true;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hint.classList.add('hidden');
      newBtn.classList.remove('hidden');
      toast('🎁 revealed!');
    }
  }

  const getPos = (e, el) => {
    const r = el.getBoundingClientRect();
    const src = e.touches ? e.touches[0] : e;
    return { x: src.clientX - r.left, y: src.clientY - r.top };
  };

  canvas.addEventListener('mousedown', e => { scratching = true; const p = getPos(e, canvas); scratch(p.x, p.y); });
  canvas.addEventListener('mousemove', e => { if (!scratching) return; const p = getPos(e, canvas); scratch(p.x, p.y); });
  canvas.addEventListener('mouseup', () => scratching = false);
  canvas.addEventListener('touchstart', e => { e.preventDefault(); scratching = true; const p = getPos(e, canvas); scratch(p.x, p.y); }, { passive: false });
  canvas.addEventListener('touchmove', e => { e.preventDefault(); if (!scratching) return; const p = getPos(e, canvas); scratch(p.x, p.y); }, { passive: false });
  canvas.addEventListener('touchend', () => scratching = false);

  newBtn.addEventListener('click', setup);
  setTimeout(setup, 60);
}

/* ═══════════ APP: MAGIC 8-BALL ═══════════ */
const M8_ANSWERS = [
  'Bilkul haan! 🎀', 'Obviously yes, kya sawaal hai yeh', 'Main hoon na — toh hoga pakka ✨',
  'Signs are looking very good 🌸', 'Ek dum confirm! No doubt at all',
  'Haan yaar, trust karo', '100% yes, go for it 💕',
  'Thoda wait karo, chai pee ke socho ☕', 'Abhi nahi bolunga — mystery rehne do',
  'Dono sides pe soch lo phir decide karo', 'Kal poochho, aaj nahi bata rahi 😌',
  'Pata nahi yaar, tumhe better pata hoga', 'Hmm... signs point to chai first',
  'Nahi yaar, baar baar poochho mat 😂', 'Definitely nahi — aur yeh final hai',
  'Itna obvious question kyun pooch rahi ho 😭', 'Sleep pe soch ke bata',
  'Magic 8-ball ne coffee break le liya, phir se poochho ☕', 'The stars say maybe, the vibes say definitely',
];

function initMagic8(win) {
  const ball = win.querySelector('#m8Ball');
  const num = win.querySelector('.m8-num');
  const answer = win.querySelector('#m8Answer');
  const input = win.querySelector('#m8Input');
  const askBtn = win.querySelector('#m8Ask');
  const hint = win.querySelector('#m8Hint');

  let spinning = false;

  async function getAnswer(question) {
    try {
      const r = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question, mode: 'magic8' }),
      });
      if (!r.ok) throw new Error('bad status');
      const data = await r.json();
      if (!data.reply) throw new Error('empty reply');
      return data.reply;
    } catch (_) {
      return M8_ANSWERS[Math.floor(Math.random() * M8_ANSWERS.length)];
    }
  }

  function ask() {
    if (spinning) return;
    const question = input.value.trim();
    if (!question) { toast('pehle sawaal toh pucho 😄'); input.focus(); return; }
    spinning = true;
    hint.textContent = '';
    num.classList.remove('hidden');
    answer.classList.add('hidden');
    ball.classList.add('m8-shake');

    const answerPromise = getAnswer(question);
    const minShake = new Promise(res => setTimeout(res, 1200));

    Promise.all([answerPromise, minShake]).then(([text]) => {
      ball.classList.remove('m8-shake');
      num.classList.add('hidden');
      answer.textContent = text;
      answer.classList.remove('hidden');
      spinning = false;
      hint.textContent = 'tap ask for another question ✨';
    });
  }

  askBtn.addEventListener('click', ask);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') ask(); });
}

/* ═══════════ APP: PHOTO MEMORY MATCH ═══════════ */
function initMatch(win) {
  const grid = win.querySelector('#matchGrid');
  const movesEl = win.querySelector('#mchMoves');
  const timeEl = win.querySelector('#mchTime');
  const done = win.querySelector('#matchDone');
  const doneText = win.querySelector('#matchDoneText');
  const again = win.querySelector('#matchAgain');

  const TOTAL_PAIRS = 6;
  let flipped = [], matched = 0, moves = 0, timer = null, secs = 0, locked = false;

  function startGame() {
    flipped = []; matched = 0; moves = 0; secs = 0; locked = false;
    movesEl.textContent = '0 moves';
    timeEl.textContent = '0s';
    done.classList.add('hidden');
    grid.innerHTML = '';
    clearInterval(timer);

    // Pick TOTAL_PAIRS random photos from her album
    const pool = Array.from({ length: 22 }, (_, i) => `photos/her/her${pad(i + 1)}.jpg`);
    const chosen = pool.sort(() => Math.random() - 0.5).slice(0, TOTAL_PAIRS);
    const deck = [...chosen, ...chosen].sort(() => Math.random() - 0.5);

    deck.forEach((src, i) => {
      const card = document.createElement('div');
      card.className = 'mc-card';
      card.dataset.src = src;
      card.dataset.idx = i;
      card.innerHTML = `
        <div class="mc-face mc-back">🎀</div>
        <div class="mc-face mc-front"><img src="${src}" loading="lazy"></div>`;
      card.addEventListener('click', () => flip(card));
      grid.appendChild(card);
    });

    timer = setInterval(() => { secs++; timeEl.textContent = secs + 's'; }, 1000);
  }

  function flip(card) {
    if (locked || card.classList.contains('mc-open') || card.classList.contains('mc-match')) return;
    card.classList.add('mc-open');
    flipped.push(card);

    if (flipped.length === 2) {
      locked = true;
      moves++;
      movesEl.textContent = moves + ' moves';
      const [a, b] = flipped;
      if (a.dataset.src === b.dataset.src) {
        a.classList.add('mc-match'); b.classList.add('mc-match');
        matched++;
        flipped = []; locked = false;
        if (matched === TOTAL_PAIRS) {
          clearInterval(timer);
          setTimeout(() => {
            doneText.textContent = `${moves} moves · ${secs}s — her photos are burned in your memory! 🎀`;
            done.classList.remove('hidden');
          }, 400);
        }
      } else {
        setTimeout(() => {
          a.classList.remove('mc-open'); b.classList.remove('mc-open');
          flipped = []; locked = false;
        }, 950);
      }
    }
  }

  again.addEventListener('click', startGame);
  startGame();
}

/* ═══════════ APP: COMPLIMENT SLOT MACHINE ═══════════ */
const SLOT_DATA = [
  ['Absolutely', 'Genuinely', 'Completely', 'Effortlessly', 'Ridiculously', 'Undeniably', 'Clearly', 'So', 'Aggressively', 'Scientifically'],
  ['gorgeous', 'radiant', 'brilliant', 'wonderful', 'stunning', 'lovable', 'iconic', 'glowing', 'unbothered', 'chaotic (affectionate)'],
  ['always 🎀', 'no notes ✨', 'fr fr 💕', 'every day 🌸', 'facts only', 'ek dum sach', 'non-stop', 'verified 💯', 'case closed 👩‍⚖️', 'no cap'],
];

function initSlot(win) {
  const strips = [win.querySelector('#slotS0'), win.querySelector('#slotS1'), win.querySelector('#slotS2')];
  const spinBtn = win.querySelector('#slotSpin');
  const result = win.querySelector('#slotResult');
  let spinning = false;

  const ITEM_H = 52;

  strips.forEach((strip, ri) => {
    SLOT_DATA[ri].forEach(word => {
      const el = document.createElement('div');
      el.className = 'slot-item';
      el.textContent = word;
      strip.appendChild(el);
    });
    // Duplicate for seamless loop
    SLOT_DATA[ri].forEach(word => {
      const el = document.createElement('div');
      el.className = 'slot-item';
      el.textContent = word;
      strip.appendChild(el);
    });
  });

  function spin() {
    if (spinning) return;
    spinning = true;
    result.textContent = '';
    spinBtn.disabled = true;

    const picks = SLOT_DATA.map(col => Math.floor(Math.random() * col.length));

    strips.forEach((strip, ri) => {
      const targetIdx = picks[ri] + SLOT_DATA[ri].length;
      const targetY = -(targetIdx * ITEM_H) + ITEM_H;
      const duration = 700 + ri * 250;

      strip.style.transition = `transform ${duration}ms cubic-bezier(.17,.67,.3,1.2)`;
      strip.style.transform = `translateY(${targetY}px)`;

      if (ri === strips.length - 1) {
        setTimeout(() => {
          spinning = false;
          spinBtn.disabled = false;
          const phrase = picks.map((p, i) => SLOT_DATA[i][p]).join(' ');
          result.textContent = `"${phrase}"`;
          toast(SLOT_DATA[0][picks[0]] + ' ' + SLOT_DATA[1][picks[1]] + ' — certified 🎀');
        }, duration + 100);
      }
    });
  }

  spinBtn.addEventListener('click', spin);
  // Auto-spin once on open
  setTimeout(spin, 300);
}

/* ═══════════ APP: GUESS THE VIBE ═══════════ */
const VIBES = [
  { s: '2am mein achanak tumhara favourite song play hota hai 🎵', o: ['So jao', 'Full volume karo aur dance karo', 'Rona shuru karo', 'Screenshot leke bestie ko bhejo'], r: [0,1,2,3], v: 'nostalgia queen' },
  { s: 'Main ek ajeeb reel forward karta hoon bina kisi context ke 📱', o: ['Block kar do', 'Same energy mein 5 reels bhejo wapas', 'Seriously lo', 'Unsubscribe karo'], r: [1], v: 'certified reel bestie' },
  { s: 'Khana order karte time tumhara favourite item menu pe nahi hai 😩', o: ['Chill ho jao', 'Chef ko bulao', 'Mood kharab ho jaye', 'Order hi cancel karo'], r: [0,2], v: 'foodie drama queen' },
  { s: 'Main tumhare baare mein kuch sweet bol deta hoon achanak se 🌸', o: ['Ignore karo', '"Shut up yaar" bol ke blush karo', 'Rone lag jao (happy tears)', 'Embarrassed ho ke bhaago'], r: [1,2], v: 'softie with a hard exterior' },
  { s: 'Naya photo liya hai aur itna acha aaya hai 📸', o: ['Delete karo', 'Instantly stories pe daal do', 'Filter lagao phir socho', 'Mujhe pehle dikhao'], r: [1,3], v: 'main character' },
  { s: 'Baarish ho rahi hai aur tum ghar pe ho 🌧️', o: ['Sad feel karo', 'Coffee banao aur khidki ke paas baitho', 'Sone ki koshish karo', 'Mujhe call karo aur vibe do'], r: [1,3], v: 'cozy season lover' },
  { s: 'Tumhara phone battery 2% pe hai aur charger nahi mila 😬', o: ['Panic mode ON', 'Shanti se accept kar lo', 'Last message mujhe bhejo', 'Doosra phone dhundho'], r: [0,2], v: 'phone-dependent bestie' },
  { s: 'Main tumhe ek terrible pun bhejta hoon 3 baar ek din mein 😅', o: ['Group chat mein forward karo', 'Ek dum groan karo phir hasso', 'Ignore karke chai piyo', 'Ek aur bhi bhejne ko bolo'], r: [1,3], v: 'pun tolerance: legendary' },
];

function initVibe(win) {
  const intro = win.querySelector('#vibeIntro');
  const play = win.querySelector('#vibePlay');
  const doneSec = win.querySelector('#vibeDone');
  const bar = win.querySelector('#vibeBarFill');
  const step = win.querySelector('#vibeStep');
  const scenario = win.querySelector('#vibeScenario');
  const opts = win.querySelector('#vibeOpts');
  const doneResult = win.querySelector('#vibeDoneResult');
  const doneSub = win.querySelector('#vibeDoneSub');
  const startBtn = win.querySelector('#vibeStart');
  const againBtn = win.querySelector('#vibeAgain');

  let qi = 0, vibeMap = {};

  function show() {
    const item = VIBES[qi];
    step.textContent = `situation ${qi + 1} of ${VIBES.length}`;
    bar.style.width = ((qi / VIBES.length) * 100) + '%';
    scenario.textContent = item.s;
    opts.innerHTML = '';
    item.o.forEach((opt, n) => {
      const b = document.createElement('button');
      b.className = 'vibe-opt';
      b.textContent = opt;
      b.addEventListener('click', () => {
        [...opts.children].forEach((btn, k) => {
          if (item.r.includes(k)) btn.classList.add('right');
          else if (k === n) btn.classList.add('wrong');
          else btn.classList.add('dim');
        });
        vibeMap[item.v] = (vibeMap[item.v] || 0) + (item.r.includes(n) ? 1 : 0);
        setTimeout(() => { qi++; if (qi < VIBES.length) show(); else finish(); }, 1100);
      });
      opts.appendChild(b);
    });
  }

  function finish() {
    play.classList.add('hidden');
    doneSec.classList.remove('hidden');
    bar.style.width = '100%';
    const top = Object.entries(vibeMap).sort((a, b) => b[1] - a[1])[0];
    const label = top ? top[0] : 'mystery vibe';
    doneResult.textContent = `✨ ${label} ✨`;
    doneSub.textContent = 'ekdum accurate! yeh toh sach mein tumhara vibe hai 🎀';
  }

  startBtn.addEventListener('click', () => { intro.classList.add('hidden'); play.classList.remove('hidden'); show(); });
  againBtn.addEventListener('click', () => {
    qi = 0; vibeMap = {};
    doneSec.classList.add('hidden'); play.classList.remove('hidden'); show();
  });
}

/* ═══════════ APP: REEL SNAKE ═══════════ */
const SNAKE_TOASTS = [
  'got one! 📱', 'reel unlocked 🎉', 'bestie sent this at 2am 💀',
  'relatable! 😂', 'us literally 😭', 'this is exactly you btw',
  'screenshot karo baad mein 📸', 'okay but why is this so us',
];

function initSnake(win) {
  const canvas = win.querySelector('#snakeCanvas');
  const scoreEl = win.querySelector('#snakeScore');
  const msg = win.querySelector('#snakeMsg');
  const ctx = canvas.getContext('2d');

  const CELL = 20;
  let W, H, cols, rows;
  let snake, dir, nextDir, food, score, running, gameLoop;

  function resize() {
    const wrap = canvas.parentElement;
    W = Math.floor((wrap.offsetWidth || 320) / CELL) * CELL;
    H = Math.floor(Math.min(wrap.offsetHeight || 260, 260) / CELL) * CELL;
    canvas.width = W; canvas.height = H;
    cols = W / CELL; rows = H / CELL;
  }

  function placeFood() {
    let pos;
    do { pos = { x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows) }; }
    while (snake.some(s => s.x === pos.x && s.y === pos.y));
    food = pos;
  }

  function startGame() {
    resize();
    snake = [{ x: Math.floor(cols / 2), y: Math.floor(rows / 2) }];
    dir = { x: 1, y: 0 }; nextDir = { x: 1, y: 0 };
    score = 0; scoreEl.textContent = '0';
    running = true;
    msg.classList.add('hidden');
    placeFood();
    clearInterval(gameLoop);
    gameLoop = setInterval(tick, 130);
  }

  function tick() {
    if (!running) return;
    dir = nextDir;
    const head = { x: (snake[0].x + dir.x + cols) % cols, y: (snake[0].y + dir.y + rows) % rows };
    if (snake.some(s => s.x === head.x && s.y === head.y)) { endGame(); return; }
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
      score++; scoreEl.textContent = score;
      toast(SNAKE_TOASTS[Math.floor(Math.random() * SNAKE_TOASTS.length)]);
      placeFood();
    } else snake.pop();
    draw();
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    // Grid
    ctx.strokeStyle = 'rgba(180,130,200,0.08)';
    for (let x = 0; x < W; x += CELL) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += CELL) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
    // Food
    ctx.font = `${CELL - 2}px serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('📱', food.x * CELL + CELL / 2, food.y * CELL + CELL / 2);
    // Snake
    snake.forEach((s, i) => {
      const alpha = 1 - i / snake.length * 0.5;
      ctx.fillStyle = `rgba(180,100,200,${alpha})`;
      ctx.beginPath();
      ctx.roundRect(s.x * CELL + 2, s.y * CELL + 2, CELL - 4, CELL - 4, 4);
      ctx.fill();
    });
    // Head face
    ctx.font = `${CELL - 4}px serif`;
    ctx.fillText('🐍', snake[0].x * CELL + CELL / 2, snake[0].y * CELL + CELL / 2);
  }

  function endGame() {
    running = false;
    clearInterval(gameLoop);
    msg.textContent = `game over! score: ${score} 😭 tap to restart`;
    msg.classList.remove('hidden');
    toast(score >= 10 ? `${score} reels! bestie certified 🎀` : `${score} reels collected! ek baar aur try karo`);
  }

  // Controls
  win.querySelectorAll('.sd-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!running) { startGame(); return; }
      const d = btn.dataset.dir;
      if (d === 'up'    && dir.y === 0) nextDir = { x: 0, y: -1 };
      if (d === 'down'  && dir.y === 0) nextDir = { x: 0, y: 1 };
      if (d === 'left'  && dir.x === 0) nextDir = { x: -1, y: 0 };
      if (d === 'right' && dir.x === 0) nextDir = { x: 1, y: 0 };
    });
  });

  canvas.addEventListener('click', () => { if (!running) startGame(); });

  // Swipe support
  let tx = 0, ty = 0;
  canvas.addEventListener('touchstart', e => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
  canvas.addEventListener('touchend', e => {
    if (!running) { startGame(); return; }
    const dx = e.changedTouches[0].clientX - tx;
    const dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > Math.abs(dy)) {
      if (dx > 20 && dir.x === 0) nextDir = { x: 1, y: 0 };
      if (dx < -20 && dir.x === 0) nextDir = { x: -1, y: 0 };
    } else {
      if (dy > 20 && dir.y === 0) nextDir = { x: 0, y: 1 };
      if (dy < -20 && dir.y === 0) nextDir = { x: 0, y: -1 };
    }
  }, { passive: true });

  // Keyboard
  window.addEventListener('keydown', e => {
    if (!running) return;
    if (e.key === 'ArrowUp'    && dir.y === 0) { nextDir = { x:0, y:-1 }; e.preventDefault(); }
    if (e.key === 'ArrowDown'  && dir.y === 0) { nextDir = { x:0, y:1  }; e.preventDefault(); }
    if (e.key === 'ArrowLeft'  && dir.x === 0) { nextDir = { x:-1,y:0  }; e.preventDefault(); }
    if (e.key === 'ArrowRight' && dir.x === 0) { nextDir = { x:1, y:0  }; e.preventDefault(); }
  });

  resize();
  draw();
}

/* ═══════════ SHAKE FOR SURPRISE ═══════════ (mobile global) */
(function initShake() {
  let lastShake = 0;
  let shakeCount = 0;
  const SURPRISES = [
    () => heartRain(),
    () => toast('tum genuinely bahut acha insaan ho 🌸 yeh fact hai'),
    () => { const s = SHAYARI.hi[Math.floor(Math.random() * SHAYARI.hi.length)]; toast(s[0] + ' ' + s[1]); },
    () => toast('bestie scan complete: gorgeous, verified, irreplaceable ✨'),
    () => { heartRain(); toast('ek hug from here 🤍'); },
    () => toast('stop shaking me yaar 😭 main gir jaunga'),
  ];

  if (!window.DeviceMotionEvent) return;

  window.addEventListener('devicemotion', e => {
    const acc = e.accelerationIncludingGravity;
    if (!acc) return;
    const mag = Math.sqrt(acc.x ** 2 + acc.y ** 2 + acc.z ** 2);
    if (mag > 25) {
      const now = Date.now();
      if (now - lastShake < 800) return;
      lastShake = now;
      const idx = Math.min(shakeCount, SURPRISES.length - 1);
      SURPRISES[idx]();
      shakeCount++;
      if (shakeCount >= SURPRISES.length) shakeCount = 0;
    }
  });
})();

/* ═══════════ THEME MANAGER & VIBES ═══════════ */
const THEMES = [
  { k: 'sakura',   n: '🌸 Soft Sakura',   c1: '#ff8fb8', c2: '#b79dff', d: 'Pastel Pink & Lavender (Default)' },
  { k: 'sunset',   n: '🌅 Sunset Glow',   c1: '#f26b38', c2: '#ffb98f', d: 'Warm Amber & Golden Coral' },
  { k: 'midnight', n: '🌌 Midnight Star', c1: '#b070ff', c2: '#201235', d: 'Deep Velvet & Glowing Starlight' },
  { k: 'sage',     n: '🌿 Sage & Mint',   c1: '#3b9b78', c2: '#8fe0c4', d: 'Cozy Mint & Soft Emerald' },
  { k: 'ocean',    n: '💙 Ocean Breeze',  c1: '#3a82ee', c2: '#8fc7ff', d: 'Cool Periwinkle & Sky Blue' },
];

function setTheme(key, notify = true) {
  document.documentElement.setAttribute('data-theme', key);
  try { localStorage.setItem('reetos-theme', key); } catch (_) {}
  if (notify) {
    const t = THEMES.find(item => item.k === key);
    toast(`vibe set: ${t ? t.n : key} ✨`);
  }
}

function restoreTheme() {
  try {
    const saved = localStorage.getItem('reetos-theme') || 'sakura';
    setTheme(saved, false);
  } catch (_) {
    setTheme('sakura', false);
  }
}

function initTimeVibe() {
  const hr = new Date().getHours();
  let greeting = '';
  document.body.classList.remove('vibe-morning', 'vibe-afternoon', 'vibe-night');

  if (hr >= 5 && hr < 12) {
    greeting = 'good morning Reet ☀️';
    document.body.classList.add('vibe-morning');
  } else if (hr >= 12 && hr < 18) {
    greeting = 'good afternoon Reet ☕';
    document.body.classList.add('vibe-afternoon');
  } else {
    greeting = 'Good Night — neend puri karlo 😊 Radhe Radhe 🙏';
    document.body.classList.add('vibe-night');
  }

  const hint = document.querySelector('.lock-hint');
  if (hint) hint.textContent = `${greeting} · welcome home`;
}

function initSparkleTrail() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const canvas = document.createElement('canvas');
  canvas.id = 'sparkleTrail';
  canvas.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9999;';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; });

  const sparkles = [];

  function addParticle(x, y) {
    if (sparkles.length > 20) return;
    sparkles.push({
      x, y,
      vx: (Math.random() - 0.5) * 0.9,
      vy: (Math.random() - 0.5) * 0.9 - 0.3,
      size: Math.random() * 3.5 + 2,
      alpha: 1,
      color: ['#ff8fb8', '#b79dff', '#ffb98f', '#ffffff'][Math.floor(Math.random() * 4)]
    });
  }

  window.addEventListener('mousemove', e => addParticle(e.clientX, e.clientY));
  window.addEventListener('touchmove', e => {
    if (e.touches && e.touches[0]) addParticle(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });

  (function render() {
    ctx.clearRect(0, 0, W, H);
    for (let i = sparkles.length - 1; i >= 0; i--) {
      const p = sparkles[i];
      p.x += p.vx; p.y += p.vy; p.alpha -= 0.035; p.size *= 0.95;
      if (p.alpha <= 0) { sparkles.splice(i, 1); continue; }
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    requestAnimationFrame(render);
  })();
}

function initThemeApp(win) {
  const grid = win.querySelector('#thGrid');
  grid.innerHTML = '';
  const current = document.documentElement.getAttribute('data-theme') || 'sakura';

  THEMES.forEach(t => {
    const card = document.createElement('div');
    card.className = `th-card ${t.k === current ? 'active' : ''}`;
    card.innerHTML = `
      <div class="th-preview" style="background: linear-gradient(135deg, ${t.c1}, ${t.c2})"></div>
      <div class="th-info">
        <div class="th-name">${t.n}</div>
        <div class="th-desc">${t.d}</div>
      </div>`;
    card.addEventListener('click', () => {
      grid.querySelectorAll('.th-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      setTheme(t.k, true);
    });
    grid.appendChild(card);
  });

  const wpGrid = win.querySelector('#thWpGrid');
  const currentWp = (() => { try { return localStorage.getItem('reetos-wallpaper') || 'collage'; } catch (_) { return 'collage'; } })();
  wpGrid.innerHTML = '';
  WALLPAPERS.forEach(wp => {
    const card = document.createElement('div');
    card.className = `th-wp-card ${wp.id === currentWp ? 'active' : ''}`;
    card.innerHTML = `
      <div class="th-wp-preview" style="${wp.src ? `background-image:url('${wp.src}')` : 'background: linear-gradient(165deg, #ffe4f0, #ecdcff, #dcebff)'}"></div>
      <div class="th-wp-name">${wp.name}</div>`;
    card.addEventListener('click', () => {
      wpGrid.querySelectorAll('.th-wp-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      setWallpaper(wp.id, true);
      playTone('click');
    });
    wpGrid.appendChild(card);
  });

  const soundSwitch = win.querySelector('#thSoundSwitch');
  soundSwitch.classList.toggle('on', isSoundOn());
  soundSwitch.addEventListener('click', () => {
    const next = !isSoundOn();
    setSoundOn(next);
    soundSwitch.classList.toggle('on', next);
    if (next) playTone('click');
  });

  const rainBtn = win.querySelector('#thHeartRain');
  if (rainBtn) rainBtn.addEventListener('click', () => heartRain());

  const resetBtn = win.querySelector('#thResetQuest');
  if (resetBtn) resetBtn.addEventListener('click', () => {
    saveQuest({});
    checkBadges();
    toast('quest progress reset — go explore again 🎀');
  });
}

/* ═══════════ REET'S QUEST CHECKLIST & ONBOARDING ═══════════ */
const QUEST_ITEMS = [
  { id: 'letter',  t: 'Read your secret letter', e: '✉️', desc: 'Read letter.txt in full' },
  { id: 'music',   t: 'Play a track on Reet Radio', e: '🎵', desc: 'Listen to Alka Yagnik & more' },
  { id: 'quiz',    t: 'Take the Bestie Test', e: '🎀', desc: 'Score your bestie points in reet 101' },
  { id: 'scratch', t: 'Scratch a daily surprise', e: '🎁', desc: 'Reveal your hidden surprise card' },
  { id: 'match',   t: 'Play Photo Memory Match', e: '🃏', desc: 'Match your photo pairs' },
  { id: 'mood',    t: 'Check in your daily vibe', e: '🌸', desc: 'Tell reetOS how you feel today' },
  { id: 'slot',    t: 'Spin Compliment Machine', e: '🎰', desc: 'Spin for a random sweet fact' },
  { id: 'snake',   t: 'Eat reels in Reel Snake', e: '📱', desc: 'Play a game of bestie snake' },
  { id: 'sticky',  t: 'Read care notes & reminders', e: '📌', desc: 'Check your gentle daily notes' },
  { id: 'reply',   t: 'Write back to him', e: '💌', desc: 'Send a note or WhatsApp reply' },
  { id: 'ai',      t: 'Chat with reet.ai', e: '🤖', desc: 'Say hi and see what it knows about you' },
  { id: 'browser', t: 'Browse ReetNet', e: '🌐', desc: 'Explore your own personal internet' },
  { id: 'throwback', t: 'Relive a throwback', e: '📼', desc: 'Open an old message from the vault' },
  { id: 'promise', t: 'Seal the promise', e: '🤝', desc: 'Complete the friendship day ritual' },
];

const QUEST_KEY = 'reetos-quest';
function loadQuest() {
  try { return JSON.parse(localStorage.getItem(QUEST_KEY) || '{}'); } catch (_) { return {}; }
}
function saveQuest(state) {
  try { localStorage.setItem(QUEST_KEY, JSON.stringify(state)); } catch (_) {}
}

function markAppExplored(id) {
  const questState = loadQuest();
  if (!questState[id]) {
    questState[id] = true;
    saveQuest(questState);
    const item = QUEST_ITEMS.find(q => q.id === id);
    if (item) toast(`quest completed: ${item.t} ${item.e}`);
    checkBadges();
    const doneCount = QUEST_ITEMS.filter(q => questState[q.id]).length;
    if (doneCount === QUEST_ITEMS.length) {
      setTimeout(() => revealSecretIcon(true), 600);
    }
  }
}

const SECRET_KEY = 'reetos-secret-unlocked';
function isSecretUnlocked() {
  try { return localStorage.getItem(SECRET_KEY) === '1'; } catch (_) { return false; }
}

function revealSecretIcon(celebrate) {
  const already = isSecretUnlocked();
  if (already && document.querySelector('.dicon[data-app="secret"]')) return;

  try { localStorage.setItem(SECRET_KEY, '1'); } catch (_) {}
  const app = APPS.secret;

  if (!document.querySelector('.dock-item[data-app="secret"]')) {
    const item = document.createElement('div');
    item.className = 'dock-item not-pinned secret-glow';
    item.dataset.app = 'secret';
    item.innerHTML = `<div class="dock-img" data-icon="${app.icon}"></div>
      <div class="dock-tip">${app.name}</div><div class="dock-dot"></div>`;
    item.addEventListener('click', () => openApp('secret'));
    $('#dock').appendChild(item);

    const hi = document.createElement('div');
    hi.className = 'hi-app secret-glow';
    hi.dataset.app = 'secret';
    hi.innerHTML = `<div class="hi-img" data-icon="${app.icon}"></div>
      <div class="hi-label">${app.name}</div>`;
    hi.addEventListener('click', () => openApp('secret'));
    $('#homeGrid').appendChild(hi);

    const di = document.createElement('div');
    di.className = 'dicon secret-glow';
    di.dataset.app = 'secret';
    di.innerHTML = `<div class="dicon-img" data-icon="${app.icon}"></div>
      <div class="dicon-label">${app.name}</div>`;
    di.addEventListener('dblclick', () => openApp('secret'));
    di.addEventListener('click', () => {
      $('#desktopIcons').querySelectorAll('.dicon').forEach(x => x.classList.remove('selected'));
      di.classList.add('selected');
    });
    $('#desktopIcons').appendChild(di);
  }

  if (celebrate) {
    heartRain();
    toast('🎉 100% QUEST COMPLETED! a new icon just appeared… go find it 💌');
  }
}

const EGG_KEY = 'reetos-egg-found';
function markEggFound() {
  try {
    if (localStorage.getItem(EGG_KEY) === '1') return;
    localStorage.setItem(EGG_KEY, '1');
  } catch (_) {}
  const check = document.getElementById('qBonusCheck');
  const bonus = document.getElementById('qBonus');
  if (check) check.textContent = '✓';
  if (bonus) bonus.classList.add('done');
}

function checkBadges() {
  const questState = loadQuest();
  QUEST_ITEMS.forEach(q => {
    const explored = !!questState[q.id];
    document.querySelectorAll(`[data-app="${q.id}"]`).forEach(el => {
      let badge = el.querySelector('.app-badge');
      if (!explored) {
        if (!badge) {
          badge = document.createElement('div');
          badge.className = 'app-badge';
          badge.textContent = 'NEW';
          el.appendChild(badge);
        }
      } else {
        if (badge) badge.remove();
      }
    });
  });
}

function checkWelcomeModal() {
  try {
    const welcomed = localStorage.getItem('reetos-welcomed');
    if (!welcomed) showWelcomeModal();
  } catch (_) {
    showWelcomeModal();
  }
}

function showWelcomeModal() {
  const overlay = $('#welcomeOverlay');
  if (overlay) {
    overlay.classList.remove('hidden');
    const startBtn = $('#wmStartBtn');
    if (startBtn) {
      startBtn.onclick = () => {
        overlay.classList.add('hidden');
        try { localStorage.setItem('reetos-welcomed', '1'); } catch (_) {}
        openApp('quest');
      };
    }
  }
}

function initQuestApp(win) {
  const list = win.querySelector('#qList');
  const bar = win.querySelector('#qBarFill');
  const status = win.querySelector('#qStatus');
  const reward = win.querySelector('#qReward');
  const bonus = win.querySelector('#qBonus');
  const bonusCheck = win.querySelector('#qBonusCheck');

  let eggFound = false;
  try { eggFound = localStorage.getItem(EGG_KEY) === '1'; } catch (_) {}
  if (eggFound) {
    bonus.classList.add('done');
    bonusCheck.textContent = '✓';
  }

  function render() {
    const questState = loadQuest();
    list.innerHTML = '';
    let done = 0;

    QUEST_ITEMS.forEach(q => {
      const isDone = !!questState[q.id];
      if (isDone) done++;
      const item = document.createElement('div');
      item.className = `q-item ${isDone ? 'done' : ''}`;
      item.innerHTML = `
        <div class="q-ico">${q.e}</div>
        <div class="q-info">
          <div class="q-item-title">${q.t}</div>
          <div class="q-item-desc">${q.desc}</div>
        </div>
        <div class="q-check">${isDone ? '✓' : ''}</div>`;
      item.addEventListener('click', () => {
        openApp(q.id);
      });
      list.appendChild(item);
    });

    const pct = (done / QUEST_ITEMS.length) * 100;
    bar.style.width = pct + '%';
    status.textContent = `${done} of ${QUEST_ITEMS.length} completed (${Math.round(pct)}%)`;

    if (done === QUEST_ITEMS.length) {
      reward.classList.remove('hidden');
    } else {
      reward.classList.add('hidden');
    }
  }

  render();
}

/* ═══════════ APP: REET.AI ═══════════ */
/* A "chatbot" that only knows one topic. No API, no key, nothing to leak —
   just a keyword-matched pool of canned lines, picked at random. */
const AI_RULES = [
  { kw: ['neend', 'sleep', 'sleepy', 'so jaana', 'goodnight', 'good night'], r: [
    "neend puri karlo aaram se 😊",
    "so jaana ab, kal baat karte hain. take care 🤍",
    "Good Night — sweet n blissful dreams. Radhe Radhe 🙏",
  ]},
  { kw: ['radhe radhe', 'jai shree krishna', 'jai shri krishna'], r: [
    "Radhe Radhe 🙏🌸",
    "Jai Shree Krishna 🪈😊",
  ]},
  { kw: ['take care', 'bye', 'gtg', 'going now'], r: [
    "take care, ok? 🤍",
    "hmm ok, take care — text when free.",
  ]},
  { kw: ['love', 'like you', 'feelings'], r: [
    "a lot. more than this little script could ever say properly 💗",
    "you're my whole world — that's not an exaggeration, that's just fact.",
    "loading emotional response… done: irreplaceable, obviously.",
  ]},
  { kw: ['sad', 'cry', 'upset', 'bad day'], r: [
    "hey. breathe. whatever it is, it's smaller than how much you matter to me.",
    "permission to feel bad, granted. permission to stay bad, denied — you've got me.",
    "sending a hug at 100% signal strength 🤍 — you're not carrying this alone.",
  ]},
  { kw: ['bored', 'boring'], r: [
    "have you tried reel snake? or bothering your best friend? both rank equally.",
    "boredom is just your brain asking for snacks or friends. pick one.",
  ]},
  { kw: ['food', 'hungry', 'eat'], r: [
    "my official recommendation: whatever you're craving, plus a second helping.",
    "hungry detected. this unit cannot cook, but it fully supports snacking.",
  ]},
  { kw: ['miss you', 'miss him', 'miss her'], r: [
    "I miss you too — more than the texts probably show.",
    "noted, and mutual. some things don't need a delivery fee to be true.",
  ]},
  { kw: ['who am i', 'whoami', 'about me'], r: [
    "you're reet — the whole reason this OS exists, actually.",
    "system record shows: irreplaceable. no further questions.",
  ]},
  { kw: ['who are you', 'what are you'], r: [
    "I'm reet.ai — small script, one topic, and that topic is you.",
    "technically a chatbot. built by someone who thinks about you more than a chatbot should know.",
  ]},
  { kw: ['best friend', 'bestie', 'friendship'], r: [
    "friendship.exe has been running since day one with zero crashes.",
    "certified, verified, permanent — that's the friendship status.",
  ]},
  { kw: ['bored of me', 'annoying', 'sorry'], r: [
    "request denied. you are not annoying, and no apology is required here.",
    "nice try — this unit does not accept 'sorry for existing' as valid input.",
  ]},
  { kw: ['thank', 'thanks', 'thankyou'], r: [
    "no mention 😊",
    "koi nahi yaar, that's what I'm here for.",
  ]},
  { kw: ['morning', 'good morning', 'gm'], r: [
    "good morning ☀️ hope today's kind to you.",
    "morning! kuch khaya? don't skip breakfast.",
  ]},
  { kw: ['tired', 'exhausted', 'thak gayi'], r: [
    "sit down for two minutes. the world can wait, I promise.",
    "acha, rest karlo — everything else is negotiable, your rest isn't.",
  ]},
  { kw: ['proud', 'achievement', 'did it', 'passed', 'selected'], r: [
    "wait, I need a second to be this proud out loud 🎉",
    "obviously. did you expect anything less from you?",
  ]},
  { kw: ['genius', 'smart', 'intelligent'], r: [
    "genius vs. hardworking debate again? you win both categories, always have.",
    "certified genius behaviour, no notes.",
  ]},
  { kw: ['gift', 'present', 'washing machine'], r: [
    "still owe you that washing machine, don't think I forgot 😂",
    "gift idea pending — quarterly instalments accepted.",
  ]},
  { kw: ['coincidence', '11:11', 'same time'], r: [
    "11:11 again? at this point it's not a coincidence, it's a pattern.",
    "some things just sync up. we're clearly one of them.",
  ]},
  { kw: ['chocolate', 'cocoa'], r: [
    "did you know cocoa has more antioxidants than most fruit? anyway, eat the chocolate.",
    "chocolate trivia loading… conclusion: you deserve some.",
  ]},
  { kw: ['movie', 'film', 'series', 'watch'], r: [
    "no spoilers till you've actually seen it, that's the rule.",
    "movie night suggestion pending — send me what you're in the mood for.",
  ]},
  { kw: ['joke', 'make me laugh', 'funny'], r: [
    "why do programmers prefer dark mode? because light attracts bugs. anyway, that's the whole bit.",
    "I'd tell you a chemistry joke but I know I wouldn't get a reaction.",
    "not a joke, but did you know you're objectively very funny yourself? just checking you knew.",
  ]},
  { kw: ['roast me', 'roast'], r: [
    "okay: your only flaw is being so likeable it's honestly a little unfair to everyone else.",
    "roast level: mild, because the harshest true thing about you is that you undersell yourself.",
    "system attempted a roast, generated a compliment instead. that's a you problem, not a bug.",
  ]},
  { kw: ['pickup line', 'rizz'], r: [
    "are you a browser tab? because you're the one I never close.",
    "if being irreplaceable were a crime, you'd be doing life without parole.",
    "that's the whole pickup line — this script's rizz is entirely borrowed from you being great.",
  ]},
];
const AI_FALLBACK = [
  "I only really know one subject, and you're it — try asking about that.",
  "hmm, outside my training data. but for what it's worth, today's a good day to smile.",
  "can't answer that one, but I *can* confirm you're doing better than you think.",
  "still learning! ask me about love, friendship, or bad days — that's my whole vocabulary.",
  "beep boop. translation: you're appreciated more than you know.",
  "acha, that one's outside my range — but hydrate and take a break anyway.",
  "not sure about that, but I am sure you're having a better day than you think.",
  "my vocabulary is small, my opinion of you is not.",
  "can't compute that one. can confirm: you're doing great regardless.",
  "that's above my pay grade (I'm unpaid), but you're still the main character today.",
];

function initAI(win) {
  const msgs = win.querySelector('#aiMsgs');
  const form = win.querySelector('#aiForm');
  const input = win.querySelector('#aiInput');
  const voiceBtn = win.querySelector('#aiVoiceBtn');

  let voiceOn = localStorage.getItem('reetos-ai-voice') !== 'off';
  const syncVoiceBtn = () => { voiceBtn.textContent = voiceOn ? '🔊' : '🔇'; voiceBtn.classList.toggle('off', !voiceOn); };
  syncVoiceBtn();
  voiceBtn.addEventListener('click', () => {
    voiceOn = !voiceOn;
    localStorage.setItem('reetos-ai-voice', voiceOn ? 'on' : 'off');
    syncVoiceBtn();
  });

  let currentAudio = null;
  async function speak(text) {
    if (!voiceOn) return;
    try {
      const r = await fetch('/api/speak', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
      if (!r.ok) return; // silent — no backend / TTS not configured, text-only is fine
      const blob = await r.blob();
      if (currentAudio) currentAudio.pause();
      currentAudio = new Audio(URL.createObjectURL(blob));
      currentAudio.play().catch(() => {});
    } catch (_) { /* no voice, no problem */ }
  }

  function addMsg(text, who) {
    const row = document.createElement('div');
    row.className = `ai-msg ${who}`;
    row.textContent = text;
    msgs.appendChild(row);
    msgs.scrollTop = msgs.scrollHeight;
    return row;
  }

  let lastCanned = '';
  function canned(userText) {
    const lower = userText.toLowerCase();
    const rule = AI_RULES.find(r => r.kw.some(k => lower.includes(k)));
    const pool = rule ? rule.r : AI_FALLBACK;
    const options = pool.length > 1 ? pool.filter(p => p !== lastCanned) : pool;
    const pick = options[Math.floor(Math.random() * options.length)];
    lastCanned = pick;
    return pick;
  }

  async function reply(userText) {
    const typing = addMsg('…', 'bot typing');
    let text;
    try {
      const r = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText }),
      });
      if (!r.ok) throw new Error('bad status');
      const data = await r.json();
      text = data.reply;
      if (!text) throw new Error('empty reply');
    } catch (_) {
      text = canned(userText); // offline / no backend / API hiccup — fall back to local pool
    }
    typing.remove();
    addMsg(text, 'bot');
    speak(text);
  }

  const hr = new Date().getHours();
  const nightGreeting = "late night, huh? neend puri karlo aaram se — bas thodi der aur baat karlo phir so jaana 🌙";
  addMsg(hr >= 22 || hr < 5 ? nightGreeting : "hi! I'm reet.ai — ask me anything (I mostly know things about you).", 'bot');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    addMsg(text, 'user');
    input.value = '';
    reply(text);
  });
}

/* ═══════════ APP: REETNET BROWSER ═══════════ */
/* A fake in-OS browser (GTA-V-phone style) — a few static "sites",
   nothing fetched from the real internet. */
function initBrowser(win) {
  const urlEl = win.querySelector('#brUrl');
  const page = win.querySelector('#brPage');
  const tabs = win.querySelectorAll('.br-tab');

  const SEARCH_JOKES = [
    'Results for "{q}": did you mean "reet is the best"?',
    '"{q}" — 0 results. have you tried texting them instead?',
    'Top result for "{q}": a friendship that has never once been boring.',
    'Searching "{q}"… found 1 match: you, overthinking this.',
    '"{q}" — no results, but here\'s a fact: you are loved. that\'s free with every search.',
  ];

  const SITES = {
    search: () => {
      const wrap = document.createElement('div');
      wrap.className = 'br-search';
      wrap.innerHTML = `
        <div class="br-search-logo">ReetSearch</div>
        <form class="br-search-form" id="brSearchForm">
          <input type="text" id="brSearchInput" placeholder="search anything…" maxlength="80" autocomplete="off">
          <button type="submit" class="sh-btn">go</button>
        </form>
        <div class="br-search-results" id="brSearchResults"></div>`;
      const form = wrap.querySelector('#brSearchForm');
      const results = wrap.querySelector('#brSearchResults');
      form.addEventListener('submit', e => {
        e.preventDefault();
        const q = wrap.querySelector('#brSearchInput').value.trim();
        if (!q) return;
        const line = SEARCH_JOKES[Math.floor(Math.random() * SEARCH_JOKES.length)].replace('{q}', q);
        const r = document.createElement('div');
        r.className = 'br-result';
        r.textContent = line;
        results.prepend(r);
      });
      return wrap;
    },
    social: () => {
      const posts = [
        { u: '@bestie_official', t: 'reminder that being friends with reet is a certified privilege 🎀' },
        { u: '@random_thoughts', t: 'sent a 3am text expecting no reply, got a full essay back. she never disappoints.' },
        { u: '@nostalgia_alert', t: 'found an old photo. we looked unhinged. we still do. nothing has changed.' },
        { u: '@unpopular_opinion', t: 'inside jokes from 2013 are still funnier than anything on TV.' },
      ];
      const wrap = document.createElement('div');
      wrap.className = 'br-social';
      posts.forEach(p => {
        const post = document.createElement('div');
        post.className = 'br-post';
        const u = document.createElement('div');
        u.className = 'br-post-user';
        u.textContent = p.u;
        const t = document.createElement('div');
        t.className = 'br-post-text';
        t.textContent = p.t;
        post.append(u, t);
        wrap.appendChild(post);
      });
      return wrap;
    },
    news: () => {
      const heads = [
        'LOCAL BESTIE DECLARED "TOO GOOD FOR THIS WORLD", FRIENDS DEMAND PROTECTION',
        'STUDY FINDS: FRIENDSHIP OF THIS DURATION STATISTICALLY SHOULD NOT BE THIS FUNNY',
        'BREAKING: SHE DID THE THING AGAIN AND IT WAS, ONCE MORE, ICONIC',
        'EXPERTS BAFFLED BY FRIENDSHIP THAT HAS SURVIVED EVERYTHING, INCLUDING THEIR OWN CHAOS',
      ];
      const wrap = document.createElement('div');
      wrap.className = 'br-news';
      heads.forEach(h => {
        const item = document.createElement('div');
        item.className = 'br-news-item';
        item.textContent = h;
        wrap.appendChild(item);
      });
      return wrap;
    },
  };

  function showSite(key) {
    page.innerHTML = '';
    page.appendChild(SITES[key]());
    urlEl.textContent = `reetnet://${key}`;
    tabs.forEach(t => t.classList.toggle('active', t.dataset.site === key));
  }

  tabs.forEach(t => t.addEventListener('click', () => showSite(t.dataset.site)));
  showSite('search');
}

/* ═══════════ APP: THROWBACK ═══════════ */
/* Quotes come from throwback-data.js — a plain array you edit by hand,
   nothing auto-pulled from any chat export. */
function initThrowback(win) {
  const dateEl = win.querySelector('#tbDate');
  const textEl = win.querySelector('#tbText');
  const noteEl = win.querySelector('#tbNote');
  const nextBtn = win.querySelector('#tbNext');
  const pool = typeof THROWBACKS !== 'undefined' ? THROWBACKS : [];

  let last = -1;
  function show() {
    if (!pool.length) {
      textEl.textContent = 'no throwbacks added yet — edit throwback-data.js to add some.';
      dateEl.textContent = ''; noteEl.textContent = '';
      return;
    }
    let i = pool.length === 1 ? 0 : last;
    while (i === last) i = Math.floor(Math.random() * pool.length);
    last = i;
    const t = pool[i];
    dateEl.textContent = t.date || '';
    textEl.textContent = t.text || '';
    noteEl.textContent = t.note || '';
  }

  nextBtn.addEventListener('click', show);
  show();
}

/* ═══════════ APP: SEAL THE PROMISE ═══════════ */
const PROMISES = [
  "I promise to always pick up, even at 2am.",
  "I promise your bad days get to be my problem too — no arguing about it.",
  "I promise I'm not going anywhere. Not again. Not after everything it took to come back.",
  "I promise to remember the small things, even when you think no one's keeping track.",
  "I promise to keep making you feel like you're never too much — because you're not.",
  "I promise Radhe Radhe every night, whether you reply or not.",
  "I promise this friendship stays exactly what it is: permanent, no exit door.",
];

function initPromise(win) {
  const label = win.querySelector('#pmLabel');
  const textEl = win.querySelector('#pmText');
  const sealBtn = win.querySelector('#pmSealBtn');
  const sealAnim = win.querySelector('#pmSealAnim');
  const progressFill = win.querySelector('#pmProgressFill');
  const stepsWrap = win.querySelector('#pmSteps');
  const customWrap = win.querySelector('#pmCustom');
  const customInput = win.querySelector('#pmCustomInput');
  const customBtn = win.querySelector('#pmCustomBtn');
  const certWrap = win.querySelector('#pmCertWrap');
  const canvas = win.querySelector('#pmCertCanvas');
  const downloadBtn = win.querySelector('#pmDownload');
  const restartBtn = win.querySelector('#pmRestart');

  let i = 0;
  let sealing = false;

  function showPromise() {
    label.textContent = `promise ${i + 1} of ${PROMISES.length}`;
    textEl.textContent = PROMISES[i];
    progressFill.style.width = `${(i / PROMISES.length) * 100}%`;
    sealAnim.classList.remove('sealed');
    sealBtn.disabled = false;
    sealBtn.textContent = 'seal it 🤝';
  }

  function seal() {
    if (sealing) return;
    sealing = true;
    sealBtn.disabled = true;
    sealAnim.classList.add('sealed');
    sealBtn.textContent = 'sealed ✓';
    setTimeout(() => {
      sealing = false;
      i++;
      if (i < PROMISES.length) {
        showPromise();
      } else {
        progressFill.style.width = '100%';
        stepsWrap.querySelector('.pm-card').classList.add('hidden');
        customWrap.classList.remove('hidden');
      }
    }, 1100);
  }

  sealBtn.addEventListener('click', seal);

  customBtn.addEventListener('click', () => {
    renderCertificate(customInput.value.trim());
    stepsWrap.classList.add('hidden');
    certWrap.classList.remove('hidden');
  });

  function cssVar(name, fallback) {
    const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return v || fallback;
  }

  function renderCertificate(herPromise) {
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    const pink = cssVar('--pink', '#ff8fb8');
    const lav = cssVar('--lav', '#b79dff');
    const pinkDeep = cssVar('--pink-deep', '#e85a92');

    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, '#fff8fb');
    bg.addColorStop(1, '#f5f1ff');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    ctx.strokeStyle = pink;
    ctx.lineWidth = 6;
    ctx.strokeRect(24, 24, W - 48, H - 48);
    ctx.strokeStyle = lav;
    ctx.lineWidth = 2;
    ctx.strokeRect(38, 38, W - 76, H - 76);

    ctx.textAlign = 'center';
    ctx.fillStyle = pinkDeep;
    ctx.font = '46px Georgia, serif';
    ctx.fillText('🎀', W / 2, 105);

    ctx.font = '30px Georgia, serif';
    ctx.fillStyle = '#6b5169';
    ctx.fillText('Certificate of Friendship', W / 2, 160);

    ctx.font = '16px Georgia, serif';
    ctx.fillStyle = '#9a8398';
    ctx.fillText('This certifies that the friendship between', W / 2, 205);

    ctx.font = 'italic 40px Georgia, serif';
    ctx.fillStyle = pinkDeep;
    ctx.fillText('Reet Kumari  &  Deepak Kumar', W / 2, 260);

    ctx.font = '16px Georgia, serif';
    ctx.fillStyle = '#9a8398';
    ctx.fillText('has been sealed with the following promises —', W / 2, 300);
    ctx.fillText('permanent, no exit door, non-negotiable.', W / 2, 322);

    ctx.textAlign = 'left';
    ctx.font = '14px Georgia, serif';
    ctx.fillStyle = '#6b5169';
    let y = 365;
    PROMISES.slice(0, 5).forEach(p => {
      const line = wrapText(ctx, `🤍 ${p}`, W - 140);
      line.forEach(l => { ctx.fillText(l, 70, y); y += 22; });
      y += 6;
    });

    if (herPromise) {
      ctx.font = 'italic 15px Georgia, serif';
      ctx.fillStyle = pinkDeep;
      const line = wrapText(ctx, `Reet's promise back: "${herPromise}"`, W - 140);
      line.forEach(l => { ctx.fillText(l, 70, y); y += 20; });
    }

    ctx.textAlign = 'center';
    ctx.font = '13px Georgia, serif';
    ctx.fillStyle = '#b09aae';
    const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    ctx.fillText(`sealed on ${dateStr} · reetOS`, W / 2, H - 50);
  }

  function wrapText(ctx, text, maxWidth) {
    const words = text.split(' ');
    const lines = [];
    let cur = '';
    words.forEach(w => {
      const test = cur ? cur + ' ' + w : w;
      if (ctx.measureText(test).width > maxWidth && cur) {
        lines.push(cur);
        cur = w;
      } else {
        cur = test;
      }
    });
    if (cur) lines.push(cur);
    return lines;
  }

  downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'friendship-certificate.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });

  restartBtn.addEventListener('click', () => {
    i = 0;
    sealing = false;
    customInput.value = '';
    certWrap.classList.add('hidden');
    stepsWrap.classList.remove('hidden');
    stepsWrap.querySelector('.pm-card').classList.remove('hidden');
    customWrap.classList.add('hidden');
    showPromise();
  });

  showPromise();
}

/* ═══════════ APP: SECRET (unlocks at 100% quest completion) ═══════════ */
function initSecret(win) {
  const lock = win.querySelector('#secLock');
  const letter = win.querySelector('#secLetter');
  const openBtn = win.querySelector('#secOpenBtn');
  const dateEl = win.querySelector('#secDate');

  dateEl.textContent = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

  openBtn.addEventListener('click', () => {
    lock.classList.add('hidden');
    letter.classList.remove('hidden');
    heartRain();
  });
}


