const { User } = require('../models')

module.exports = {
  async edit (req, res) {
    try {
      const user = await User.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      res.send({ ...req.body, returned: !!user })
    } catch (err) {
      res.status(500).send({
        error: 'Chyba pri úprave užívateľa.'
      })
    }
  },
  async connectToDB (socket, msg) {
    try {
      const user = await User
        .findOne({
          where: {
            id: msg.userId
          }
        })
        .then(function (user) {
          if (user) {
            return user.update({ socketId: socket.id })
          } else {
            throw new Error('Nonexisting user')
          }
        })

      socket.emit('status', 'Socket connected to db')
      console.log(user)
    } catch (err) {
      socket.emit('status', 'Socket connection error')
    }
  },
  async disconnectFromDB (socket, msg) {
    try {
      await User.update({ socketId: undefined }, {
        where: {
          id: msg.userId
        }
      })
      socket.emit('status', 'Socket disconnected from db')
    } catch (err) {
      socket.emit('status', 'Socket disconnection error')
    }
  }
}
