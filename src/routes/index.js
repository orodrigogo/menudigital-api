const { Router } = require("express");
const produto = require("./produto.routes");

const rotas = Router();
rotas.use(produto);

module.exports = rotas;