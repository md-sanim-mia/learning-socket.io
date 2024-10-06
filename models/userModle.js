import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        unique:true
    },
    gender:{
        type:String,
        require:true,
        enum:['male','female']
    },
    profile:{
        type:String,
        require:true,
        default:''
    }
},
{
timestamps:true
},{

    Collection:'users'
}
)

const User=mongoose.models.users|| mongoose.model('users',userSchema)

export default User