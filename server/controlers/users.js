import {Users} from '../models/index.js'

const create = async (req, res) => {
    let params = req.body
    let user = await Users.create(params);
    user.name = params.name
    user.lastname = params.lastname
    user.user = params.user
    user.email = params.email
    user.password = params.password

    user.save().then((user) => {
        return res.status(200).send({
            status:'Success',
            user
        })
    }).catch((error) => {
        return res.status(404).send({
            status:'error',
            message: `no ha sido posible mandar el mensaje: ${error}`
        })
    })
}

const getUsers = async ( req,res) => {
    let options = {
        attributes:{ exclude: ['createdAt','updatedAt'] } //esto hasta que se cree el login
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


export {create, getUsers};