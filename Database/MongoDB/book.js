const mongoose = require("mongoose"); //! reqire mongoose

//! connect with mongodb
main()
  .then(() => {
    console.log("connection success");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 20,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: 1,
  },
  discount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["Fiction", "Non-Fiction"],
  },
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
  title: "Harry Potter",
  author: "J.K. Rowling",
  price: 20.99,
});

book1
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });

let book2 = new Book({
  title: "Death Note",
  author: "Tsugumi Ohba",
  price: "15.99",
});

book2
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
