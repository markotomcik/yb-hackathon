const { User, Message } = require('../models')

module.exports = {
  async send (socket, msg) {
    try {
      const sender = await User.findOne({
        where: {
          socketId: socket.id
        }
      })
      const receiver = await User.findOne({
        where: {
          id: msg.receiver
        }
      })

      const message = await Message.create({ ...msg, sender: sender.id })

      socket.broadcast.to(receiver.socketId).emit('message', message)
      socket.emit('status', 'Sent')
    } catch (err) {
      socket.emit('error', 'Cannot send message')
    }
  }
}
