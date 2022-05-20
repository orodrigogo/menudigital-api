const banco = require("../database");

class ProdutoController {
    async create(req, res) {
        const { nome, descricao, valor, foto } = req.body;
        const  user_id = req.user.id;

        const usuario = await banco("usuarios").where({ id: user_id}).first();
        
        if(!usuario.admin){
            return res.send("Usuário não tem permissão.");
        }

        await banco("produtos").insert({
            nome,
            descricao,
            valor,
            foto
        }); 
        
        res.status(201).json();
    }

    async update(req, res){
        const { id } = req.params;
        const { nome, valor, descricao, foto } = req.body;

        const  user_id = req.user.id;

        const usuario = await banco("usuarios").where({ id: user_id}).first();
        
        if(!usuario.admin){
            return res.send("Usuário não tem permissão.");
        }
    
        const produto = await banco("produtos").where({ id }).first();
    
        if(!produto){
            return res.status(404).send("Produto não cadastrado!");
        }
    
        produto.nome = nome;
        produto.valor = valor;
        produto.descricao = descricao;
        produto.foto = foto;
    
        await banco("produtos").where({ id }).update(produto);
        return res.json(produto);
    }

    async delete(req, res){
        const { id } = req.params;
        const  user_id = req.user.id;

        const usuario = await banco("usuarios").where({ id: user_id}).first();
        
        if(!usuario.admin){
            return res.send("Usuário não tem permissão.");
        }

        await banco("produtos").where({ id }).delete();
        
        return res.json();
    }

    async index(req, res){
        const { nome } = req.query;

        const resultado = await banco("produtos").whereLike("nome", `%${nome}%`);

        res.json(resultado);
    }

    async show(req, res){
        const { id } = req.params;

        const produto = await banco("produtos").where({ id }).first();
        
        res.json(produto);
    }
}

module.exports = ProdutoController;