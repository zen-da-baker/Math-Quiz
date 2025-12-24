// List of all file urls for this web application
let knownFilePaths: Array<string> = [
    self.location.origin + "/",
    self.location.origin + "/build/app.js",
    self.location.origin + "/build/serviceWorker.js",
    self.location.origin + "/styles/style.css",
    self.location.origin + "/index.html",
    self.location.origin + "/manifest.json"
]

// Cache name string
let cacheName: string = "math-quiz-game-cache";

async function cacheAllFiles() {

    // Gets the cache storage object
    let cacheStorage = self.caches;

    // Opens the cache object from the cache name
    let cache = await cacheStorage.open( cacheName );

    // Adds all known files to the cache based on their URLs
    cache.addAll( knownFilePaths );

}

async function networkRequest( event: any ) {

    console.log( event );

    let cacheStorage = self.caches;

    let cache = await cacheStorage.open( cacheName );

    let matchObject = await cache.match( event.request );

    console.log( matchObject );

    event.respondWith(

        matchObject

    )

}

addEventListener( "install", cacheAllFiles );

cacheAllFiles();

function addActiveListeners( event: any ) {

    console.log( event );

}

addEventListener( "fetch", networkRequest );

self.addEventListener( "activate", addActiveListeners );

