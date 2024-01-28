const jwt=require('jsonwebtoken')
const Login=require('../model/LoginModel')
const isTrainer=async(req,res,next)=>{
    console.log("hello")
    try{
        const token=req.headers.authorization;
        const match=jwt.verify(token.slice(1,token.length-1),process.env.Secret_key)
        const user=await Login.findOne({_id:match._id});
        console.log("hello")
        if(user.isAdmin==="trainer")
        {
            console.log("hello")
            next();
        }
        else{
            res.status(401).send("Permision Denied");
        }
    }
    catch(e)
    {
   res.status(403).send(e);
    }
}
module.exports=isTrainer;