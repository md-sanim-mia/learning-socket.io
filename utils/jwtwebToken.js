import jwt from 'jsonwebtoken'
const jwtToken=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRICT_ID,{
        expiresIn:'30d'
    })
    res.cookie('jwt',token,{
    maxAge:30*24*60*60*1000,
    })
}
export default jwtToken