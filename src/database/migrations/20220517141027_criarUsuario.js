exports.up = knex => knex.schema
.createTable("usuarios", table => {
    table.increments("id");
    table.text("nome");
    table.text("email");
    table.text("senha");
    table.text("foto");

    table.timestamp("criado_em").default(knex.fn.now());
    table.timestamp("atualizado_em").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("usuarios");