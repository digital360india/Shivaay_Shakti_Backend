const express=require('express')
const AddPurchasedCourseController=require('../controllers/PurchasedCourse/AddPurchasedCourseController');
const router=new express.Router();
const auth=require('../middleware/auth');
const PurchasedByIdController = require('../controllers/PurchasedCourse/PurchasedByIdController');
const AllPendingTransactionController=require('../controllers/PurchasedCourse/AllPendingTransactionController')
const AllCompletedTransactionController=require('../controllers/PurchasedCourse/AllCompletedTransactionController')
const UpdatePurchaseById=require('../controllers/PurchasedCourse/UpdatePurchaseById')
const isAdmin=require('../middleware/isAdmin');
const UpdateGroupLinkController = require('../controllers/PurchasedCourse/UpdateGroupLinkController');
const AllPersonalCompletedTranscationController = require('../controllers/PurchasedCourse/AllPersonalCompletedTranscationController');
const isTrainer = require('../middleware/isTrainer');
// const UpdatePointsByPurchaseById = require('../controllers/PurchasedCourse/UpdatePointsByPurchaseById');

router.post('/',auth,AddPurchasedCourseController)
router.get('/:id/:transaction_status',auth,PurchasedByIdController)
router.get('/pending',isAdmin,AllPendingTransactionController)
router.get('/completed',isAdmin,AllCompletedTransactionController)
router.get('/personal',isAdmin,AllPersonalCompletedTranscationController)
router.get('/trainer',AllPersonalCompletedTranscationController)
router.put('/pending/:_id',isAdmin,UpdatePurchaseById)
router.put('/personallink/:_id',isAdmin,UpdatePurchaseById)
router.put('/remarks/:_id',isTrainer,UpdatePurchaseById)
// router.put('/points/:_id',isTrainer,UpdatePointsByPurchaseById)
router.put('/status/:_id',UpdatePurchaseById)
router.put('/grouplink',isAdmin,UpdateGroupLinkController)

module.exports=router;