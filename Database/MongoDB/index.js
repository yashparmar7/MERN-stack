const mongoose = require("mongoose"); //! reqire mongoose

//! connect with mongodb
main()
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

//! create schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

//! Model
const User = mongoose.model("User", userSchema);

//! Insert :
// const user = new User({
//   name: "Yash parmar",
//   email: "yashparmar@example.com",
//   age: 21,
// });

// const user2 = new User({
//   name: "Rahul",
//   email: "rahul@example.com",
//   age: 22,
// });

// user.save();

// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//* insert many

// User.insertMany([
//   {
//     name: "Tony",
//     email: "tony@example.com",
//     age: 25,
//   },
//   {
//     name: "Peter",
//     email: "peter@example.com",
//     age: 26,
//   },
//   {
//     name: "Bruce",
//     email: "bruce@example.com",
//     age: 27,
//   },
// ]).then((res) => {
//   console.log(res);
// });

//! Find :

// User.find({})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.find({ age: { $gt: 25 } })
//   .then((res) => {
//     console.log(res[0].name);
//     console.log(res[0]);
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//* find One
// User.findOne({ age: { $gt: 25 } })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//* find by Id
// User.findById("67f9f51c9f698a74f5fa8ff8")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! update :

//* update one
// User.updateOne({ name: "Bruce" }, { age: 28 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//* update many
// User.updateMany({ age: { $gt: 25 } }, { age: 25 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//* find one and update
// User.findOneAndUpdate({ name: "Peter" }, { age: 29 }, { new: true })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//* find by id and update
// User.findByIdAndUpdate("67f9f51c9f698a74f5fa8ff8", { age: 28 }, { new: true })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! Delete :

//* delete one
// User.deleteOne({ name: "Bruce" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//* delete many
// User.deleteMany({ age: { $gte: 25 } })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//* find one and delete
// User.findOneAndDelete({ name: "Rahul" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//* find by id and delete
User.findByIdAndDelete("67fa089e978760aa1f3f002d")
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
