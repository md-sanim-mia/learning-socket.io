import { createContext, useContext, useState } from "react"

export const AuthContext=createContext(null)
export const useAuth=()=>{
return useContext(AuthContext)
}
export const AuthProvider = ({children}) => {
const [authUser,setAuthUser]=useState(JSON.parse(localStorage.getItem('chatapp'))||null)
console.log(authUser)
  return (
    <AuthContext.Provider value={{authUser,setAuthUser}}>{children}</AuthContext.Provider>
  )
}

