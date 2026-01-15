// Import Express framework
import express from "express";

// Import conroller functions
import { getDashboardHomePage } from "../get-pages/dashboard/getDashboardHomePage.js";
import { getAdminPage } from "../get-pages/dashboard/getAdminPage.js";
import { getMathGamePage } from "../get-pages/dashboard/getMathGamePage.js";
import { getSettingsPage } from "../get-pages/dashboard/getSettingsPage.js";

const dashboardRouter = express.Router();

dashboardRouter.get( "/", getDashboardHomePage );

dashboardRouter.get( "/admin", getAdminPage );

dashboardRouter.get( "/math-game", getMathGamePage );

dashboardRouter.get( "/settings", getSettingsPage );

export { dashboardRouter };