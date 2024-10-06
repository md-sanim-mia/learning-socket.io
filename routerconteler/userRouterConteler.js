import mongoose from "mongoose"
import connectionDB from "../connnectionDB/connectionDB.js"
import User from "../models/userModle.js"

export const userRegister=async(req,res)=>{
    try {
        connectionDB()
        const {fullName,email,password,gender,profile}=req.body

        const user=await User.findOne({email})

        if(user){

           res.status(500).send({message:'user alredy exist'})
        }

        const newUser=new User(
            {
                fullName,email,password,gender,profile
            }
        )

        if(newUser){
            await newUser.save()
        }else{
            res.status(500).send({message:'invlide data'})
        }
       res.status(200).send(newUser)

    } catch (error) {
        console.log(error)

        res.send({message:error.message})
    }
}


export const loginUser=async(req,res)=>{

    try {
        connectionDB()
const {email,password}=req.body


const user=await User.findOne({email,password})

if(!user){
   res.status(500).send({message:"email and password not match please try agin"})
}

res.status(200).send(user)
    } catch (error) {
        console.log(error)

        res.send({message:error.message})
    }
}