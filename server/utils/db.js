import * as dotenv from 'dotenv'
import Sequelize  from 'sequelize'

dotenv.config()

export const sequelize = new Sequelize(
    process.env.DB,                 //nombre de la base de datos
    process.env.USERDB,             //usuario de la base de datos
    process.env.PASSWORDDB,         //contraseña de la base de datos
    {                               //datos de conexion
        host: process.env.HOSTDB,
        port: process.env.PORTDB,
        dialect: 'mysql'
    }
)
export const connectDb = async() => {
    try {
        await sequelize.authenticate()
        console.log('conectado a la base de datos')
    } catch (error) {
        console.log('ERROR:', error)
        return process.exit()
    }
}