import connectionDB from "../connnectionDB/connectionDB.js"
import Conversation from "../models/conversationModel.js"
import Message from "../models/messagesModel.js"
import mongoose from "mongoose"
export const sendMessage=async(req,res)=>{
try {
    connectionDB()
    const {message}=req.body
    const {id:reciverId}=req.params
    const sinderId=req.user._id
    let chats=await Conversation.findOne({ participants:{$all:[sinderId,reciverId]}})
    if(!chats){

        chats=await Conversation.create({
            participants:[sinderId,reciverId]
        })
    }

    const newMessages=new Message({
        sinderId,
        reciverId,
        message,
        conversationId:chats._id
    })

if(newMessages){
    chats.messages.push(newMessages._id)
}

res.send(newMessages)

await Promise.all([chats.save(),newMessages.save()])

} catch (error) {
    console.log(error)
}

}

export const getMessages=async(req,res)=>{

    try {
    const {id:reciverId}=req.params
    const sinderId=req.user._id
    const chats=await Conversation.findOne({ participants:{$all:[sinderId,reciverId]}}).populate('messages')
    if(!chats){
        return res.status(200).send([])
    }

    const message=chats.messages
    res.status(200).send(message)
    } catch (error) {
        console.log(error)
    }
}