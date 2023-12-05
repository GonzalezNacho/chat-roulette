import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../utils/db.js'

class Users extends Model{

    getFullname() {
        return [this.name, this.lastname].join(' ');
    }
}

Users.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    user: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(200),
        allowNull: false
    }
}, {
    sequelize,
    underscored:true,
    modelName: 'users'
})

export {Users};