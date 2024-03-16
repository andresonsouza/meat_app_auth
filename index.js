const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect("mongodb://mongo:27017/meat-app-auth", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("MongoDB Conectado");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(3000, () => console.log("Server ativo na porta 3000"));
