// console.log("hi")
const Login=require('../../model/LoginModel')
const SignupController=async(req,res)=>{
    // console.log("hjkl")
    try{
        console.log(req.body)
   const obj=new Login(req.body);
   console.log(obj);
    await obj.save();
    res.status(201).json({message:"signup successful"})
    }
    catch(error){
        console.log(error);
        if (error.code === 11000) {
            if (error.keyPattern.email === 1) {
                res.status(500).json({ message: "email already exist" });
            }
          } else {  
            res.status(500).json({ message:error.message });
          }
    }
}
module.exports=SignupController;