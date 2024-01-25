const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')
const Login=require('../../model/LoginModel')
const LoginController=async(req,res)=>{
    try{
    //    console.log(req.body)
     const {email,password}=req.body;
     const res1=await Login.findOne({email:email});
    if(res1)
    {
        bcrypt.compare(password,res1.password,async function(err,result){
            if(result)
            {
            const token=jwt.sign({_id:res1._id},process.env.Secret_key)
             res1.password="";
            return res.status(200).json({ message: "Login successful", user: res1,token:token });
            }
        })
    }
    else{
        // console.log(res1);
        return res.status(401).json({ message: "Invalid Credentials" });
    }
    }
    catch(e){
        // console.log(e);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
module.exports=LoginController;