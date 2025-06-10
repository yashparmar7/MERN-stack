const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

main()
  .then((res) => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  const URL = "mongodb://127.0.0.1:27017/staynest";
  await mongoose.connect(URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("I am root ");
});

//! add sessions
const sessionOptions = {
  secret: "secretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // 1 week expire
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};
app.use(session(sessionOptions));

//!add flash
app.use(flash());

//! Middleware to show flash msg
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

//! Listings routes
app.use("/listings", listings);

//! Review Route
app.use("/listings/:id/reviews", reviews);

// ! Error for not valid incoming request
// app.all("*", (req, res, next) => {
//   next(new ExpressError(404, "Page Not Found!"));
// });

//! Error Handling Middleware
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("error.ejs", { err });
});

app.listen(8080, () => {
  console.log("server is running on port 8080");
});
