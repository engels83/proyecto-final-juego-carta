//index es el orquestador de las rutas (endpoints)

//para acceder a los recursos de la aplicacion

//importar las apis

const cartaApi = require("./cartas");
const userApi = require("./users");
const matchApi = require("./match");

//1. crear el etodo api que orquesta las rutas
const api = server => {
  server.use("/api/v1/cartas", cartaApi);
  server.use("/api/v1/security", userApi);
  server.use("/api/v1/match", matchApi);
};

//exportar el metodo api

module.exports = api;
