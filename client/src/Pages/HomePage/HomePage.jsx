import React from 'react'
import { useAuth } from '../../Providers/AuthProvider'
import { TiMessages } from "react-icons/ti";
const HomePage = () => {
  const {authUser}=useAuth()
  console.log(authUser)
  return (
    <div className='text-center grid items-center min-h-screen'>
      <div className=''>
      <h2 className='text-3xl font-bold'>Welcome!! {authUser.fullName}  </h2>
      <p className='mt-3'>Select a chat to start messaging </p>
     <div className='flex justify-center mt-4'>
     <TiMessages className='text-center text-8xl text-green-500' />
     </div>
      </div>
    </div>
  )
}

export default HomePage
