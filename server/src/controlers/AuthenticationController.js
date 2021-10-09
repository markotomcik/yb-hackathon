const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.status(200).send({
        userId: user.id
      })
    } catch (err) {
      res.status(400).send({
        error: 'Táto emailová adresa už je registrovaná.'
      })
    }
  },
  async login (req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'Nesprávne prihlasovacie údaje'
        })
      }

      const isPasswordValid = user.comparePassword(password)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'Nesprávne prihlasovacie údaje.'
        })
      }

      const userJson = user.toJSON()
      res.status(200).send({
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'Nastala chyba pri prihlasovaní.'
      })
    }
  }
}
