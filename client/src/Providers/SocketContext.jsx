import { createContext, useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'
import { useAuth } from './AuthProvider'

const SocketContext=createContext()

export const useSocketContext=()=>{

    return useContext(SocketContext)
}


export const SocketContextProvider=({children})=>{

    const [socket,setSocket]=useState(null)
    const [onleUser,setOneLineUser]=useState([])
    const {authUser}=useAuth()

useEffect(()=>{
if(authUser){

    const socket=io('http://localhost:5000',{

        query:{
            userId:authUser._id
        }
    })

    socket.on('getOnelineUser',(users)=>{
setOneLineUser(users)

    })

    setSocket(socket);
return ()=>socket.close();
}else{
    if(socket){
        socket.close();
setSocket(null)
    }
}

},[authUser]);

return(<SocketContext.Provider value={{socket,onleUser}}>{children} </SocketContext.Provider>)




}