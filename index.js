const express=require('express')
const { Server } = require('socket.io')
const {createServer}=require('http')
const cors=require('cors')
const app=express()
const port=process.env.PORT||5000
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    methods:['GET',"POST"],
    credentials:true
}))

const server=new createServer(app)
const io =new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:['GET',"POST"],
        credentials:true
    }
})
app.get('/',async(req,res)=>{
    return res.send('we socket .io server api')
})

io.on('connection',(socket)=>{
    console.log('user connection',socket.id)
    socket.on('message',(data)=>{
        console.log(data)
        io.emit('receve-message',data)
        // socket.broadcast.emit('receve-message',data)
    })
   
    // socket.broadcast.emit('welcome',`welcome to the server id ${socket.id}`)
    socket.on('disconnect',()=>{
        console.log(`user disconnected ${socket.id}`)
    })
})

server.listen(port,()=>{
    console.log(`we sockt server port is now ${port}`)
})