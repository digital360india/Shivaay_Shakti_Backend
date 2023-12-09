const express=require('express')
const router=new express.Router();
const LoginController=require('../controllers/Auth/LoginController')
const SignupController=require('../controllers/Auth/SignupController')
const AdminLoginController=require('../controllers/Auth/AdminLoginController')
const UpdateController=require('../controllers/Auth/UpdateController')
router.post('/login',LoginController);
router.post('/signup',SignupController);
router.post('/adminlogin',AdminLoginController)
router.put('/update/:_id',UpdateController)
module.exports=router;