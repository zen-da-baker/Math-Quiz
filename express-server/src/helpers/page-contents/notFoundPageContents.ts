import { readFile } from "fs/promises";

import { fileURLToPath } from "url";

import path from "path";

let notFoundPagePath = "../../../views/pages/static/error-pages/notFound.html";

let notFoundPageContents = "";

try {

    let relativeURL = path.join( import.meta.url, notFoundPagePath );

    let relativePath = fileURLToPath( relativeURL );

    notFoundPageContents = await readFile( relativePath, "utf-8" );

} catch( error: any ) {

    console.log( error );

}

// This is the string contents of the not found page, read once instead of every time
export { notFoundPageContents };