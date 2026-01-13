export async function getHomePage(req, res) {
    console.log(req);
    res.send("<h1>Hello World!</h1>");
}
