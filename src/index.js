/** @format */

const app = require("./app");
const SocketService = require("./socket.io/socket");
const server = require("http").Server(app);

//App listen to a port
server.listen(process.env.PORT, () => {
  console.log("Server is up and running at Port " + process.env.PORT);
});
app.set("socketService", new SocketService(server));
