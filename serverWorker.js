// sw.js (Service Worker)
const CACHE_NAME = 'media-player-cache-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/videos/sample1.mp4',
  '/music/music01.mp3',
  './manifest.json',
  './serverWorker.js',
  // 加上所有你要離線使用的檔案
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
