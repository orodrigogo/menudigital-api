const banco = require("../database");

class UsuarioController {
    async create(req, res){
        const { nome, email, senha, admin } = req.body;

        const usuarioExiste = await banco("usuarios").where({ email }).first();

        if(usuarioExiste){
            return res.json({ mensagem: "Usuário já existe."});
        }
        
        await banco("usuarios").insert({ nome, email, senha, admin });
        
        return res.status(201).json();
    }
}

module.exports = UsuarioController;