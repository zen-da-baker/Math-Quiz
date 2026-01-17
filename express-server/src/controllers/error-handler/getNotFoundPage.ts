import { notFoundPageContents } from "../../helpers/page-contents/notFoundPageContents.js";

export function getNotFoundPage( request: any, response: any ) {

    return response.status( 404 ).send( notFoundPageContents );

}