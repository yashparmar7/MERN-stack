const mongoose = require("mongoose");

const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakechatsapp");
}

let chats = [
  {
    from: "yash",
    to: "ayush",
    message: "Yo bro, what's up?",
    created_at: new Date(),
  },
  {
    from: "ayush",
    to: "yash",
    message: "All good! You tell?",
    created_at: new Date(),
  },
  {
    from: "yash",
    to: "riya",
    message: "Hey Riya, long time no chat!",
    created_at: new Date(),
  },
  {
    from: "riya",
    to: "yash",
    message: "Haha true! How’ve you been?",
    created_at: new Date(),
  },
  {
    from: "yash",
    to: "dev",
    message: "Game night today?",
    created_at: new Date(),
  },
  {
    from: "dev",
    to: "yash",
    message: "You know it! 8PM sharp!",
    created_at: new Date(),
  },
];

Chat.insertMany(chats)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
