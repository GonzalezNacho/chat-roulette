import express from 'express'
import {create, getUsers, login} from '../controlers/users.js'

const router = express.Router()

router.post('/', create)
router.get('/', getUsers)
router.post('/login', login)

export default router