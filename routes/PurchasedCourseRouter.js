const express=require('express')
const AddPurchasedCourseController=require('../controllers/PurchasedCourse/AddPurchasedCourseController');
const router=new express.Router();
const auth=require('../middleware/auth');
const PurchasedByIdController = require('../controllers/PurchasedCourse/PurchasedByIdController');
router.post('/',auth,AddPurchasedCourseController)
router.get('/:id/:transaction_status',auth,PurchasedByIdController)
module.exports=router;