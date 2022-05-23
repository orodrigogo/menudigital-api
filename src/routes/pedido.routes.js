const { Router } = require("express");
const autenticar = require("../middlewares/autenticar");

const PedidoController = require("../controllers/PedidoController");
const ProdutoPedidoController = require("../controllers/ProdutoPedidoController");

const pedidoController = new PedidoController();
const produtoPedidoController = new ProdutoPedidoController();

const rota = Router();

rota.post("/pedidos", autenticar, pedidoController.create);
rota.post("/pedidos/produto", produtoPedidoController.create);
rota.get("/pedidos", produtoPedidoController.index);
rota.put("/pedidos/:id", produtoPedidoController.update);

module.exports = rota;