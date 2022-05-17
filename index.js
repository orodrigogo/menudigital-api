const express = require("express");
const rotas = require("./src/routes")

const app = express();
app.use(express.json());
app.use(rotas);

app.listen(3333, () => console.log("Servidor on-line!"));