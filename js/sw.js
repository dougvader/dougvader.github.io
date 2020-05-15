var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/css/styles.css'
/*   '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/data/restaurants.js' */
];

self.addEventListener('install', function(event) {
  console.log('event listener triggered');
  event.waitUntil(
    caches.open('my-site-cache-v1').then(function(cache) {
      console.log('opening existing cache');
      console.log('adding urls to cache');
      return cache.addAll(urlsToCache);
    }));
});
