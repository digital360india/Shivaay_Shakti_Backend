const Purchased=require('../../model/PurchasedCourseModel')
const UpdateController=async(req,res)=>{
    console.log(req.params)
    console.log(req.body);
    const {_id}=req.params;
    try{
        const response=await Purchased.findByIdAndUpdate(_id,req.body,{new:true});
        // console.log(response);
    if(response)
    {res.status(200).json({message:"updated successful",dta:response})
    }
    else{
        res.status(400).json({message:" Id not found"})  
    }}
    catch(error){
            res.status(500).json({ message: "Server Error" });
        
    }
}
module.exports=UpdateController;