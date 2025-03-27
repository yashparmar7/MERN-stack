const express = require("express"); // 'express' is a function

//! store express in variable

const app = express(); // calling the 'express' function returns an instance (an object), which we store in a variable

// console.dir(app); // 'app' is an object representing the Express application

//! create port

let port = 3000; // ports are the logical endpoints of a network connection that is used to exchange information between a webserver and a web client.

//! listen port | load server

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//! send request
// app.use((req, res) => {
//   console.log(req);
//   console.log("request received");

//   //! send response
//   res.send("This is a basic Text");  // text response
//   res.send({
//     name: "yash",
//     age: 20,
//     occupation: "Software Developer",
//   });   /// object response

//    res.send("<p><b> Hello! I am yash </b> </p>"); // html response
// });

//! Routing

//*  Send get request response

// app.get("/", (req, res) => {
//   res.send("Hello I am  path root");
// });

// app.get("/apple", (req, res) => {
//   res.send("This is apple path");
// });

// app.get("/banana", (req, res) => {
//   res.send("This is banana path");
// });

// app.get("*", (req, res) => {
//   res.send("this path does not exist");
// });

//*  Send post request response

// app.post("/", (req, res) => {
//   res.send("This is post request");
// });

//! Path Parameter

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  res.send(`Welcome to username: ${username} and Id :${id}`);
});

//! Query String

app.get("/search", (req, res) => {
  let { q } = req.query;
  res.send(`You are searching for : ${q}`);
});
