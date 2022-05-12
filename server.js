// INSTALLATION PACKAGES
require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const morgan = require("morgan");

// UTILISATION PACKAGES
const app = express();
app.use(cors());
app.use(morgan("dev"));

// BASE
app.get("/", (req, res) => {
  res.json("Bienvenue chez Marvel");
});

// ROUTE PERSONNAGES
app.get("/personnages", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API}`
    );
  } catch (error) {}
  console.log(error.message);
});

// APPEL DU SERVEUR
app.listen(process.env.PORT, () => {
  console.log("Le serveur tourne");
});
