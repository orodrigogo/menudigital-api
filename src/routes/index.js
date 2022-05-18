const { Router } = require("express");

const produto = require("./produto.routes");
const usuario = require("./usuario.routes");
const autenticar = require("./autenticar.routes");

const rotas = Router();
rotas.use(produto);
rotas.use(usuario);
rotas.use(autenticar);

module.exports = rotas;