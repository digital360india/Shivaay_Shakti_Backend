const Course=require('../../model/CourseModel')
const UpdateCourseController=async(req,res)=>{
     const _id=req.params.id;
    try{
const result=await Course.findByIdAndUpdate(_id,req.body,{new:true});
// console.log(result);
if (result) {
    res.status(200).json({ success: true, message: 'Course updated successfully.', data: result });
} else {
    res.status(404).json({ success: false, message: 'Course not found.' });
}
} catch (error) {
res.status(500).json({ success: false, message: 'Internal server error.' });
}
}
module.exports=UpdateCourseController;