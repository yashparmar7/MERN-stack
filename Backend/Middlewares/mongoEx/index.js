const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ exteneded: true }));
app.use(methodOverride("_method"));

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakechatsapp");
}

let port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//index route
app.get("/chats", async (req, res) => {
  try {
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
  } catch (err) {
    next(err);
  }
});

//new chat route
app.get("/chats/new", (req, res) => {
  // throw new ExpressError(404, "Page not found!");
  res.render("new.ejs");
});

//create route
app.post("/chats", async (req, res, next) => {
  try {
    const { from, to, message } = req.body;

    const newChat = new Chat({
      from,
      to,
      message,
      created_at: new Date(),
    });
    await newChat.save();
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

//! wrapAsync  :

function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

//show route  //! Example of Async Error Handling
app.get(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
      next(new ExpressError(404, "Chat not found"));
    }
    res.render("edit.ejs", { chat });
  })
);

//edit route
app.get("/chats/:id/edit", async (req, res) => {
  try {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
  } catch (err) {
    next(err);
  }
});

//update route
app.put("/chats/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let { message: newMsg } = req.body;
    let updateMsg = await Chat.findByIdAndUpdate(
      id,
      { message: newMsg },
      { runValidators: true, new: true }
    );
    console.log(updateMsg);
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

//destroy route
app.delete("/chats/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

//! handle mongoose error

const handleError = (err) => {
  console.log("This is validation error.please follow rules");
  console.dir(err.message);
  return err;
};
app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "ValidationError") {
    err = handleError(err);
  }
  next(err);
});

//! error handling middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "Some Error Occurred" } = err;
  res.status(status).send(message);
});
