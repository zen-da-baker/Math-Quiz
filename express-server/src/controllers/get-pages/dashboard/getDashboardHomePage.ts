// Import Node's file system 
import fs from "node:fs";

// Import the file path for views relative to the server file
import { viewsFilePath } from "../../../server.js";

import { dashboardHomePageContent } from "../../../helpers/page-contents/dashboardHomePageContents.js";
/*
    This controller handler expects a request to the dashboard page and returns the HTML file to that page
*/
export function getDashboardHomePage( request: any, response: any, next: any  ) {

    console.log( dashboardHomePageContent );

    if ( dashboardHomePageContent === "" ) {

        let pageError = new Error( "Page not found" );

        return next( pageError );

    }

    return response.send( dashboardHomePageContent );

    // The relative file path of the dashboard home page HTML file
    let dashboardHomePagePath = "/pages/dashboard/dashboardHome.html";

    function fileHandler( error: any, data: string ) {

        // If an error is encountered while reading the file, log the error
        if ( error ) {

            console.log( error );

        }

        // Send the data in the response
        return response.send( data );

    }

    // Perform a file read on the file path and use the file handler callback function
    fs.readFile( viewsFilePath + dashboardHomePagePath, { encoding: "utf-8" }, fileHandler );

}