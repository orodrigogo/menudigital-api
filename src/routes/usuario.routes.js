const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload"); 

const UsuarioController = require("../controllers/UsuarioController");
const usuarioController = new UsuarioController();

const rota = Router();

const upload = multer(uploadConfig.MULTER);

rota.post("/usuarios", usuarioController.create);
rota.patch("/usuarios/foto/:id", upload.single("foto"))

module.exports = rota;