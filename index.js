const express = require("express");
const rotas = require("./src/routes");
const uploadConfig = require("./src/configs/upload");

const app = express();
app.use(express.json());
app.use(rotas);

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

app.listen(3333, () => console.log("Servidor on-line!"));