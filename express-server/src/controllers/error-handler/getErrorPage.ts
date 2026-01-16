export function getErrorPage( error: Error, request: any, response: any, next: any ) {

    console.error( error.stack );

    return response.status( 500 ).send( "<h1>An Error Occured</h1>" );
}