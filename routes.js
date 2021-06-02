const express = require("express");
const routes = express.Router()
const cors = require("cors");

routes.use(cors()); // libera todas as rotas para acesso por origens diferentes

const CarroController = require("./controllers/CarroController");
const UsuarioController = require("./controllers/UsuarioController");
const login = require("./middleware/login")

routes.get("/carros", CarroController.index)
      .post("/carros", CarroController.store);

routes.get("/usuarios", UsuarioController.index)
      .post("/usuarios", UsuarioController.store)
      .post("/login", UsuarioController.login);

module.exports = routes;
