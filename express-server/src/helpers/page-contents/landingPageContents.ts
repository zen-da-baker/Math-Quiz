// Import the page content helper function to get the page content for this page
import { getPageContentHelper } from "../get-page-content/getPageContentHelper.js";

// The relative path to the intended file
let landingPagePath = "../../../../views/pages/static/landingPage.html";

// The page content is stored as a global variable after the file reading resolves
let landingPageContent = await getPageContentHelper( landingPagePath );

// Export the page content of the initial landing page
export { landingPageContent };