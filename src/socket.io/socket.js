/** @format */

const socketIo = require("socket.io");
const login = require("../events/login");
const rooms = require("../events/rooms");
const chat = require("../events/chat");
const users = require("./users");

class SocketService {
  constructor(server) {
    this.io = socketIo(server, {
      cors: {
        origin: process.env.CLIENT_URL,
        methods: ["GET", "POST"],
      },
    });

    const onConnection = (socket) => {
      chat(this.io, socket, users);
      login(this.io, socket, users);
      rooms(this.io, socket);
    };
    this.io.on("connection", onConnection);
  }

  emiter(event, body) {
    if (body) this.io.emit(event, body);
  }
  emitToRoom(room, event, body) {
    if (room) this.io.to(room).emit(event, body);
  }
}

module.exports = SocketService;
