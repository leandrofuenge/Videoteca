require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");

//MODULO DE FUNÇÃO: CONEXÃO COM O BANCO DE DADOS

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("📦 Connected to the database!"));

//MODULO DE FUNÇÃO: CRIAÇÃO PORTA

const port = 3333;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`🏃 Backend started at http://localhost:${port}`);
});
