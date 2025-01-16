import express from 'express'
const router = express.Router()
import { userControllers } from '../controllers/userControllers.mjs'

router.post('/', userControllers.addUser)
   

export default router 