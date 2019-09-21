//1. obtener importar la libreria express
const express = require("express")();

const http = require("http").Server(express);

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

//1.1 donde necesitamos el http de node js como express
//const express = require("http").createexpress(app); //importar libreria http

//x importar la api
const api = require("./Aplication/Api/");

//x2 importar dotenv

require("dotenv").config();

//x4 crear las configuraciones de bd
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
};

//usar path para publicar html
const path = require("path");



//2.1 pasarle los atributos de servidor http
//http.createexpress(app);

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

// 4. crear un metodo GET inicial

express.get("/", (req, res) => {
  res.end("Hola desde web sockets!");

  //res.sendFile(path.join(__dirname,"./views/index.html"));
});

express.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/Administration/admin.html"));
});

express.get("/registro", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/auth/register.html"));
});

express.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/auth/login.html"));
});
//importar el channels

/*const channels = require ("./Aplication");
channels(express);*/

//5. crear un listener de; servidor
http.listen(port, () => {
  console.log("servidor inicalizado en http://localhost:" + port);
});
