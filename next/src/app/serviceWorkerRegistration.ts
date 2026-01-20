export async function serviceWorkerRegistration() {

    if ( "serviceWorker" in navigator ) {

        const registration = await navigator.serviceWorker.register( "/serviceWorker.js", { scope: "/" } );

        if ( registration.installing ) {

            console.log( "Service worker is installing." );

        } else if ( registration.waiting ) {

            console.log( "Service worker is waiting." );

        } else if ( registration.active ) {

            console.log( "Service worker is active." );
        
        }

    }

}