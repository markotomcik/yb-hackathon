const AuthenticationController = require('./controlers/AuthenticationController')
const UserController = require('./controlers/UserController')

const AuthenticationControllerPolicy = require('./policies/AutheticationControllerPolicy')
const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.post('/user/:id/edit',
    isAuthenticated,
    UserController.edit)
}
