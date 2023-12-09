const Login=require('../../model/LoginModel')
const UpdateController=async(req,res)=>{
    console.log(req.params)
    const {_id}=req.params;
    try{
        const response=await Login.findByIdAndUpdate(_id,req.body,{new:true});
        console.log(response);
    if(response)
    {res.status(200).json({message:"updated successful",dta:response})
    }
    else{
        res.status(400).json({message:" Id not found"})  
    }}
    catch(error){
            res.status(500).json({ message: "Server Error" });
        
    }
}
module.exports=UpdateController;