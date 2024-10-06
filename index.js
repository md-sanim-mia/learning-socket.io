import express from 'express'
import cors from 'cors'
import connectionDB from './connnectionDB/connectionDB.js'
import dotenv from 'dotenv'
import router from './routers/routerprovider.js'
const app=express()
dotenv.config()
const port=process.env.PORT||5000
app.use(express.json())

app.use(cors({
    origin:"http://localhost:5173",
    methods:['GET',"POST"],
    credentials:true
}))

app.use('/api/auth',router)

app.get('/',async(req,res)=>{
    return res.send('we socket .io server api')
})

app.listen(port,()=>{
connectionDB()
    console.log(`we sockt server port is now ${port}`)
})