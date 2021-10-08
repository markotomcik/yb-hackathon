module.exports = (sequelize, DataTypes) =>
  sequelize.define('Message', {
    from: {
      type: DataTypes.STRING,
      allowNull: false
    },
    to: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
