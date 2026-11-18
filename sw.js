const CACHE = 'mcat-v33';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './equations.js',
  './structures.js',
  './works.js',
  './syllabus.js',
  './logo.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then(r => {
        if (r.ok) {
          const c = r.clone();
          caches.open(CACHE).then(x => x.put(e.request, c));
        }
        return r;
      })
      .catch(() => caches.match(e.request))
  );
});
