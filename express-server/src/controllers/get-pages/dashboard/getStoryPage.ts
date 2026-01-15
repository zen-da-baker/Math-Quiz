import fs from "node:fs";

import { viewsFilePath } from "../../../server.js";

export function getStoryPage( request: any, response: any, next: any ) {

    let storyFilePath = "/pages/dashboard/story.html";

    function handleFile( error: Error, pageContents: string ) {

        if ( error ) {

            console.log( error );

            return next( error );

        }

        return response.send( pageContents );

    }

    fs.readFile( viewsFilePath + storyFilePath, { encoding: "utf-8" }, handleFile );

}