var express = require("express"); // install express
var router = express.Router(); // Create a new router

// Making a get request ; res.render - render a page and pass an object with a value
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Portfolio",
    name: "Farouk Oladega",
    field: "Full Stack Developer",
  });
});

/* GET home page. */
router.get("/home", function (req, res, next) {
  res.render("index", {
    title: "Portfolio",
    name: "Farouk Oladega",
    field: "Full Stack Developer",
  });
});

/* GET About me page */
router.get("/about", function (req, res, next) {
  res.render("about", {
    title: "About Me",
    name: "Farouk Oladega",
    field: "Full Stack Developer",
    industry: "Web Development",
    skill: "programming",
    principles: "hardwork and discipline",
    hobby1: "basketball",
    hobby2: "reading books",
  });
});

/* GET Projects page */
router.get("/projects", function (req, res, next) {
  res.render("projects", {
    title: "My Projects",
    project1: "Guess The Number",
    project2: "Play Dice",
    project3: "Real Estate",
  });
});

/* GET Services page */
router.get("/services", function (req, res, next) {
  res.render("services", {
    title: "Services",
    services1: "Web Development ",
    services2: "Mobile App Development",
    services3: "Programming",
  });
});

/* GET Contact page */
router.get("/contact", function (req, res, next) {
  res.render("contact", {
    title: " Contact",
    address: " 123 Xyz Street",
    phone: " 416-888-3476",
    email: " foladega@my.centennialcollege.ca",
  });
});

/* GET Submit Form page */
router.post("/submitForm", function (req, res, next) {
  res.redirect("/");
});

/* GET Submit Form page */
router.post("/submitForm", function (req, res, next) {
  res.redirect("/home");
});
//
module.exports = router;
