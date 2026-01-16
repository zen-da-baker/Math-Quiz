export function getNotFoundPage( request: any, response: any ) {

    return response.status( 404 ).send( "<h1>Page Not Found</h1>" );
    
}