//segmento de endpoints para cargta
//1. importar express

const express = require("express");

//2. obtener metodo route() de express, manejar rutas
const router = express.Router();

//3. llamas a cartas de Domain/models
const Carta = require("../Domain/Models/cartas");

//4. crear endpoints o rutas

/*
GET: obtiene la liasta de todas las cartas
*/

router.get("/", async (req, res) => {
  const cartas = await Carta.list(); //obtiene toda la coleccion de cartas
  res.status(200).json(cartas); //response manda un status 200 (todo esta bien), status 400(problemas de usuario), status 500(servidor
});

/*
POST: Guarda una carta en la bd 
params signo, valor imagen, color
*/

router.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await Carta.add(
      req.body.signo,
      req.body.valor,
      req.body.imagen,
      req.body.color
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
