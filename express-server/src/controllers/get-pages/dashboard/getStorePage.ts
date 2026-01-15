import fs from "node:fs";

import { viewsFilePath } from "../../../server.js";

export function getStorePage( request: any, response: any, next: any ) {

    let storeFilePath = "/pages/dashboard/store.html";

    function handleFile( error: Error, data: string ) {

        if ( error ) {

            console.log( error );

            return next( error );

        }

        return response.send( data );

    }

    fs.readFile( viewsFilePath + storeFilePath, { encoding: "utf-8" }, handleFile );

}