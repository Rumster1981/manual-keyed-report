self.addEventListener('install',e=>e.waitUntil(caches.open('mkr4').then(c=>c.addAll(['./','index.html','manifest.json','icon.png']))));
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open('mkr4').then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request)))});
