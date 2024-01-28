const jwt=require('jsonwebtoken')
const Login=require('../../model/LoginModel')
const ResetPasswordController=async(req,res)=>{
    try{
        const {id, token} = req.params
        const {password} = req.body;
        const match=jwt.verify(token, process.env.Secret_key);
        if(match.userid===id)
        {
            const res1=await Login.findOne({_id:id});
            if(res1)
            {
                res1.password=password;
             await res1.save();
             return res.json({ Status: "Success" });
            }
            return res.status(404).json({ Status: "User not found" });

        }
        else{
            return res.status(401).json({ Status: "Unauthorized" });
        }
    }
    catch(e){
        res.status(500).json({ message: "Internal Server Error" });
    }
}
module.exports=ResetPasswordController;