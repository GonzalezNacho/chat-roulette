import http from 'http'
import app from './app.js'
import { connectDb, sequelize } from './utils/db.js'
import { Server as socketServer } from 'socket.io'

const PORT = 4001

const server = http.createServer(app);
const io = new socketServer (server, {
    cors:{
        origin:'*'
    }
})

connectDb()

sequelize.sync().then(() => {
    console.log('\n\t\t\t\t\t\t******************\n\t\t\t\t\t\t* Tablas creadas *\n\t\t\t\t\t\t******************\n')
}).catch((error) => {
    console.log('error', error)
})

let rooms = 0;
/*TODO: arreglar lo de los rooms*/ 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


io.on('connection', (socket) => {
    console.log(socket.id)
    console.log('cliente conectado')

    socket.on('create room', () => {
        const thisRoom = "room" + rooms
        socket.join("room" + rooms)
        rooms++;
    })

    socket.on('join room', () => {
        const thisRoom = "room" + rooms
        socket.join('room' + getRandomInt(rooms))
    })

    socket.on('message',(message,nickname) =>{
        //Envio al resto de clientes 
        const roomDeEsteSocket = Array.from(socket.rooms);
        console.log('El socket está en las siguientes salas:', roomDeEsteSocket[1]);
        
        socket.to(roomDeEsteSocket).emit('message', {
            body: message,
            from: nickname
        })
    })
})

server.listen(PORT, () => {
    console.log("server running");
});
