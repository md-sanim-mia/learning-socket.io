
import mongoose from "mongoose";

 
const connectionDB= async()=>{

try {
await mongoose.connect(process.env.DB_URL)
console.log('database connection is done')

    
} catch (error) {
    console.log(error)
}

}

export default connectionDB