function easyRand() {
    return Math.floor(Math.random() * 10);
}

function mediumRand() {
    return Math.floor(Math.random() * 100);
}

function hardRand () {
    return Math.floor(Math.random() * 1000);
}

function veryHardRand () {
    return Math.floor(Math.random() * 10000);
}


export { easyRand, mediumRand, hardRand, veryHardRand };