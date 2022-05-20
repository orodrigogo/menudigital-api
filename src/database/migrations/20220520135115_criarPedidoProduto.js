exports.up = knex => knex.schema
.createTable("pedidos_produtos", table => {
    table.increments("id");
    table.integer("quantidade");
    table.decimal("valor");

    table.integer("pedido_id").references("id").inTable("pedidos");
    table.integer("produto_id").references("id").inTable("produtos");
});

exports.down = knex => knex.schema.dropTable("pedidos_produtos");