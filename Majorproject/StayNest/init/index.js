const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
  .then((res) => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  const URL = "mongodb://127.0.0.1:27017/staynest";
  await mongoose.connect(URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
