export async function getHomePage( req: any, res: any ) {

    console.log( req );

    res.send("<h1>Hello World!</h1>");

}