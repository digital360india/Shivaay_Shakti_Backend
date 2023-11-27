const express=require('express');
const router=new express.Router();
const AddSurveyController=require('../controllers/Survey/AddSurveyController')
const AllSurveyController=require('../controllers/Survey/AllSurveyController')
const DeleteSurveyController=require('../controllers/Survey/DeleteSurveyController')
const isAdmin=require('../middleware/isAdmin')
router.get('/',isAdmin,AllSurveyController);
router.post('/',AddSurveyController);
router.delete('/:id',isAdmin,DeleteSurveyController);
module.exports=router;