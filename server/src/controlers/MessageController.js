const { Message } = require('../models')

module.exports = {
  async send (req, res) {
    try {
      const message = await Message.create(req.body)
      res.send(message.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'messs'
      })
    }
  }
}
