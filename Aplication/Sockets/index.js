function channels(server) {
  // llamar a socket io
  const io = require("socket.io")(server);

  //connect
  io.on("connect", socket => {
    console.log(`Cliente conectado ${socket.client.id}`);

    // crear evento de la sala (join to room)
    socket.on("unir:sala", (room, auth) => {
      // validate user is auth

      socket.join(room);

      // save

      console.log(
        `El cliente: ${socket.client.id} se ha unido a la sala: ${room}`
      );
    });

    socket.on("mensaje:room", ({ room, message }) => {
      console.log(
        `En la sala ${room} se ha dicho/enviado: ${JSON.stringify(message)}`
      );

      // enviar una respuesta a los sockets conectados
      io.to(room).emit("mensaje:room:respuesta", message);
    });

    // socket disconnect
    socket.on("disconnect", () => {
      console.log(`Cliente desconectado ${socket.client.id}`);
    });
  });
}

module.exports = channels;
