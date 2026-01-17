import { readFile } from "fs/promises";

import { fileURLToPath } from "url";

import path from "path";

let errorPagePath = "../../../views/pages/static/error-pages/serverErrorPage.html";

let errorPageContents = "";

try {

    let relativeURL = path.join( import.meta.url, errorPagePath );

    let relativePath = fileURLToPath( relativeURL );

    errorPageContents = await readFile( relativePath, "utf-8");

} catch( error: any ) {

    console.log( error );

}

export { errorPageContents };