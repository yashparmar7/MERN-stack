const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationship");
}

const orderSchema = new mongoose.Schema({
  item: String,
  price: Number,
});

const customerSchema = new mongoose.Schema({
  name: String,
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order", // model name
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);

const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async () => {
  const customer = new Customer({
    name: "Puja rajput",
  });

  let order1 = await Order.findOne({ item: "Coffee" });
  let order2 = await Order.findOne({ item: "Oil" });

  customer.orders.push(order1);
  customer.orders.push(order2);

  let res = await customer.save();
  console.log(res);
};

// addCustomer();

const findCustomer = async () => {
  let res = await Customer.find({}).populate("orders");
  console.log(res);
};

findCustomer();

const addOrders = async () => {
  let res = await Order.insertMany([
    {
      item: "Coffee",
      price: 299,
    },
    {
      item: "Flour",
      price: 500,
    },
    {
      item: "Oil",
      price: 1950,
    },
  ]);
  console.log(res);
};

// addOrders();
