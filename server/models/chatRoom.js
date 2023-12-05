import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../utils/db.js'

class ChatRoom extends Model{}

ChatRoom.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(200),
        allowNull: false
    }
}, {
    sequelize,
    underscored:true,
    modelName: 'chatroom'
})

export  {ChatRoom};