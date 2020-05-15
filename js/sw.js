var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/css/styles.css',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/data/restaurants.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-site-cache-v1').then(function(cache) {
      return cache.addAll(urlsToCache);
    }));
});
