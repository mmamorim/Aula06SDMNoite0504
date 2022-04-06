const config = require("config");
const express = require("express");

console.log("meu primeiro servidor....");

const app = express();

let port = config.get("server.port");

app.listen(port, function () {
  console.log("Servidor iniciado e escutando na porta " + port);
});
