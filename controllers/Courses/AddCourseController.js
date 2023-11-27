const Course=require('../../model/CourseModel')
const AddCoursesController=async(req,res)=>{
    try{
 const obj1=new Course(req.body);
 console.log(obj1);
 await obj1.save();
 res.status(200).json({message:"Course Added Succesfully"});
    }
    catch{
        res.status(500).json({message:"Server Error"});
    }
}
module.exports=AddCoursesController;