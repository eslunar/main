self.addEventListener("install", event => {
    console.log("installing...");
    event.waitUntil(
        caches
            .open("playscript")
            .then(cache => {
                return cache.addAll([location.origin]);
            })
            .catch(err => console.log(err))
    );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return fetch(event.request).then((response) => {
        let responseClone = response.clone();
        caches.open('cache').then((cache) => {
          cache.put(event.request, responseClone);
        });

        return response;
      }).catch(() => {
        return resp || new Response("not found",{status:404})});
      })
    )})
