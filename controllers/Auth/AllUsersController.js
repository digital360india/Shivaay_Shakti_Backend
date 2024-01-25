const Users=require('../../model/LoginModel')
const AllUsersController=async(req,res)=>{
    try{
        const res1=await Users.find()
        res.status(200).json({data:res1});
    }
    catch(e){
        res.status(500).json({message:"Internal Server Error"});
    }
}
module.exports=AllUsersController;