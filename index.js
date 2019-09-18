//1. obtener importar la libreria express
const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

//1.1 donde necesitamos el http de node js como server
//const server = require("http").createServer(app); //importar libreria http

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

//2. instanciar el servidor express
const server = express();

//2.1 pasarle los atributos de servidor http
//http.createServer(app);

//3. crear el puerto

const port = 3000;

//x5 conectar a la base de datos a mongoose
mongoose.connect(process.env.MONGO_URL, options);

//x6 usar middleware para interpretar json

server.use(express.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

//x7 pasar server hacia metodo api
api(server);

// 4. crear un metodo GET inicial

server.get("/", (req, res) => {
  res.end("Hola desde web sockets!");

  //res.sendFile(path.join(__dirname,"./views/index.html"));
});

server.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/Administration/admin.html"));
});
//importar el channels

/*const channels = require ("./Aplication");
channels(server);*/

//5. crear un listener de; servidor
server.listen(port, () => {
  console.log("servidor inicalizado en http://localhost:" + port);
});
