// Bump VERSION whenever any app file changes. Installed copies will
// show "Update available" and only switch when the user taps Update.
const VERSION = 'v1.2.0';
const CACHE = 'rep-forms-' + VERSION;
const FILES = ['./', './index.html', './forms.js', './manifest.webmanifest',
               './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  // no skipWaiting(): the new version waits until the user chooses to update
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k.startsWith('rep-forms-') && k !== CACHE).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()));
});

self.addEventListener('message', e => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
  if (e.data === 'GET_VERSION') e.source.postMessage({ version: VERSION });
});

// Offline-first: always answer from the cache, never from the network.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit =>
      hit || (e.request.mode === 'navigate' ? caches.match('./index.html') : fetch(e.request)))
  );
});
