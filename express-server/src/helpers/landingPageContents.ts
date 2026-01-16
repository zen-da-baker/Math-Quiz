import { readFile } from "fs/promises";

import { fileURLToPath } from "url";

import path from "path";

let landingPagePath = "../../../views/pages/static/landingPage.html";

let landingPageContents = "";

try {

    let relativeURL = path.join( import.meta.url, landingPagePath );

    let relativePath = fileURLToPath( relativeURL );

    landingPageContents = await readFile( relativePath, "utf-8" );

} catch( error: any ) {

    console.log( error );

}

export { landingPageContents };