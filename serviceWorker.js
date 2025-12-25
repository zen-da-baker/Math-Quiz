// List of all file urls for this web application
let knownFilePaths = [
    "/",
    "/index.html",
    "/second.html",
    "/app.js",
    "/serviceWorker.js",
    "/styles/style.css",
    "/manifest.json"
];
// Cache name string
let cacheName = "math-quiz-game-cache-v" + 1;
// Cache all of the website paths using a for loop
async function cacheAllFiles(event) {
    // Open the cache object
    let cache = await self.caches.open(cacheName);
    // Adds all known files to the cache based on their URLs
    knownFilePaths.forEach((path) => {
        cache.add(path);
    });
}
function networkRequest(event) {
    let { request } = event;
    let cacheStorage = self.caches;
    // Handle what is sent in response to the network request from the browser
    event.respondWith(
    // Perform the browser default fetch request first and detect if there is a connection error
    fetch(request).catch((err) => {
        console.log(err);
        // If the method of the request is GET after an error is detected, respond with the cache
        if (request.method === "GET") {
            // Open the cache name and find a match with the request
            return cacheStorage.open(cacheName).then((cache) => {
                // Return the cached response
                return cache.match(request).catch((err) => {
                    console.log(err);
                });
            });
        }
    }));
}
async function addActiveListeners(event) {
    // If the cache has keys, cycle through them
    const cacheKeys = await caches.keys();
    // For each cache key in the list, check if it is current
    cacheKeys.forEach((cacheKey) => {
        // If the cache key is not current, remove it from the cache
        if (cacheKey !== cacheName) {
            caches.delete(cacheKey);
        }
    });
    event.srcElement.clients.claim();
}
self.addEventListener("install", cacheAllFiles);
self.addEventListener("activate", addActiveListeners);
self.addEventListener("fetch", networkRequest);
