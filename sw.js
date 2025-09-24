```javascript
const CACHE_NAME = 'lunch-recommender-v1';
const FILES_TO_CACHE = [
'/',
'index.html',
'images/background.jpg',
'images/recommend_background.jpg',
'images/manage_background.jpg',
'images/placeholder.png',
'images/icon-192.png',
'images/icon-512.png',
'images/kimchi_jjigae.jpg',
'image": "images/bossam.jpg',
'images/bibimbap.jpg',
'images/tteokbokki.jpg',
'images/jjaguli.jpg',
'images/kimbap.jpg',
'images/gukbap.jpg',
'images/noodle.jpg',
'images/shabushabu.jpg',
'images/dakgalbi.jpg',
'images/maratang.jpg',
'images/jjajangmyeon.jpg',
'images/jjamppong.jpg',
'images/mandu.jpg',
'images/donkkaseu.jpg',
'images/ramen.jpg',
'images/salmon.jpg',
'images/udon.jpg',
'images/donburi.jpg',
'images/pasta.jpg',
'images/hamburger.jpg',
'images/pizza.jpg',
'images/salad.jpg',
'images/sandwich.jpg'
//
];
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
```