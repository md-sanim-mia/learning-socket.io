import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import useAxiosPublice from "../../../Hooks/useAxiosPublice";
import { ScaleLoader } from 'react-spinners'
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../../Providers/AuthProvider";
const Login = () => {
    const [ishow,setisShow]=useState(false)
    const [isLoding,setisLoding]=useState(false)
    const axiosPublice =useAxiosPublice()
    const navigation=useNavigate()
    const [errorMessage,setErrorMessage]=useState(null)
    const {setAuthUser}=useAuth()
  const [userData,setUserData]=useState({
    email:"",
    password:''
  })
const handileClikLogin=(e)=>{
e.preventDefault()
setisLoding(true)
setErrorMessage(null)
axiosPublice.post('/api/auth/login',userData,{withCredentials:true}).then(res=>{
    console.log(res.data)
    if(res.data){
      localStorage.setItem('chatapp',JSON.stringify(res?.data))
      setAuthUser(res.data)
    setisLoding(false)
    setErrorMessage(null)
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Success Login is  done ",
      showConfirmButton: false,
      timer: 1700
    });
    navigation('/')
    }
}).catch(error=>{
   if(error.message){
    setisLoding(false)
    console.log(error.response.data)
    setErrorMessage(error?.response?.data?.message)
   }
})

  }
  return (
    <div className="">
       <div className=" bg-[#F0FDF4] min-h-screen items-center grid py-8 lg:px-0 px-4 w-full">
     <section className=" lg:w-[37%] mx-auto  rounded-md  dark:bg-gray-800 flex">
    {/* Form Section */}
    <div className="w-full mx-auto items-center grid">
  
      <form onSubmit={handileClikLogin} className="bg-white px-12 py-10 shadow-md rounded-lg">
        <h2 className="text-center text-[#10B981] text-2xl font-bold">Login Your Account</h2>
        <div className="grid gap-6 mt-7 ">
          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
            <div className="flex gap-2 items-center  text-gray-700 bg-white  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 mt-2 input focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring border border-gray-200">
            <MdEmail className="text-2xl" />
         <div className="border-l w-full ">
         <input
              id="email"
              type="email"
              required
              onChange={(e)=>setUserData({...userData,email:e.target.value})}
              className="block w-full  border-none input"
            />
         </div>
            </div>
           
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Password</label>
            <div className="flex gap-2 items-center  text-gray-700 bg-white  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 mt-2 input focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring border border-gray-200">
        
           <RiLockPasswordFill  className="text-2xl "/>
         <div className="border-l w-full flex items-center">
         <input
              id="password"
              type={ishow?'text':'password'}
              required
              onChange={(e)=>setUserData({...userData,password:e.target.value})}
              className=" w-full  border-none input"
            />
           
            <span onClick={()=>setisShow(!ishow)} className="text-2xl cursor-pointer">
{
  ishow?<IoEyeOff />: <IoEye />
}
            </span>
         </div>

            </div>
            <label className="label">
            <a href="#" className="label-text-alt link link-hover mt-3">Forgot password?</a>
          </label>
          </div>
  
        </div>
  <p className="text-center text-red-500 font-bold mt-2">{errorMessage}</p>
        <div className="flex mt-6">
{
isLoding?<button className="px-8 py-2.5 leading-5 w-full text-[#ffffff] transition-colors duration-300 transform bg-[#10B981] rounded-md hover:bg-[#10B981] focus:outline-none focus:bg-[#10B981]">
<ScaleLoader color="#ffffff" />
</button>:<button type="submit" className="px-8 btn py-2.5 leading-5 w-full text-[#ffffff] transition-colors duration-300 transform bg-[#10B981] rounded-md hover:bg-[#10B981] focus:outline-none focus:bg-[#10B981]">
          Login Now 
          </button>
}
          
        </div>

        <p className="mt-6 text-center">Don't have an account ? <Link to={'/signup-users'}><span className="text-[#10B981]">Register Now</span></Link> </p>
      </form>
    </div>
  </section>
   </div>
  
    </div>
  )
}

export default Login
