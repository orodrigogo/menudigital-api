const banco = require("../database");
const fs = require("fs");
const path = require("path");
const uploadConfig = require("../configs/upload");

class ProdutoFotoController {
    async create(req, res){
        const id = req.params.id;
        const foto = req.file.filename;

        const produto = await banco("produtos").where({ id }).first();

        if(!produto){
            return res.send("Produto não encontrado!");
        }

        if(produto.foto){
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

        await banco("produtos")
        .where({ id })
        .update({
             foto,
             atualizado_em: banco.raw("DATETIME('now')")
        });
        
        return res.json();
    }
}

module.exports = ProdutoFotoController;