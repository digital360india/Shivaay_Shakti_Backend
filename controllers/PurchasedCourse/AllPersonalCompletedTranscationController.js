const Purchased=require('../../model/PurchasedCourseModel')
const AllPersonalCompletedTranscationController=async(req,res)=>{
    try{
           const res1=await Purchased.find({transaction_status:"completed",course_type:"personal",status:"active"})
           res.status(200).json({data:res1});
       }
       catch(e){
           res.status(500).json({message:e.message});
       }
}
module.exports=AllPersonalCompletedTranscationController;