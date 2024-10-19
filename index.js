import express from 'express'
import cors from 'cors'
import connectionDB from './connnectionDB/connectionDB.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import router from './routers/routerprovider.js'
import messageRouter from "./routers/messageRouter.js"
import userRoute from "./routers/usersRout.js"
const app=express()
dotenv.config()
const port=process.env.PORT||5000
app.use(express.json())

app.use(cors({
    origin:"http://localhost:5173",
    methods:['GET',"POST"],
    credentials:true
}))
app.use(cookieParser());
app.use('/api/auth',router)
app.use('/api/message',messageRouter)
app.use('/api/users',userRoute)

app.get('/',async(req,res)=>{
    return res.send('we socket .io server api')
})

app.listen(port,()=>{
connectionDB()
    console.log(`we sockt server port is now ${port}`)
})