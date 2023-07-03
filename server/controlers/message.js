import Messages from '../models/message.js'

let controller = {
    save: async (req, res) => {
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
                message: 'no ha sido posible mandar el mensaje'
            })
        })
    },

    /* 
    En la version nueva de Mongoose
    en el exec() y el save() no se puede usar un callback
    */
    getMessages:( req,res) => {
        let query = Message.find({})
        query.sort('-_id').then(( messages) => {
            return res.status(200).send({
                status:'Success',
                messages
            })
        }).catch((err) => {
            return res.status(500).send({
                status:'Error',
                message: 'Error al extraer los datos'
            })
        })
    }
}

export default controller;