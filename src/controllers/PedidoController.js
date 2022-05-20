const banco = require("../database");

class PedidoController {
    async create(req, res){
        const  usuario_id  = req.user.id;
       
        const [pedido_id] = await banco("pedidos")
        .returning('id')
        .insert({ user_id: usuario_id });
        
        return res.status(201).json({pedido_id});
    }
}

module.exports = PedidoController;