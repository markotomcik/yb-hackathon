const AuthenticationController = require('./controlers/AuthenticationController')
const UserController = require('./controlers/UserController')
const MessageController = require('./controlers/MessageController')

const AuthenticationControllerPolicy = require('./policies/AutheticationControllerPolicy')
const isAutheticated = require('./policies/isAuthenticated')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.post('/user/:id/edit',
    isAutheticated,
    UserController.edit)

  app.post('/messages',
    MessageController.send)
}
