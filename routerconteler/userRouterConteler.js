import mongoose from "mongoose"
import connectionDB from "../connnectionDB/connectionDB.js"
import User from "../models/userModle.js"
import bcryptjs from 'bcryptjs'
import jwtToken from "..//utils/jwtwebToken.js"
export const userRegister=async(req,res)=>{
    try {
        connectionDB()
        const {fullName,email,password,gender,profile}=req.body

        const user=await User.findOne({email})

        if(user){

           res.status(500).send({message:'user alredy exist'})
        }
const hashPassword=bcryptjs.hashSync(password,10)
console.log(hashPassword)

        const newUser=new User(
            {
                fullName,email,password:hashPassword,gender,profile
            }
        )

        if(newUser){
            await newUser.save()
            jwtToken(newUser._id,res)
           
        }else{
            res.status(500).send({message:'invlide data'})
        }
       res.status(200).send({
        _id:newUser._id,
        fullName:newUser.fullName,
        email:newUser.email,
        gender:newUser.gender,
        profile:newUser.profile
       })

    } catch (error) {
        console.log(error)

        res.send({message:error.message})
    }
}


export const loginUser=async(req,res)=>{

    try {
        connectionDB()
const {email,password}=req.body


const user=await User.findOne({email})
if(!user){
 return res.status(500).send({message:"email and password not match please try agin"})
}
const comparePass=bcryptjs.compareSync(password,user.password)

if(!comparePass){
    return  res.status(500).send({message:"email and password not match please try agin"})
}
jwtToken(user._id,res)
console.log(user)
res.status(200).send({
        _id:user._id,
        fullName:user.fullName,
        email:user.email,
        gender:user.gender,
        profile:user.profile,
        message:'success fully login'
})
    } catch (error) {
        console.log(error)

        res.send({message:error.message})
    }
}


export const logoutUser=async(req,res)=>{
try {
    res.cookie('jwt','',{
        maxAge:0
    })
    res.status(200).send({message:'user logout'})
} catch (error) {
    console.log(error)

    res.send({message:error.message})
}

}