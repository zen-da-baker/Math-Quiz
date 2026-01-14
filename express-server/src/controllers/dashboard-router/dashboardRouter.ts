// Import Express framework
import express from "express";

// Import conroller functions
import { getDashboardHomePage } from "../get-pages/dashboard/getDashboardHomePage.js";
import { getAdminPage } from "../get-pages/dashboard/getAdminPage.js";

const dashboardRouter = express.Router();

dashboardRouter.get( "/", getDashboardHomePage );

dashboardRouter.get("/admin", getAdminPage );

export { dashboardRouter };