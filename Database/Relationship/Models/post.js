const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationship");
}

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
});

const postSchema = new mongoose.Schema({
  content: String,
  like: Number,
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
  //   const user1 = new User({
  //     username: "puja_rajput_9968",
  //     email: "pujarajput9968@gmail.com",
  //   });
  //     await user1.save();

  //   let post1 = new Post({
  //     content: "I love you!",
  //     like: 5800,
  //   });

  //   post1.user = user1;
  //   await post1.save();

  let user = await User.findOne({ username: "puja_rajput_9968" });

  let post2 = new Post({
    content: "Hello Yash",
    like: 8547,
  });

  post2.user = user;
  await post2.save();
};

addData();
