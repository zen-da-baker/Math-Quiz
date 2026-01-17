import { getPageContentHelper } from "../get-page-content/getPageContentHelper.js";

let errorPagePath = "../../../../views/pages/static/error-pages/serverErrorPage.html";

let errorPageContents = getPageContentHelper( errorPagePath );

export { errorPageContents };