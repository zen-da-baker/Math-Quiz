import fs from "node:fs";

import { viewsFilePath } from "../../server.js";

import { landingPageContents } from "../../helpers/landingPageContents.js";

export async function getHomePage( request: any, response: any ) {

    return response.send( landingPageContents );

    let landingPageLocation = "/pages/static/landingPage.html";

    function fileHandler( error: any, data: string ) {

        if ( error ) {

            console.log( error );

        }

        return response.send( data );

    }

    fs.readFile( viewsFilePath + landingPageLocation, { encoding: "utf-8" }, fileHandler );

}