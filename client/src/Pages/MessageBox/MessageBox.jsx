import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import useAxiosPublice from '../../Hooks/useAxiosPublice'
import { FaArrowCircleLeft } from "react-icons/fa";
import { BiSolidImageAdd } from "react-icons/bi";
import { IoSend } from "react-icons/io5";
import axios from 'axios';
import { useAuth } from '../../Providers/AuthProvider';
const MessageBox = () => {
    const userData=useLoaderData()
    const [sendMessage,setSendMessage]=useState(null)
    const[showMessage,setShowMessage]=useState([])
    const {authUser}=useAuth()
    const axiosPublice=useAxiosPublice()
console.log(userData)


useEffect(()=>{

axios.get(`http://localhost:5000/api/message/${userData?._id}`,{withCredentials:true}).then(res=>{
  console.log(res.data)
  setShowMessage(res.data)
}).catch(error=>{
  console.log(error)
})

},[])


const handileClickMessge=(e)=>{
  e.preventDefault()
  const message=sendMessage
axios.post(`http://localhost:5000/api/message/send/${userData?._id}`,{message},{withCredentials:true}).then(res=>{
  console.log(res.data)
  e.target.reset()
}).catch(error=>{
  console.log(error)
})

}




  return (
    <div className='h-screen w-full max-w-screen-lg mx-auto'>
         {/* ----------this is the naver section ------------ */}
<div>
<div className="w-full h-14 px-6 flex justify-between items-center bg-[#10B981] ">
 <div>
<Link to={'/'}>
<FaArrowCircleLeft className='text-white text-2xl' />
</Link>
 </div>
<div className='flex gap-2 items-center'>
<h2 className='text-white ml-2 font-bold'>{userData?.fullName}</h2>
  <div className="avatar">
    <div className="w-14 rounded-full">
      <img src={userData?.profile} alt="User Avatar" />
    </div>
  </div>
 
</div>

  </div>
</div>
     {/*------- this is the message contner section------------------ */}
<div
  className="h-[80%] w-full overflow-y-auto border  rounded-lg p-4"
 
>
  {/* Ei section e tumi messages dynamically render korbe */}
<div className='grid items-end h-full px-5'>
<div className='grid gap-3 '> 
  {
  showMessage?.map((mess=><> <div 
    key={mess?._id}
    className={`flex h-full w-full ${mess?.sinderId === authUser._id ? 'justify-end' : 'justify-start'}`}
  >
    <span
      className={`p-2 rounded-lg max-w-xs ${
        mess?.sinderId === authUser._id ? 'bg-[#10B981] text-white' : 'bg-gray-200 text-black'
      }`}
      
    >
      {mess?.message}
    </span>
  </div> </>))
  }

 </div>
</div>
  {/* aro messages add korte thako */}
</div>
      {/*--------------- this is the message send secction ----------------- */}

      <div className='grid items-end w-full'>
      <form action="" onSubmit={handileClickMessge}>
      <div className='flex gap-5 items-center px-6'>
          <BiSolidImageAdd className='text-4xl text-[#10B981]'/>
        <input
  type="text"
  onChange={(e)=>setSendMessage(e.target.value)}
  placeholder="Send your message ....."
  className="mt-2 block w-full rounded-full placeholder-gray-400/70 border border-[#10B981] bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
/>
<button type='submit'> 
<IoSend className='text-3xl text-[#10B981]'/>
</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default MessageBox
