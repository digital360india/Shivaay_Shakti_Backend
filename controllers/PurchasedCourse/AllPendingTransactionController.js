const Purchased=require('../../model/PurchasedCourseModel')
const AllPendingTransactionController=async(req,res)=>{
    try{
           const res1=await Purchased.find({transaction_status:"pending"})
           res.status(200).json({data:res1});
       }
       catch(e){
           res.status(500).json({message:e.message});
       }
}
module.exports=AllPendingTransactionController;