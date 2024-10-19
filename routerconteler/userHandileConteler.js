import connectionDB from "../connnectionDB/connectionDB.js"
import Conversation from "../models/conversationModel.js"
import User from "../models/userModle.js"

export const getUserSearch=async(req,res)=>{

try {
    connectionDB()
    const search=req.query.search
    const currentUserId=req.user._id
    const searchUser=await User.find({
        $and:[{
            fullName:{$regex:search,$options:'i'}
        },
      { _id:{$ne:currentUserId}}]
    }).select('-password').select('-email')

    res.status(200).send(searchUser)
} catch (error) {
    
    res.status(500).send({message:error.message})
}
}

export const currentChatters=async(req,res)=>{
try {
     const currentUserIds=req.user._id
     const currentChatter=await Conversation.find({
        participants:currentUserIds
     }).sort({updatedAt:-1})

     if(!currentChatter || currentChatter.length==0){
        return res.status(200).send([])
     }
const participantsId=currentChatter.reduce((ids,conversations)=>{
const otherParticipat=conversations.participants.filter(id=>id !==currentUserIds)
return [...ids,...otherParticipat]
},[])
console.log('this is the participantsId',participantsId)
const otherParticipatsId=participantsId.filter((id)=>id.toString() !==currentUserIds.toString())

const users=await User.find({_id:{$in:otherParticipatsId}}).select('-password')
res.status(200).send(users)
} catch (error) {
    res.status(500).send({message:error.message})
    console.log(error)
}

}