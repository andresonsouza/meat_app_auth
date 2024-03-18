const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authapi = require("./routes/authapi");
const restauratapi = require("./routes/restauratapi");
require('dotenv').config();

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/authapi", authapi);
app.use("/restauratapi", restauratapi);

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, () => console.log(`Server ativo na porta ${port}`));

require('./database/connection');