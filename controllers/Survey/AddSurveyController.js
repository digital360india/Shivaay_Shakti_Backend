const Survey=require('../../model/SurveyModel');
const AddSurveyController=async(req,res)=>{
try{
    // console.log(req.body);
const obj=new Survey(req.body);
await obj.save();
res.status(201).json({success:true,message:"Survey successfully saved"});
}
catch(e)
{
    // console.log(e); 
    res.status(500).json({success:false,message:"Server Error"});
}
}
module.exports=AddSurveyController;