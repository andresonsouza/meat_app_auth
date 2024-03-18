const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");
const RestaurantModel = require("../models/RestaurantModel");

async function add(n) {
  try {
    for (let i = 0; i < n; i++) {
      const restaurant = new RestaurantModel();
      restaurant.name = faker.company.buzzAdjective();
      restaurant.category = faker.company.catchPhraseAdjective();
      restaurant.deliveryEstimate = faker.number.int();
      restaurant.rating = faker.number.float(2);
      restaurant.imagePath = faker.image.url();
      restaurant.about = faker.company.buzzPhrase();
      restaurant.hours = faker.date.anytime();
      await restaurant.save();
    }
    console.log("Conectado para gerar dados fakers de restaurantes");
  } catch (error) {
    console.log("Erro ao criar restaurantes");
    console.log(error);
  }
}

add(100).then(() => {
  mongoose.disconnect();
});

require('../database/connection');
