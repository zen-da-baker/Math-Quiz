// Import the page contents from the global scope
import { landingPageContent } from "../../helpers/page-contents/landingPageContents.js";

export async function getHomePage( request: any, response: any ) {

    // Send the page contents string to the requesting user
    return response.send( landingPageContent );    

}