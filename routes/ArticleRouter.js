const express=require('express')
const router=new express.Router();
const AddArticleController=require('../controllers/Article/AddArticleController')
const AllArticleController=require('../controllers/Article/AllArticleController')
const DeleteArticleController=require('../controllers/Article/DeleteArticleController')
const EditArticleController=require('../controllers/Article/EditArticleController')
const isAdmin=require('../middleware/isAdmin')
router.post('/',isAdmin,AddArticleController);
router.put('/:id',isAdmin,EditArticleController)
router.get('/',AllArticleController)
router.delete('/:id',isAdmin,DeleteArticleController);
module.exports=router;