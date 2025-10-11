import express from 'express'
import router from './routes/authRoutes.js'
import connectDB from './config/db.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import logger from '../logger.js'
const app=express()
connectDB()
app.use(express.json())
app.use(cookieParser())
app.use(logger);
app.use(
  cors({
    origin: process.env.CLIENT_URL ,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
)

app.use('/',router)

app.listen(3000,()=>{
    console.log("Server is on 3000")
})


