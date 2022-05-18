const { Router } = require("express");

const UsuarioController = require("../controllers/UsuarioController");
const usuarioController = new UsuarioController();

const rota = Router();

rota.post("/usuarios", usuarioController.create);

module.exports = rota;