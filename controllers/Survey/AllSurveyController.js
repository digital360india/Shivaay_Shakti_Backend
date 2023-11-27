const Survey=require('../../model/SurveyModel');
const AllSurveyController=async(req,res)=>{
try{
    const response=await Survey.find().sort ( { date: -1 } );;
    // console.log(response);
    res.status(200).json({success:true,dta:response});
}
catch(e)
{
    res.status(500).json({success:true,message:"Server Error"});
}
}
module.exports=AllSurveyController;