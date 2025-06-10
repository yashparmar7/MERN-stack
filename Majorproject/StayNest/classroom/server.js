const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {
  secret: "mysupersecretstring",
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true },
};

app.use(session(sessionOptions));
app.use(flash());

//create middleware
app.use((req, res, next) => {
  res.locals.successMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");
  next();
});

app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  req.session.name = name;
  if (name == "anonymous") {
    req.flash("error", "user doesn't exist!");
  } else {
    req.flash("success", "user registered successfully!");
  }
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.render("page.ejs", { name: req.session.name });
});

// app.get("/reqcount", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }
//   res.send(`the session is called ${req.session.count} times`);
// });

// app.get("/test", (req, res) => {
//   res.send("test success!");
// });

app.listen("3030", () => {
  console.log("server is running on 3030");
});
