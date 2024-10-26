import axios from "axios"

const axiosPublice=axios.create({
    baseURL:'http://localhost:5000'
})

const useAxiosPublice=()=>{
return axiosPublice

}

export default useAxiosPublice