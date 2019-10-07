//1. obtener importar la libreria express
const express = require("express")();
const http = require("http").Server(express);
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const api = require("./Aplication/Api/");
const viewRoutes = require("./Aplication/Routes");
require("dotenv").config();

//x4 crear las configuraciones de bd
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
};

//3. crear el puerto
const port = 3000;

//x5 conectar a la base de datos a mongoose
mongoose.connect(process.env.MONGO_URL, options);

//x6 usar middleware para interpretar json

express.use(require("express").json());
express.use(bodyParser.urlencoded({ extended: false }));
express.use(bodyParser.json());

//x7 pasar express hacia metodo api
api(express);

// public assets
express.use("/static", require("express").static("public"));

// routes system
express.set("view engine", "pug");
viewRoutes(express);

//importar el channels

/*const channels = require ("./Aplication");
channels(express);*/

//5. crear un listener de; servidor
http.listen(port, () => {
  console.log("servidor inicalizado en http://localhost:" + port);
});
