/* Minimal service worker — exists only so Chrome/Android will treat this as
   an installable app. Deliberately does NOT cache photos/videos/music (many
   hundred MB); it only pre-caches the tiny app shell, and otherwise gets out
   of the way and lets every request go straight to the network. */
const SHELL_CACHE = 'reetos-shell-v2';
const SHELL_FILES = [
  './index.html', './style.css', './script.js',
  './music-data.js', './video-data.js', './manifest.json',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(SHELL_CACHE)
      .then(cache => cache.addAll(SHELL_FILES))
      .catch(() => {})   // don't fail install over one missing file
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== SHELL_CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  const isShell = SHELL_FILES.some(f => url.pathname.endsWith(f.replace('./', '/')));
  if (!isShell) return;   // media, fonts, everything else: network as normal

  event.respondWith(
    fetch(event.request)
      .then(res => {
        const copy = res.clone();
        caches.open(SHELL_CACHE).then(c => c.put(event.request, copy));
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});
