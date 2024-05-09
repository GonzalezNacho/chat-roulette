import http from 'http'
import app from './app.js'
import { connectDb, sequelize } from './utils/db.js'
import { Server as socketServer } from 'socket.io'
import { Rooms } from './utils/rooms.js'

const PORT = 4001

const server = http.createServer(app);
const io = new socketServer (server, {
    cors:{
        origin:'*'
    }
})

connectDb()

sequelize.sync().then(() => {
    console.log('\n\t\t\t\t\t\t********************\n\t\t\t\t\t\t*  Tablas creadas  *\n\t\t\t\t\t\t********************\n')
}).catch((error) => {
    console.log('error', error)
})

const rooms = new Rooms();


io.on('connection', (socket) => {
    console.log(`cliente conectado, con el id: ${socket.id}`)

    socket.on('create room', () => {
        socket.join(rooms.crear(socket.id))
    })

    socket.on('join room', () => {
        socket.join(rooms.unirse(socket.id))
    })

    socket.on('message',(message,nickname) => {
        //Envio al resto de clientes 
        const roomDeEsteSocket = Array.from(socket.rooms);
        console.log(`El socket ${roomDeEsteSocket[0]} está enviando mensaje a las siguientes salas: ${roomDeEsteSocket[1]}`);
        
        socket.to(roomDeEsteSocket).emit('message', {
            body: message,
            from: nickname
        })
    })

    socket.on("disconnecting", () => {
        const roomDeEsteSocket = Array.from(socket.rooms);
        if (roomDeEsteSocket[1]) {
            rooms.salir(roomDeEsteSocket[0], roomDeEsteSocket[1]);
            console.log(`El socket ${roomDeEsteSocket[0]} se desconecto de las siguientes salas: ${roomDeEsteSocket[1]}`);
        } else {
            console.log(`El socket ${roomDeEsteSocket[0]} se desconecto`);
        }
    });
})

server.listen(PORT, () => {
    console.log("server running");
});
