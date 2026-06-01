// Bump this whenever you deploy — old caches are auto-deleted on activate.
const CACHE = 'log-analyser-v2-2026.06.01';
const ASSETS = [
  '/log-analyser/',
  '/log-analyser/index.html',
  '/log-analyser/icon-192.png',
  '/log-analyser/icon-512.png',
  '/log-analyser/manifest.json',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Network-first for the app shell + dictionary so users always get the
// latest version when online; fall back to cache when offline.
// Cache-first for static icons/manifest (rarely change).
const NETWORK_FIRST = ['/index.html', '/error-signatures.json', '/log-analyser/', '/log-analyser/index.html', '/log-analyser/error-signatures.json'];

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const isNetworkFirst = NETWORK_FIRST.some(p => url.pathname === p || url.pathname.endsWith(p));

  if (isNetworkFirst) {
    e.respondWith(
      fetch(e.request).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(()=>{});
        return res;
      }).catch(() => caches.match(e.request))
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request))
    );
  }
});
