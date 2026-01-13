async function serviceWorkerRegistration() {

    const registration = await navigator.serviceWorker.register( "/serviceWorker.js", { scope: "/" } );

    function checkForUpdates() {

        const installBtn = document.getElementById("install-button");

        installBtn.onclick = () => registration.update();

    }

    if ( registration.installing ) {

        console.log( "Service worker is installing." );

    } else if ( registration.waiting ) {

        console.log( "Service worker is waiting." );

    } else if ( registration.active ) {

        console.log( "Service worker is active." );
    
    }

}

serviceWorkerRegistration();