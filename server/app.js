import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import router from './routes/messages.js'
import userControler from './routes/users.js'

const app = express()

//Middleware
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/messages', router)
app.use('/user', userControler)

export default app;