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

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


io.on('connection', (socket) => {
    console.log(socket.id)
    console.log('cliente conectado')

    socket.on('create room', () => {
        socket.join("room" + rooms)
        rooms++;
    })

    socket.on('join room', () => {
        socket.join('room' + getRandomArbitrary(0, rooms))
    })

    socket.on('message',(message,nickname) =>{
        //Envio al resto de clientes 
        const roomsDeEsteSocket = Object.keys(socket.rooms);
        console.log('El socket está en las siguientes salas:', roomsDeEsteSocket);
        
        socket.broadcast.emit('message', {
            body: message,
            from: nickname
        })
    })
})

server.listen(PORT, () => {
    console.log("server running");
});
