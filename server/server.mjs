import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import userRoutes  from './routes/userRoutes.mjs'
import dotenv from 'dotenv'


dotenv.config()

const app = express()
const PORT = process.env.PORT


app.use(cors())
app.use(bodyParser.json())

// Routes
app.use('/users', userRoutes)


 






app.listen(PORT, () => {
    console.log(`Listenin on port: ${PORT}`)
})