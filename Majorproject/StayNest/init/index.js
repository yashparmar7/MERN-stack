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
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "6849aeb217c7fc6b11d2b13d",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
