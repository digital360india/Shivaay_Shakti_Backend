const Survey=require('../../model/SurveyModel');
const DeleteSurveyController=async(req,res)=>{
try{
    const _id=req.params.id;
await Survey.findByIdAndDelete(_id);
    res.status(200).json({success:true,message:"Successfully Deleted"})
}
catch(e)
{
res.status(500).json({success:false,message:"Server Error"})
}
}
module.exports=DeleteSurveyController;