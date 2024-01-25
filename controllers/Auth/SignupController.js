// console.log("hi")
const Login=require('../../model/LoginModel')
const SignupController=async(req,res)=>{
    console.log("hjkl")
    try{
        console.log(req.body)
   const obj=new Login(req.body);
   console.log(obj);
    await obj.save();
    res.status(201).json({message:"signup successful"})
    }
    catch(error){
        console.log(error);  
            res.status(500).json({ message:error.message });
    }
}
module.exports=SignupController;