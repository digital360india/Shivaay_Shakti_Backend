const express=require('express')
const AddPurchasedCourseController=require('../controllers/PurchasedCourse/AddPurchasedCourseController');
const router=new express.Router();
const auth=require('../middleware/auth');
const PurchasedByIdController = require('../controllers/PurchasedCourse/PurchasedByIdController');
const AllPendingTransactionController=require('../controllers/PurchasedCourse/AllPendingTransactionController')
const isAdmin=require('../middleware/isAdmin')
router.post('/',auth,AddPurchasedCourseController)
router.get('/:id/:transaction_status',auth,PurchasedByIdController)
router.get('/pending',isAdmin,AllPendingTransactionController)
module.exports=router;