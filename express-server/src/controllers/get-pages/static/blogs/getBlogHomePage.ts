import fs from "node:fs";

import { viewsFilePath } from "../../../../server.js";

export function getBlogHomePage( request: any, response: any, next: any ) {

    let blogHomePageFilePath = "/pages/static/blog/blogHome.html";

    function handleFunction( error: Error, pageContent: string ) {

        if ( error ) {

            console.log( error );

            return next( error );

        }

        return response.send( pageContent );

    }

    fs.readFile( viewsFilePath + blogHomePageFilePath, { encoding: "utf-8" }, handleFunction );

}