const { Router } = require("express");

const ProdutoController = require("../controllers/ProdutoController");
const produtoController = new ProdutoController();

const rota = Router();

rota.get("/produto", produtoController.index);
rota.post("/produto", produtoController.create);
rota.get("/produto/:id", produtoController.show);
rota.delete("/produto/:id", produtoController.delete);
rota.put("/produto/:id", produtoController.update);

module.exports = rota;