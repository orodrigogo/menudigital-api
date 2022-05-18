exports.up = knex => knex.schema
.createTable("produtos", table => {
    table.increments("id");
    table.text("nome");
    table.text("descricao");
    table.decimal("valor");
    table.text("foto");

    table.timestamp("criado_em").default(knex.fn.now());
    table.timestamp("atualizado_em").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("produtos");