import React, { useEffect, useState } from 'react'
import useAxiosPublice from '../../Hooks/useAxiosPublice'
import axios from 'axios'
import UserCard from './UserCard'
import { toast } from 'react-toastify'
import { FaArrowLeft, FaArrowRightFromBracket } from "react-icons/fa6";
import { IoIosChatbubbles } from "react-icons/io";
import { useAuth } from '../../Providers/AuthProvider'

const Siteber = () => {
  const [isLoding,setisLoding]=useState(false)
  const [searchInput,setSerarchInput]=useState("")
  const [searchUser,setSearchUser]=useState([])
  const [chatUser,setChatUser]=useState([])
const axiosPublice=useAxiosPublice()
const [isActive,setisActive]=useState(null)
const {authUser}=useAuth()

useEffect(()=>{
axiosPublice.get('/api/users/currentchatter',{withCredentials:true}).then(res=>{
  console.log(res.data)
  setChatUser(res.data)
}).catch(error=>{
  console.log(error)
})

},[])

  const handileClickSearch=(e)=>{
    e.preventDefault()
    setisLoding(true)
    console.log(searchInput)
   
    if(!searchInput){
     return toast.info("write any user name");
    }
    axios.get(`http://localhost:5000/api/users/search?search=${searchInput}`,{withCredentials:true}).then(res=>{
      console.log(res.data)
    
  

      if(res.data.length===0){
      return  toast.info("search user is not found");

      }else{

        setChatUser(res.data)
        setSearchUser(res.data)
      }
    setisLoding(false)
    }).catch(error=>{
      console.log(error)
      setisLoding(false)
    })
 
  }

 
  const handileClickActive=(user)=>{
setisActive(user?._id)
  }


  console.log(chatUser)
  return (
    <div className='z-40 h-fit min-h-screen md:fixed flex flex-col justify-between overflow-x-hidden  lg:w-[360px] space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform md:translate-x-0 transition duration-200 ease-in-out border-r'>
    <div>
    <IoIosChatbubbles className='text-3xl text-[#10B981]'/>
     <div className='flex justify-between items-center mb-3'>
     <h2 className='text-xl font-bold text-[#10B981]'>FlareChat</h2>
      <div className="avatar">
  <div className="w-14 rounded-full">
    <img src={authUser?.profile} />
  </div>

</div>
     </div>
   <form onSubmit={handileClickSearch} action="">
   <div className='flex'>
     <input type="text" onChange={(e)=>setSerarchInput(e.target.value)} placeholder="Type here" className="input input-bordered w-full rounded-r-none " />
     <button type='submit' className='btn rounded-l-none bg-[#10B981] text-[#FFFFFF]'>Search</button>
     </div>
   </form>
     <hr className='mt-5 mb-3 border-[#10B981]' />
{/* show serch user after search and defult show convercatin user */}

{
chatUser?.length===0 ? <>
 <div> <p className='text-center text-amber-400 text-xl'>May are you Alone ! </p> </div>

</>:
<>

<div className='overflow-y-auto max-h-[425px]'>
{
  chatUser?.map(users=><UserCard key={users._id} users={users}  handileClickActive={handileClickActive} isActive={isActive} > </UserCard> )
}
     </div>
     
</>

}

    </div>
   <div className='ml-3 mb-4'>
 
    <button className=' flex gap-2 text-red-600 items-center'>  <FaArrowRightFromBracket className='text-xl text-red-600' /> Logout</button>
   
   </div>
    </div>
  )
}

export default Siteber
