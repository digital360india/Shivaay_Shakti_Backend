const Purchased=require('../../model/PurchasedCourseModel')
const UpdateGroupLinkController=async(req,res)=>{
    const { course_name, preferred_timing, link } = req.body;
    console.log(req.body)
    try{
        const response=await Purchased.updateMany(
            { course_name, preferred_timing },
            { $set: { link: link } }
          );
          console.log(response)
    res.status(200).json({message:"updated successful"})
    }
    catch(error){
        console.log(error)
            res.status(500).json({ message: "Server Error" });
        
    }
}
module.exports=UpdateGroupLinkController;