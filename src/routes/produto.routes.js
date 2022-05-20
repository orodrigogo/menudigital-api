const { Router } = require("express");

const autenticar = require("../middlewares/autenticar");

const ProdutoController = require("../controllers/ProdutoController");
const produtoController = new ProdutoController();

const rota = Router();

rota.get("/produto", produtoController.index);
rota.get("/produto/:id", produtoController.show);

rota.post("/produto", autenticar, produtoController.create);
rota.delete("/produto/:id", autenticar, produtoController.delete);
rota.put("/produto/:id", autenticar, produtoController.update);

module.exports = rota;