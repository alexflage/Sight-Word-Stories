var C = "story-stars-v2";
var FILES = ["./", "index.html", "art.js", "books.js", "manifest.webmanifest", "icon-192.png", "icon-512.png",
  "sets/set2.js", "sets/set3.js", "sets/set4.js", "sets/set5.js", "sets/set6.js", "sets/set7.js", "sets/set8.js", "sets/set9.js", "sets/set10.js"];
self.addEventListener("install", function (e) { e.waitUntil(caches.open(C).then(function (c) { return c.addAll(FILES); })); self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(caches.keys().then(function (k) { return Promise.all(k.filter(function (n) { return n !== C; }).map(function (n) { return caches.delete(n); })); })); self.clients.claim(); });
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request).then(function (r) {
    var cp = r.clone(); caches.open(C).then(function (c) { return c.put(e.request, cp); }).catch(function () {}); return r;
  }).catch(function () {
    return caches.match(e.request).then(function (m) { return m || caches.match("index.html"); });
  }));
});
