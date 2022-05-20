const { verify } = require("jsonwebtoken");

function autenticar(req, res, next){
    const header = req.headers.authorization;

    if(!header){
        return res.status(401).send("Você não tem um token de acesso válido!");
    }

    const [,token] = header.split(" ");
    const { sub: user_id } = verify(token, "secret");

    req.user = {
        id: user_id
    };

    next();
}

module.exports = autenticar;