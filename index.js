const express = require('express');
const db = require("./db/db");

const app = express();
const router = require('./router');
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
app.use(express());
// app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  db.authenticate()
    .then(() => {
      console.log("Conectados a la DB");
    })
    .catch((error) => {
      console.log("Se ha producido un error: " + error);
    });
})