const RestaurantModel = require("../models/RestaurantModel");

module.exports = {
  all: function (req, res) {
    RestaurantModel.find({})
      .lean()
      .exec(function (err, restaurants) {
        if (err) return res.json([]);
        return res.json(restaurants);
      });
  },
};
