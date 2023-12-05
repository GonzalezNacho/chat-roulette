import {ChatRoom} from './chatRoom.js'
import {Messages} from './message.js'
import {Users} from './users.js'

Messages.belongsTo(ChatRoom)
ChatRoom.hasMany(Messages)

Messages.belongsTo(Users)
Users.hasMany(Messages)


export {Messages,ChatRoom, Users};