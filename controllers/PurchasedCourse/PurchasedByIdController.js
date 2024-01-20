const Purchased=require('../../model/PurchasedCourseModel')
const PurchasedByIdController=async(req,res)=>{
    try{
        const _id=req.params.id;
           const res1=await Purchased.findById(_id)
           res.status(200).json({data:res1});
       }
       catch(e){
           res.status(500).json({message:"Internal Server Error"});
       }
}
module.exports=PurchasedByIdController;