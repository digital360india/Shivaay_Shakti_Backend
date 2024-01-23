const Purchased=require('../../model/PurchasedCourseModel')
const PurchasedByIdController=async(req,res)=>{
    try{
        console.log(hello)
        const {id,transaction_status}=req.params;
           const res1=await Purchased.find({user_id:id,transaction_status:transaction_status==="c"?"completed":transaction_status==="p"?"pending":null})
           res.status(200).json({data:res1});
       }
       catch(e){
           res.status(500).json({message:"Internal Server Error"});
       }
}
module.exports=PurchasedByIdController;