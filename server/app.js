import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import router from './routes/messages.js'

const app = express()

//Middleware
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/api', router)

export default app;