//segmento de endpoints para cargta
//1. importar express

const express = require("express");

//2. obtener metodo route() de express, manejar rutas
const router = express.Router();

const User = require("../Domain/Models/user");

router.post("/registro", async (req, res) => {
    try {
      console.log(req.body);
      const result = await User.register(
        req.body.userName,
        req.body.email,
        req.body.password
      );



      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


  router.post("/login", async (req, res) => {
    try {
      console.log(req.body);
      const result = await User.login(
        req.body.correo,
        req.body.password
      );



      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  module.exports = router;