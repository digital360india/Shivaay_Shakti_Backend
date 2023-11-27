const express=require('express')
const AddPurchasedCourseController=require('../controllers/PurchasedCourse/AddPurchasedCourseController');
const router=new express.Router();
const auth=require('../middleware/auth')
router.post('/',auth,AddPurchasedCourseController)
module.exports=router;