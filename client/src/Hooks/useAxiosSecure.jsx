import axios from 'axios'
import React from 'react'

const axiosSecure=axios.create({
    baseURL:''
})
const useAxiosSecure = () => {
    axiosSecure.interceptors.request.use(
        function (config){
const token=localStorage.getItem('token')

        }
    )
  return (
    <div>
   
    </div>
  )
}

export default useAxiosSecure
