const { faker } = require("@faker-js/faker");
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

const app = express();

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//!  require mysql2
const mysql = require("mysql2");

//! create connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yash3547",
  database: "test",
});

//! perform query
// let query = "SHOW TABLES";
// connection.query(query, (error, results, fields) => {
//   try {
//     if (error) throw error;
//     console.log(results);
//     console.log(results.length);
//     console.log(results[0]);
//     console.log(results[1]);
//   } catch (e) {
//     console.log(e);
//   }
// });

//! Insert Query
// let q = "INSERT INTO user (id,username,email,password) VALUES ?";
// let users = [
//   ["101", "yash", "yash123@gmail.com", "154793"],
//   ["102", "om", "om235@gmail.com", "248451215"],
// ];
// connection.query(q, [users], (error, results, fields) => {
//   try {
//     if (error) throw error;
//     console.log(results);
//   } catch (e) {
//     console.log(e);
//   }
// });

//! insert data using faker
// let createRandomUser = () => {
//   return [
//     faker.string.uuid(),
//     faker.internet.username(),
//     faker.internet.email(),
//     faker.internet.password(),
//   ];
// };

// let q = "INSERT INTO user (id,username,email,password) VALUES ?";
// let data = [];

// for (i = 1; i <= 100; i++) {
//   data.push(createRandomUser()); // push 100 user data
// }

// connection.query(q, [data], (error, results, fields) => {
//   try {
//     if (error) throw error;
//     console.log(results);
//   } catch (e) {
//     console.log(e);
//   }
// });

//! close connection
// connection.end();

//! express

let port = "8080";

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

//* show number of user count
app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (e) {
    console.log(e);
    res.send("Some error in DB");
  }
});

//* show users
app.get("/user", (req, res) => {
  let q = "SELECT * FROM user";

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      res.render("showuser.ejs", { result });
    });
  } catch (e) {
    console.log(e);
    res.send("Some error in DB");
  }
});

//*  edit username

app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id ='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (e) {
    console.log(e);
    res.send("Some error in DB");
  }
});

//* Update (db) route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formPass != user.password) {
        res.send("WRONG password");
      } else {
        let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});
