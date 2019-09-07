//index es el orquestador de las rutas (endpoints)

//para acceder a los recursos de la aplicacion

//importar las apis

const cartaApi = require("./cartas");

//1. crear el etodo api que orquesta las rutas
const api = server =>{
    server.use("/api/v1/cartas",cartaApi);
};

//exportar el metodo api

module.exports= api;