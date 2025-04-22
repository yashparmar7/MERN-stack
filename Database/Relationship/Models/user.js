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
  addresses: [
    {
      _id: false,
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
  const user = new User({
    username: "Om Gohil",
    addresses: [
      {
        location: "123 Main St",
        city: "AnTown",
      },
    ],
  });
  user.addresses.push({
    location: "456 Another St",
    city: "OtherTown",
  });
  let result = await user.save();
  console.log(result);
};

addUsers();
