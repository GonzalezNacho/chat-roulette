import express from 'express'
import {create, getUsers} from '../controlers/users.js'

const router = express.Router()

router.post('/', create)
router.get('/', getUsers)

export default router