const mongoose = require("mongoose");
const { faker } = require('@faker-js/faker');
const PersonModel = require("../models/PersonModel");

async function add(n) {
  try {
    for (let i = 0; i < n; i++) {
      const person = new PersonModel();
      person.name = faker.person.firstName();
      person.country = faker.location.country();
      person.email = faker.internet.email();
      personcompany = faker.company.buzzNoun();
      await person.save();
    }
    console.log("Conectado para gerar dados fakers de usuário");
} catch (error) {
  console.log("Erro ao criar os usuários");
    console.log(error);
  }
}

add(100).then(() => {
  mongoose.disconnect();
});

require('../database/connection');
