const Purchased=require('../../model/PurchasedCourseModel')
const AllCompletedTransactionController=async(req,res)=>{
    try{
           const res1=await Purchased.find({transaction_status:"completed"})
           res.status(200).json({data:res1});
       }
       catch(e){
           res.status(500).json({message:e.message});
       }
}
module.exports=AllCompletedTransactionController;