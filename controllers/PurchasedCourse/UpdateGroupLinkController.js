const Purchased=require('../../model/PurchasedCourseModel')
const UpdateGroupLinkController=async(req,res)=>{
    const { course_name, preferred_timing, link } = req.body;
    try{
        await Course.updateMany(
            { course_name, preferred_timing },
            { $set: { link: link } }
          );
    res.status(200).json({message:"updated successful"})
    }
    catch(error){
            res.status(500).json({ message: "Server Error" });
        
    }
}
module.exports=UpdateGroupLinkController;