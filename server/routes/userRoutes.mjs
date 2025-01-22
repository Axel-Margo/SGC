import express from 'express'
const router = express.Router()
import { userControllers } from '../controllers/userControllers.mjs'

router.post('/register', userControllers.addUser)
router.post('/login', userControllers.connectUser)

   

export default router 