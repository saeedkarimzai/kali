const CACHE_NAME = "kali-web-os-shell-v6";
const CACHE_PREFIX = "kali-web-os-shell-";
const APP_FILES = ["./", "./index.html"];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith((async () => {
    try {
      const response = await fetch(request);
      if (response && response.ok && response.type === "basic") {
        const cacheWrite = caches.open(CACHE_NAME)
          .then(cache => cache.put(request, response.clone()))
          .catch(() => {});
        event.waitUntil(cacheWrite);
      }
      return response;
    } catch (error) {
      const cached = await caches.match(request);
      if (cached) return cached;

      // Use the app shell as an offline fallback only for page navigations.
      if (request.mode === "navigate") {
        const shell = await caches.match(new URL("./index.html", self.location.href).href);
        if (shell) return shell;
      }

      return Response.error();
    }
  })());
});
