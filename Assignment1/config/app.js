// This is  a setup for an Express.js application. It includes the importation of necessary packages, configuration of middleware, and routing for handling HTTP requests and rendering views
//it contains all  all the piece part that make the whole express generator experience
// Installed third party packages

// Importing different packages
let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");

// Import two custom route files for the main application and user-specific routes.
let indexRouter = require("../app/routes/index");
let usersRouter = require("../app/routes/users");

// Creates an instance of the express application and stores a reference in the app variable
let app = express();

// Configure the view engine and views directory for rendering dynamic content.
app.set("views", path.join(__dirname, "../app/views")); // configure view /view engine to the app ;
app.set("view engine", "ejs"); // npm express -e when generating a view

// Series of middleware activations for various functionalities.
// `app.use` is a method used to mount middleware functions in an Express application. Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the `next` function in the application's request-response cycle.

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public"))); // Serve static files from the 'public' directory for client-side assets.
app.use(express.static(path.join(__dirname, "../node_modules"))); // Serve static files from the 'node_modules' directory.

// Define route handlers for the main application ("/") and user-specific ("/users") routes.
app.use("/", indexRouter);
app.use("/users", usersRouter);

// Middleware for handling 404 errors (resource not found).
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handling middleware for handling errors.
app.use(function (err, req, res, next) {
  console.log(err);

  // Set locals for error messages, providing error details in development mode.
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Render the error page with an appropriate HTTP status code (default to 500).
  res.status(err.status || 500);
  res.render("error", { title: "URL/na" });
});

// Export the 'app' instance to make it available for other parts of the application.
module.exports = app;
