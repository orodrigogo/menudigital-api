const banco = require("../database");
const fs = require("fs");
const path = require("path");
const uploadConfig = require("../configs/upload");

class UsuarioFotoController {
    async create(req, res){
        const user_id = req.user.id;
        const foto = req.file.filename;

        const user = await banco("usuarios").where({ id: user_id }).first();

        if(!user){
            return res.send("Usuário não encontrado!");
        }

        if(user.foto){
            const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, foto);
            
            try {
                await fs.promises.stat(filePath);
            } catch {
                return;
            }

            await fs.promises.unlink(filePath);
        }

        await fs.promises.rename(
            path.resolve(uploadConfig.TMP_FOLDER, foto),
            path.resolve(uploadConfig.UPLOADS_FOLDER, foto)
        );

        await banco("usuarios")
        .where({ id: user_id })
        .update({
             foto,
             atualizado_em: banco.raw("DATETIME('now')")
        });
        
        return res.json();
    }
}

module.exports = UsuarioFotoController;