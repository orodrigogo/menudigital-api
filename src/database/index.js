const knex = require("knex");
const config = require("../../knexfile");

const conexao = knex(config.development);

module.exports = conexao;