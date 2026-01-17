// Import page content helper function
import { getPageContentHelper } from "../get-page-content/getPageContentHelper.js";

// The relative path for the page content 
let notFoundPagePath = "../../../../views/pages/static/error-pages/notFound.html";

// The content of the page to be displayed when no other page is found
let notFoundPageContents = await getPageContentHelper( notFoundPagePath );

// This is the string contents of the not found page, read once instead of every time
export { notFoundPageContents };