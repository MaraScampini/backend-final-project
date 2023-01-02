const express = require('express');
const db = require("./db/db");

const app = express();
const router = require('./router');
const { sequelize } = require("./models/index");
const PORT = process.env.PORT || 3000;
const cors = require("cors");
//Config Cors Options
var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  // sequelize.sync({force: true})
  db.authenticate()
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((error) => {
      console.log("Error: " + error);
    });
})