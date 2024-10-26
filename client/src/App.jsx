import {io} from 'socket.io-client'
import './App.css'
import { useEffect, useMemo, useState } from 'react'

function App() {
const socket=useMemo(()=>io('http://localhost:5000'),[])
const [message, setMessage] = useState('');
const [messages, setMessages] = useState([]);
const handileSubmit=(e)=>{
e.preventDefault() 
socket.emit('message',{message,rome})
}

useEffect(()=>{
socket.on('connect',()=>{
  console.log('connected',socket.id)
  
})
socket.on('receve-message',(data)=>{
  console.log('user data', data)
  setMessages(data)
})

socket.on('welcome',(s)=>{
console.log(s)
})


// return ()=>{
//   socket.disconnect()
// }


},[])


  return (
  <>
   <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
        <div className="mb-4 h-64 overflow-y-auto border rounded-lg p-2 bg-gray-50">
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <div key={index} className="text-left mb-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md inline-block">
                  {msg}
                </span>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No messages yet...</p>
          )}
        </div>
        <div className="flex">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type your message..."
          />
          <button
            onClick={handileSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </>
  )
}

export default App
