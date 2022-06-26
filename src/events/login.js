/** @format */

module.exports = (io, socket, users) => {
  const login = (data) => {
    users[socket.id] = data;
    io.emit("get_users_online", users);
  };
  socket.on("login:user", login);
};
