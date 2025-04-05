const express = require("express");
const app = express();
let port = 8000;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

let posts = [
  {
    id: uuidv4(),
    username: "yashparmar",
    content: "I love coding!",
  },
  {
    id: uuidv4(),
    username: "omgohil",
    content: "Hello! How are you?",
  },
];

//GET ALL POST
app.get("/posts", (req, res) => {
  res.render("index.ejs", {
    posts: posts,
  });
});

// CREATE NEW POST
app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({
    id,
    username,
    content,
  });
  res.redirect("/posts");
});

// GET INDIVIDUAL POST
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs", { post });
});

//UPDATE CONTENT
app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  res.redirect("/posts");
});

//EDIT CONTENT
app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

//DELETE POSTS
app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
});
