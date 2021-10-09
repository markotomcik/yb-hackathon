module.exports = (sequelize, DataTypes) =>
  sequelize.define('Message', {
    sender: {
      type: DataTypes.STRING
    },
    receiver: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
