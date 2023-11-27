const express=require('express')
const router=new express.Router();
const LoginController=require('../controllers/Auth/LoginController')
const SignupController=require('../controllers/Auth/SignupController')
const AdminLoginController=require('../controllers/Auth/AdminLoginController')
router.post('/login',LoginController);
router.post('/signup',SignupController);
router.post('/adminlogin',AdminLoginController)
module.exports=router;