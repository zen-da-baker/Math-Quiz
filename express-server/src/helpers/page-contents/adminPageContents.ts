// Import the page content helper function
import { getPageContentHelper } from "../get-page-content/getPageContentHelper.js";

let adminPagePath = "../../../../views/pages/dashboard/admin.html";

let adminPageContent = await getPageContentHelper( adminPagePath );

export { adminPageContent };