import mongoose from 'mongoose'

let Schema = mongoose.Schema

let messageSchema = new Schema({
    message: String,
    from: String
})

export default mongoose.model('Message', messageSchema)