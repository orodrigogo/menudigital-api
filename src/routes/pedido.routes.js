const { Router } = require("express");
const autenticar = require("../middlewares/autenticar");

const PedidoController = require("../controllers/PedidoController");
const pedidoController = new PedidoController();

const rota = Router();

rota.post("/pedidos", autenticar, pedidoController.create);

module.exports = rota;