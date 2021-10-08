module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'ybhackathon',
    user: process.env.DB_USER || 'ybhackathon',
    password: process.env.DB_PASS || 'PyDGVfJXPz1xoWez',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      port: '3306'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
