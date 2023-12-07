import {Messages} from '../models/index.js'

const save = async (req, res) => {
    let params = req.body
    let message = await Messages.create(params);
    message.message = params.message
    message.from = params.from

    message.save().then((messageStored) => {
        return res.status(200).send({
            status:'Success',
            messageStored
        })
    }).catch((error) => {
        return res.status(404).send({
            status:'error',
            message: `no ha sido posible mandar el mensaje: ${error}`
        })
    })
}

const getMessages = async ( req,res) => {
    let options = {
        attributes:{ exclude: ['createdAt','updatedAt','chatroomId', 'userId'] } //esto hasta que se cree el login
    }
    await Messages.findAll(options)
    .then(( messagesDb) => {
        let messages = messagesDb.sort((a,b) => {
            return b.id - a.id
        })
        return res.status(200).send({
            status:'Success',
            messages
        })
    }).catch((err) => {
        return res.status(500).send({
            status:'Error',
            message: `Error al extraer los datos: ${err}`
        })
    })
}


export {save, getMessages};