const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const burgerSchema = new Schema({
  name: String,
  price: Number,
  image: String,
});

const Burger = mongoose.model("Burger", burgerSchema);

module.exports = Burger;
