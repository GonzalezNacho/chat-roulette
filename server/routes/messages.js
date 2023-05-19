import express from 'express'
import controller from '../controlers/message.js'

const router = express.Router()

router.post('/save', controller.save)
router.get('/messages',controller.getMessages)

export default router