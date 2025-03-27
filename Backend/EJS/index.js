const express = require("express");

const app = express();
const path = require("path"); //* Import the built-in 'path' module to handle file and directory paths

const port = 3030;

app.set("view engine", "ejs"); //* set EJS to show templates(view)

app.set("views", path.join(__dirname, "/views")); //* Set the path for EJS view templates

app.use(express.static(path.join(__dirname, "/public"))); // * for Serving static files
app.use(express.static(path.join(__dirname, "/public/css"))); // * for Serving static files
app.use(express.static(path.join(__dirname, "/public/js"))); // * for Serving static files

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.get("/", (req, res) => {
//   res.send("This is Home");
// });

//! Note : we don't use res.send() methos to send file on browser. we can use res.render() method.

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/hello", (req, res) => {
  res.send("Hello");
});

//! Passing data to EJS
app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { diceVal });
});

//todo :  Instagram EJS (activity)

// app.get("/ig/:username", (req, res) => {
//   const followers = ["yash", "om", "vikash", "darshan", "fenil", "deep"];
//   let { username } = req.params;
//   res.render("instagram.ejs", { username, followers });
// });

//* Using database data
app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  const instaData = require("./data.json");
  const data = instaData[username];
  if (data) {
    res.render("instagram.ejs", { data });
  } else {
    res.render("error.ejs");
  }
});
