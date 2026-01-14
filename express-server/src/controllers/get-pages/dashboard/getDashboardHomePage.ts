import fs from "node:fs";

import { viewsFilePath } from "../../../server.js";

export async function getDashboardHomePage( request: any, response: any ) {

    let dashboardHomePagePath = "/pages/dashboard/dashboardHome.html";

    function fileHandler( error: any, data: string ) {

        if ( error ) {

            console.log( error );

        }

        return response.send( data );

    }

    fs.readFile( viewsFilePath + dashboardHomePagePath, { encoding: "utf-8" }, fileHandler );

}