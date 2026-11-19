/* Network-first service worker: always tries the latest files, falls back to cache offline.
   No version bump needed when you edit equations.js, works.js, etc. */
const CACHE='mcat-daily-v1';
const CORE=['./','index.html','manifest.json','logo.png','equations.js','structures.js','works.js','syllabus.js'];

self.addEventListener('install',e=>{
 e.waitUntil(
  caches.open(CACHE).then(c=>Promise.allSettled(CORE.map(u=>c.add(u)))).then(()=>self.skipWaiting())
 );
});
self.addEventListener('activate',e=>{
 e.waitUntil(
  caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())
 );
});
self.addEventListener('fetch',e=>{
 const req=e.request;
 if(req.method!=='GET'||new URL(req.url).origin!==location.origin)return;
 e.respondWith(
  fetch(req).then(res=>{
   if(res&&res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy));}
   return res;
  }).catch(()=>caches.match(req).then(r=>r||caches.match('index.html')))
 );
});
