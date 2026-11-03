self.addEventListener('install',e=>e.waitUntil(caches.open('mkr1').then(c=>c.addAll(['./','index.html','manifest.json','icon.png']))));
self.addEventListener('fetch',e=>{if(e.request.url.includes('openfoodfacts'))return;e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open('mkr1').then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request)))});
