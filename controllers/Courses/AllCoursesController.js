const Course=require('../../model/CourseModel')
const AllCoursesController=async(req,res)=>{
    try{
    
        const res1=await Course.find()
        // console.log(res1);
        res.status(200).json({data:res1});
    }
    catch(e){
        res.status(500).json({message:"Internal Server Error"});
    }
}
module.exports=AllCoursesController;