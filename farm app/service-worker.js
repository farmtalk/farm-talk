self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('farm-talk-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/style.css',
                '/script.js',
                '/manifest.json',
                '/images/logo.png',  // Add other images or assets
                '/images/banner.png',
                '/images/farm.png'
            ]);
        })
    );
});

self.addEventListener('activate', (event) => {
    const cacheWhitelist = ['farm-talk-cache'];

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
