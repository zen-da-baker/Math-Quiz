import { errorPageContents } from "../../helpers/page-contents/errorPageContents.js";

export function getErrorPage( error: Error, request: any, response: any, next: any ) {

    console.error( error.stack );

    return response.status( 500 ).send( errorPageContents );
    
}