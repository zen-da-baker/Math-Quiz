import fs from "node:fs";

import { viewsFilePath } from "../../../server.js";

export function getMathGamePage( request: any, response: any ) {

    let gameFilePath = "/pages/dashboard/mathGame.html";

    function handleFile( error: any, data: string ) {

        if ( error ) {

            console.log( error );

        }

        return response.send( data );

    }

    fs.readFile( viewsFilePath + gameFilePath, { encoding: "utf-8" }, handleFile );

}