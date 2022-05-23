const banco = require("../database");
const { Table } = require("knex");

class ProdutoPedidoController {
    async create(req, res){
        const { pedido_id, produtos } = req.body;

        const items = produtos.map(item => {
            return {
                pedido_id,
                produto_id: item.id,
                quantidade: item.quantidade,
                valor: item.valor
            }
        });

        await banco("pedidos_produtos").insert(items);
        
        return res.status(201).json();
    }

    async index(req, res){

        const pedidos = await banco("pedidos").orderBy("criado_em", "desc");

        return res.json(pedidos);
    }

    async update(req, res){
        const { status } = req.body;
        const { id } = req.params;

        await banco("pedidos")
        .where({ id })
        .update({ status, atualizado_em: banco.raw("DATETIME('now')") })

        return res.json();
    }
}

module.exports = ProdutoPedidoController;