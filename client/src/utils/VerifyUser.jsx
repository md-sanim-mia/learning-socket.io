import React from 'react'
import { useAuth } from '../Providers/AuthProvider'
import { Navigate} from 'react-router-dom'

const VerifyUser = ({children}) => {
    const {authUser}=useAuth()
  
    if(!authUser){
        return <Navigate to={'/login-page'}/>
    }
  return (
   <>
   {children}
   </>
  )
}

export default VerifyUser
