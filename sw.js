const CACHE_NAME = "dom-bosco-cache-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/script.js",
  "./img/dom-bosco.png",
  "./img/dom-bosco1.jpg",
  "./img/dom-bosco2.jpg",
  "./img/dom-bosco3.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js")
            .then(() => console.log("Service Worker registrado"))
            .catch(err => console.log("Erro SW:", err));
    });
}