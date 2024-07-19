const express=require('express')
const router=new express.Router();
const AllCoursesController=require('../controllers/Courses/AllCoursesController')
const CourseByIdController=require('../controllers/Courses/CourseByIdController')
const AddCourseController=require('../controllers/Courses/AddCourseController')
const DeleteCourseController=require('../controllers/Courses/DeleteCourseController')
const UpdateCourseController=require('../controllers/Courses/UpdateCourseController')
const isAdmin=require('../middleware/isAdmin')
router.get('/',AllCoursesController);
router.get('/:id',CourseByIdController);
// router.post('/',isAdmin,AddCourseController);
router.post('/',AddCourseController);
router.put('/:id',isAdmin,UpdateCourseController);
router.delete('/:id',isAdmin,DeleteCourseController);
module.exports=router;  