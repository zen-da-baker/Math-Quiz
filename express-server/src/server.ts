// Import global modules 
import express from "express";

import morgan from "morgan";

import path from "path";

import { fileURLToPath } from 'node:url';

// Import controllers
import { getHomePage } from "./controllers/get-pages/getHomePage.js";
import { getAboutPage } from "./controllers/get-pages/static/getAboutPage.js";
import { getErrorPage } from "./controllers/error-handler/getErrorPage.js";

// Import router
import { dashboardRouter } from "./controllers/dashboard-router/dashboardRouter.js";
import { blogRouter } from "./controllers/blog-router/blogRouter.js";

// Initiate the app
const app = express();

// Assign the port number
let port = 3000;

// Enable logging using Morgan
app.use( morgan( "dev" ) );

const __filename = fileURLToPath( import.meta.url );
const __dirname = path.dirname( __filename );

// Relative file paths
export const viewsFilePath = path.join(__dirname, "../views");

let clientJavaScriptPath = path.join(__dirname, "../build/client");

// This is a global object variable for storing the visit count and displaying it to the admin
export const visits = { landingPageVisits: 0, adminPageVisits: 0 };

// Allow static files from the views and clientside JavaScript to be accessed by the user requesting a page
app.use( express.static( viewsFilePath + "/public" ) );

app.use( express.static( clientJavaScriptPath) );

// Allow the routes to parse the body of requests when they are JSON
app.use( express.json() );

// App routes
// Static pages
app.get( "/", getHomePage );

app.get( "/about", getAboutPage );

// The dashboard routes
app.use( "/dashboard", dashboardRouter );

// The blog routes
app.use( "/blog", blogRouter );

// Error handler
app.use( getErrorPage );

app.listen(port, () => console.log("App listening to port " + port + "."));