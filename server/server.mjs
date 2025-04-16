import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import userRoutes  from './routes/userRoutes.mjs'
import productsRoutes  from './routes/productsRoutes.mjs'
import crypto from 'crypto'
import dotenv from 'dotenv'
import session from 'express-session'


dotenv.config()

const app = express()
const PORT = process.env.PORT
const secretKey = crypto.randomBytes(64).toString('hex');


app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(bodyParser.json())

app.use(session({
    secret: secretKey,
    saveUninitialized: false,
    resave: false,
    cookie: { 
        httpOnly: true,  
        secure: false, // true en PROD
        sameSite: 'strict',  
        maxAge: 60000 * 10 
    }
}));
 // CREEE DES QUE USER FAIT REQUETE HTTP


// Routes
app.use('/users', userRoutes)
app.use('/products', productsRoutes )

 






app.listen(PORT, () => {
    console.log(`Listenin on port: ${PORT}`)
})