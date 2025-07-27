self.addEventListener('install', function(event) {
  self.skipWaiting();
});
self.addEventListener('fetch', function(event) {
  // Bypass fetch, no caching
});
