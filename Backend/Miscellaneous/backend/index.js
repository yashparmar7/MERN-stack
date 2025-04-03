const express = require("express");

const app = express();

const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/register", (req, res) => {
  let { username, password } = req.query;
  res.send(`standard GET Request! Welcome to the page ${username}`);
});

app.post("/register", (req, res) => {
  let { username, password } = req.body;
  res.send(`standard POST Request! Welcome to the page ${username}`);
});
