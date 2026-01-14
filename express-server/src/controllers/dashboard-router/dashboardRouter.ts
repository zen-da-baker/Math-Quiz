// Import Express framework
import express from "express";

// Import conroller functions
import { getDashboardHomePage } from "../get-pages/dashboard/getDashboardHomePage.js";

const dashboardRouter = express.Router();

dashboardRouter.get( "/", getDashboardHomePage );

export { dashboardRouter };