// all the piece part that make the whole express generator experience
// Installed third party packages
let createError = require("http-errors");
let express = require("express"); // dl
let path = require("path");
let cookieParser = require("cookie-parser"); // dl
let logger = require("morgan"); // dl

// two routes for our main file and user file
let indexRouter = require("../app/routes/index");
let usersRouter = require("../app/routes/users");

// Creates an instance of the express application and stores a reference in the app variable
let app = express();

// view engine setup
app.set("views", path.join(__dirname, "../app/views")); // configure view /view engine to the app ; read more on MVC
// Module is the way we connect to our logic , controller is logic behind our routes, and view are the end pages
app.set("view engine", "ejs"); // npm express -e when generating a b=view

// Series of activations
app.use(logger("dev"));
app.use(express.json()); // data exchange
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public"))); // static routes to access public folder for  the client side
app.use(express.static(path.join(__dirname, "../node_modules")));
app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.log(err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  //in the event of an error we can render the error page
  res.status(err.status || 500);
  res.render("error", { title: "URL/na" });
});

module.exports = app;
