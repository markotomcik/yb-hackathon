const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const passwordPattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z[0-9]@$!%*?&]{8,50}$'
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().regex(
        new RegExp(passwordPattern)
      ).required(),
      firstname: Joi.string().required(),
      lastname: Joi.string().required()
    })

    const { error } = schema.validate(req.body)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Zadajte platnú emailovú adresu.'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Zadajte heslo, ktoré je bezpečné.'
          })
          break
        case 'firstname':
          res.status(400).send({
            error: 'Zadajte svoje meno.'
          })
          break
        case 'lastname':
          res.status(400).send({
            error: 'Zadajte svoje priezvisko.'
          })
          break
        default:
          res.status(400).send({
            error: 'Nesprávne registračné údaje.'
          })
      }
    } else {
      next()
    }
  }
}
