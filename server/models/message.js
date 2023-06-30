const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../utils/db')

class Messages extends Model{ }

Messages.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    messages: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    from:{
        type: DataTypes.STRING(200),
        allowNull: false
    }
}, {
    sequelize,
    underscored:true,
    modelName: 'messages'
})

module.exports = Messages