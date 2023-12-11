import {Users} from '../models/index.js'
import { Op } from 'sequelize';

const create = async (req, res) => {
    let params = req.body
    Users.findOrCreate({
        where :{
            /*[Op.or]: [
                {email: params.email},                  lo probamos al final
                {user: params.user}
            ]*/
            email: params.email
        },
        defaults: {
            user: params.user,
            name : params.name,
            lastname : params.lastname,
            password : params.password
        }
    })
    .then(([user, created]) => {
        if (created) {
            return res.status(200).send({
                status:'Se creo el usuario correctamente',
                user
            })
        } else {
            return res.status(200).send({
                status:'El usuario ya se encuentra registrado',
                user
            })
        }
    }).catch((error) => {
        return res.status(404).send({
            status:'error',
            message: `no ha sido posible mandar el mensaje: ${error}`
        })
    })
}

const login = async ( req,res) => {
    const params = req.body
    let options = {
        where: { 
            [Op.and]: [
                {email: params.email},
                {password: params.password}
            ]
        },
        attributes:{ exclude: ['createdAt','updatedAt'] }
    }
    await Users.findOne(options)
    .then(( user) => {
        if (user) {
            return res.status(200).send({
                status:'logeo correcto',
                user
            })
        } else {
            return res.status(403).send({
                status:'credenciales incorrectas'
            })
        }
    }).catch((err) => {
        return res.status(500).send({
            status:'Error',
            message: `Error al extraer los datos: ${err}`
        })
    })
}

const getUsers = async ( req,res) => {
    let options = {
        attributes:{ exclude: ['createdAt','updatedAt'] }
    }
    await Users.findAll(options)
    .then(( users) => {
        return res.status(200).send({
            status:'Success',
            users
        })
    }).catch((err) => {
        return res.status(500).send({
            status:'Error',
            message: `Error al extraer los datos: ${err}`
        })
    })
}


export {create, login, getUsers };