const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload"); 

const autenticar = require("../middlewares/autenticar");

const ProdutoController = require("../controllers/ProdutoController");
const produtoController = new ProdutoController();

const ProdutoFotoController = require("../controllers/ProdutoFotoController");
const produtoFotoController = new ProdutoFotoController();

const rota = Router();
const upload = multer(uploadConfig.MULTER);

rota.get("/produto", produtoController.index);
rota.get("/produto/:id", produtoController.show);

rota.post("/produto", autenticar, produtoController.create);
rota.delete("/produto/:id", autenticar, produtoController.delete);
rota.put("/produto/:id", autenticar, produtoController.update);
rota.patch("/produto/foto/:id", autenticar, upload.single("foto"), produtoFotoController.create);

module.exports = rota;