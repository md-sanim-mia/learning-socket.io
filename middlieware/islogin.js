import jwt from 'jsonwebtoken'
import User from '../models/userModle.js'
const isLogin=async(req,res,next)=>{
    try {
        const token=req.cookies.jwt
        if(!token){
return res.status(500).send({message:'user unauthorise'})
        }
const decode=jwt.verify(token,process.env.JWT_SECRICT_ID)

if(!decode){

    return req.status(500).send({message:"User unauthorise invlide token"})
}

const user=await User.findById(decode.userId).select('-password')

if(!user){
    return req.status(500).send({message:"User not found"})
}
req.user=user

next()
    } catch (error) {
        console.log('medileware error ',error)
        res.status(500).send({message:error.message})
    }
}

export default isLogin