const banco = require("../database");

class ProdutoController {
    async create(req, res) {
        const { nome, valor } = req.body;

        await banco("produtos").insert({
            nome,
            valor
        }); 
        
        res.status(201).json();
    }

    async update(req, res){
        const { id } = req.params;
        const { nome, valor } = req.body;
    
        const produto = await banco("produtos").where({ id }).first();
    
        if(!produto){
            return res.status(404).send("Produto não cadastrado!");
        }
    
        produto.nome = nome;
        produto.valor = valor;
    
        await banco("produtos").where({ id }).update(produto);
        res.send("Produto atualizado!");
    }

    async delete(req, res){
        const { id } = req.params;

        await banco("produtos").where({ id }).delete();
        
        res.send("Produto deletado!");
    }

    async index(req, res){
        const resultado = await banco("produtos");

        res.json(resultado);
    }

    async show(req, res){
        const { id } = req.params;

        const produto = await banco("produtos").where({ id }).first();
        
        res.json(produto);
    }
}

module.exports = ProdutoController;