const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../utils/db')

class ChatRoom extends Model{}

ChatRoom.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    users: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    underscored:true,
    modelName: 'chatroom'
})

module.exports = ChatRoom