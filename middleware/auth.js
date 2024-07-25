const jwt=require('jsonwebtoken')
const Login=require('../model/LoginModel')
const auth=async(req,res,next)=>{
    try{
        const token=req.headers.authorization;
        // console.log("token hai ye bhai chill : " , token);
        const match=jwt.verify(token.slice(1,token.length-1),process.env.Secret_key)
        const user=await Login.findOne({_id:match._id});
        if(user)
       { req.user=user;
        next();}
    }
    catch(e)
    {
        res.status(403).json({ message: "Forbidden" });
    }
}
module.exports=auth;