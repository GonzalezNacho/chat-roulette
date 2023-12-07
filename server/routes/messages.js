import express from 'express'
import {save, getMessages} from '../controlers/message.js'

const router = express.Router()

router.post('/', save)
router.get('/', getMessages)

export default router