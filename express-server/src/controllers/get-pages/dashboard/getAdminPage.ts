import fs from "node:fs";

import { viewsFilePath } from "../../../server.js";

export async function getAdminPage( request: any, response: any ) {

    let adminPageFilePath = "/pages/dashboard/admin.html";

    function fileHandler( error: any, data: string ) {

        if ( error ) {

            console.log( error );

        }

        return response.send( data );

    }

    fs.readFile( viewsFilePath + adminPageFilePath, { encoding: "utf-8" }, fileHandler);

}