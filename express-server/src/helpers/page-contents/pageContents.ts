import { getPageContentHelper } from "../get-page-content/getPageContentHelper.js";

let adminPagePath = "../../../../views/pages/dashboard/admin.html";

let dashboardHomePagePath = "../../../../views/pages/dashboard/dashboardHome.html";

let leaderboardPagePath = "../../../../views/pages/dashboard/leaderboard.html";

let adminPageContent = await getPageContentHelper( adminPagePath );

let dashboardHomePageContent = await getPageContentHelper( dashboardHomePagePath );

let leaderboardPageContent = await getPageContentHelper( leaderboardPagePath );

export { adminPageContent, dashboardHomePageContent, leaderboardPageContent };