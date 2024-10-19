import mongoose from "mongoose";


const messageSchema=mongoose.Schema({

    sinderId:{
 type:mongoose.Schema.Types.ObjectId,
    ref:'users',
require:true
    },
    reciverId:{
 type:mongoose.Schema.Types.ObjectId,
    ref:'users',
require:true
    },

    message:{
        type:String,
        require:true
    },
    conversationId:{
type:mongoose.Schema.Types.ObjectId,
ref:'conversation',
default:[]
    }
},{timestamps:true},{Collection:'message'})

const Message=mongoose.models.message||mongoose.model('message',messageSchema)
export default Message