// Import the page contents helper function
import { getPageContentHelper } from "../get-page-content/getPageContentHelper.js";

let dashboardHomePagePath = "../../../views/pages/dashboard/dashboardHome.html";

let dashboardHomePageContent = await getPageContentHelper( dashboardHomePagePath );

export { dashboardHomePageContent };