import express from 'express'
import morgan from 'morgan'
import { Server as socketServer } from 'socket.io'
import http from 'http'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import * as dotenv from 'dotenv'
dotenv.config()

//Configuracion mongoose
const url = process.env.URL
mongoose.Promise = global.Promise

const app = express()
const PORT = 4001

//Server HTTP
const server = http.createServer(app)
const io = new socketServer (server, {
    core:{
        origin:'*'
    }
})

//Middleware
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//Conexion BD 
mongoose.connect(url,{useNewUrlParser: true}).then(() => {
    console.log ('Conexion exitosa a la base de datos')
    server.listen(PORT, () => {
        console.log('Servidor escuchando en el puerto: ', PORT)
    })
})