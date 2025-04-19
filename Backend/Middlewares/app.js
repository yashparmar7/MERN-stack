const express = require("express");
const app = express();

//! middleware

//* logger - morgan
// app.use((req, res, next) => {
//   // res.send("Middleware done!");
//   console.log(req.method, req.path, req.hostname);
//   next();
// });

//todo  Example :
const checkToken =
  ("/api",
  (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
      next();
    } else {
      res.status(401).send("Access denied");
    }
  });

app.get("/api", checkToken, (req, res) => {
  res.send("Hello from API");
});

app.get("/", (req, res) => {
  res.send("Hello, World! /");
});

app.get("/random", (req, res) => {
  res.send("random path");
});

//! Error middleware
app.use((req, res) => {
  res.status(404).send("Page Not found");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
