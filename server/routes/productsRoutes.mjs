import express from 'express'
import { productsControllers } from '../controllers/productsController.mjs'
const router = express.Router()

router.get('/', productsControllers.getProducts)



export default router 
