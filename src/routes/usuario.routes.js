const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload"); 
const autenticar = require("../middlewares/autenticar");

const UsuarioController = require("../controllers/UsuarioController");
const usuarioController = new UsuarioController();

const UsuarioFotoController = require("../controllers/UsuarioFotoController");
const usuarioFotoController = new UsuarioFotoController();

const rota = Router();

const upload = multer(uploadConfig.MULTER);

rota.post("/usuarios", usuarioController.create);
rota.patch("/usuarios/foto", autenticar, upload.single("foto"), usuarioFotoController.create);

module.exports = rota;