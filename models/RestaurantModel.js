const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: String,
  category: String,
  deliveryEstimate: String,
  rating: Number,
  imagePath: String,
  about: String,
  hours: String,
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
