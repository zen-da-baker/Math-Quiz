import { getPageContentHelper } from "../get-page-content/getPageContentHelper.js";

let aboutPagePath = "../../../../views/pages/static/about.html";

let aboutPageContent = await getPageContentHelper( aboutPagePath );

export { aboutPageContent };