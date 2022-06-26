/** @format */

module.exports = (io, socket) => {
  socket.on("request:to:join", (data) => {
    socket.join(data);
  });

  //   io.of("/").adapter.on("join-room", (room, id) => {
  //     const clients = io.sockets.adapter.rooms.get(room);
  //     const clientIds = [];
  //     for (const clientId of clients) {
  //       clientIds.push(clientId);
  //     }
  //     io.to(room).emit("room:clients", clientIds);
  //   });
};
