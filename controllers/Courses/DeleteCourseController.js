const Course=require('../../model/CourseModel');
const DeleteCourseController=async(req,res)=>{
    try{
        // console.log(req.params)
        const _id=req.params.id;

        const result=await Course.findByIdAndDelete(_id);
        if (result) {
            res.status(200).json({ success: true, message: 'Course deleted successfully.' });
        } else {
            res.status(404).json({ success: false, message: 'Course not found.' });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error.' });
    }
}
module.exports=DeleteCourseController;