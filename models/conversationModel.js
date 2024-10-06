import mongoose from "mongoose";

const conversationSchema=mongoose.Schema({
    participants:[
{
    type:mongoose.Schema.Types.ObjectId,
    ref:'users'
}
    ],
    messages:[
        {
type:mongoose.Schema.Types.ObjectId,
ref:'message',
default:[]
        }
    ]
},{ timestamps:true},{Collection:'conversation'})

const Conversation=mongoose.models.conversation||mongoose.model('conversation',conversationSchema)

export default Conversation