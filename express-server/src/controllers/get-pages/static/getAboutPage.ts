import fs from "node:fs";

import { viewsFilePath } from "../../../server.js";

export function getAboutPage( request: any, response: any, next: any ) {

    let aboutPageFilePath = "/about.html";

    function handleFile( error: Error, pageContent: string ) {

        if ( error ) {

            console.log( error );

            return next( error );

        }

        return response.send( pageContent );

    }

    fs.readFile( viewsFilePath + aboutPageFilePath, { encoding: "utf-8" }, handleFile );
    
}