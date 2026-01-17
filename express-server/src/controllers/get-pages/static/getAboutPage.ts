// Import page content
import { aboutPageContent } from "../../../helpers/page-contents/aboutPageContents.js";

export function getAboutPage( request: any, response: any, next: any ) {

    return response.send( aboutPageContent );

}