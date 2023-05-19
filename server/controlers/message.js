import message from '../models/message.js'
import Message from '../models/message.js'

let controller = {
    save: (req, res) => {
        let params = req.body
        let message = new Message()
        message.message = params.message
        message.from = params.from

        message.save((error, messageStored) => {
            if(error || !messageStored) {
                return res.status(404).send({
                    status:'error',
                    message: 'no ha sido posible mandar el mensaje'
                })
            }

            return res.status(200).send({
                status:'Success',
                messageStored
            })
        })
    },

    getMessages:( req,res) => {
        let query = Message.find({})
        query.sort('-_id').exec((error, messages) => {
            if (error) {
                return res.status(500).send({
                    status:'Error',
                    message: 'Error al extraer los datos'
                })
            }

            if (error) {
                return res.status(404).send({
                    status:'Error',
                    message: 'No hay mensajes que mostrar'
                })
            }

            return res.status(200).send({
                status:'Succes',
                messages
            })
        })
    }
}

export default controller;