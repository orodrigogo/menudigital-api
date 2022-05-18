const banco = require("../database");
const { sign } = require("jsonwebtoken");

class AutenticarController {
    async create(req, res) {
        const { email, senha } = req.body;

        const usuario = await banco("usuarios").where({ email, senha }).first();

        if(!usuario){
            return res.json({ mensagem: "E-mail ou senha inválida"});
        }

        const token = sign({}, 'secret', {
            subject: String(usuario.id),
            expiresIn: '1d'
        });

        return res.json({ usuario, token });
    }
}

module.exports = AutenticarController;