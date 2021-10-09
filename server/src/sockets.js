const MessageController = require('./controlers/MessageController')
const UserController = require('./controlers/UserController')

module.exports = (socket) => {
  socket.on('message', (msg) =>
    MessageController.send(socket, msg))

  socket.on('connectToDB', (msg) =>
    UserController.connectToDB(socket, msg))

  socket.on('disconnectFromDB', (msg) =>
    UserController.disconnectFromDB(socket, msg))
}
