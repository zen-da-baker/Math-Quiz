import fs from "node:fs";

import { viewsFilePath } from "../server.js";

export async function getHomePage( req: any, res: any ) {

    function fileHandler( error: any, data: string ) {

        if ( error ) {

            console.log( error );

        }

        return res.send( data );

    }

    let file = fs.readFile( viewsFilePath + "/landingPage.html", { encoding: "utf-8" }, fileHandler );

}