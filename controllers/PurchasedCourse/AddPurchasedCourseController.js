const Purchased=require('../../model/PurchasedCourseModel')
const AddPurchasedCourseController=async(req,res)=>{
    // console.log("hello")
    try{
   const obj=new Purchased(req.body);
   await obj.save();
   res.status(201).json({success:true,message:"Course Purchased Successfully"});
    }
    catch(e)
    {
        res.status(500).json({success:true,message:"Server Error"});
    }
}
module.exports=AddPurchasedCourseController;