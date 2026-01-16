import { notFoundPageContents } from "../../helpers/notFoundPageContents.js";

export function getNotFoundPage( request: any, response: any ) {

    return response.status( 404 ).send( notFoundPageContents );

}