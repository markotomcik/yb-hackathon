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
  }
}
