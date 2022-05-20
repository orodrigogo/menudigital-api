exports.up = knex => knex.schema
.createTable("pedidos", table => {
    table.increments("id");
    table.text("status").default("aberto");;
    table.integer("user_id").references("id").inTable("usuarios");

    table.timestamp("criado_em").default(knex.fn.now());
    table.timestamp("atualizado_em").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("pedidos");