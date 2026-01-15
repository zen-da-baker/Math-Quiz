import fs from "node:fs";

import { viewsFilePath } from "../../../server.js";

export function getSettingsPage( request: any, response: any, next: any ) {

    let settingsFilePath = "/pages/dashboard/settings.html";

    function handleFile( error: Error, data: string) {

        if ( error ) {

            console.log( error );

            return next( error );

        }

        return response.send( data );

    }

    fs.readFile( viewsFilePath + settingsFilePath, { encoding: "utf-8" }, handleFile );

}