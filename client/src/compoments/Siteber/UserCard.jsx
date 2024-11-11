import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const UserCard = ({users,handileClickActive,isActive}) => {
  const [lastMessage,setLestMessage]=useState()
  useEffect(()=>{
    axios.get(`http://localhost:5000/api/message/last-message/${users?._id}`,{withCredentials:true}).then(res=>{
      console.log(res.data)
      setLestMessage(res.data)
    }).catch(error=>{
      console.log(error)
    })
    
    },[])

    console.log(lastMessage)
const messages=lastMessage?.message?.length> 18? lastMessage?.message.slice(0, 18)+'....':lastMessage?.message


const currentTime=new Date()

const finaleTime=currentTime-lastMessage.updatedAt
const seconds = Math.floor(finaleTime / 1000);
const minutes = Math.floor(seconds / 60);
const hours = Math.floor(minutes / 60);
const days = Math.floor(hours / 24);

  return (
    <div>
      <Link to={`/messagebox/${users?._id}`}  onClick={()=>handileClickActive(users)}  >
<div className={`mb-3 border  rounded-lg h-16 grid items-center shadow-sm ${isActive===users._id?' bg-[#10B981] text-white':'bg-[#FFFFFF] border-[#E0E0E0] text-[#5D4037]'}`} 
  
  >
<div>
  
<div className=" flex gap-7 ml-2 ">
    <img className='w-14 h-14 rounded' src={users?.profile} />
 <div>
 <h3 className='font-bold'>{users?.fullName}</h3>
<div className='flex gap-3 mt-1 items-center'>
<p className=''>{messages}</p>
<p className='text-sm text-right text-gray-400'>{
 days > 0 ? `${days} days` :
 hours > 0 ? `${hours} hours` :
 minutes > 0 ? `${minutes} minutes` :
 `${seconds} seconds`
}</p>
</div>
 </div>
  <div>
</div>

</div>
</div>

</div>
</Link>
    </div>
  )
}

export default UserCard
