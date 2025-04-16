import express from 'express'
const router = express.Router()
import { userControllers } from '../controllers/userControllers.mjs'

router.post('/register', (req, res, next) => {
 console.log(req.sessionID),
 next()
}, userControllers.addUser)
router.post('/login',  userControllers.connectUser)
router.post('/orders',  userControllers.addInfos)
router.get('/afterlogin', (req, res ) => {res.json({id: `${id}`})})
router.get('/testSession', userControllers.addInfos)
   

export default router 