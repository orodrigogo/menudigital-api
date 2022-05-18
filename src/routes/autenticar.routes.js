const { Router } = require("express");

const AutenticarController = require("../controllers/AutenticarController");
const autenticarController = new AutenticarController();

const rota = Router();

rota.post("/autenticar", autenticarController.create);

module.exports = rota;