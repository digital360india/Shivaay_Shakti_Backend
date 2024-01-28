const express=require('express')
const router=new express.Router();
const LoginController=require('../controllers/Auth/LoginController')
const SignupController=require('../controllers/Auth/SignupController')
const AdminLoginController=require('../controllers/Auth/AdminLoginController')
const UpdateController=require('../controllers/Auth/UpdateController');
const AllUsersController = require('../controllers/Auth/AllUsersController');
const isAdmin=require('../middleware/isAdmin');
const TrainerLoginController = require('../controllers/Auth/TrainerLoginController');
const ForgetPasswordController = require('../controllers/Auth/ForgetPasswordController');
const ResetPasswordController = require('../controllers/Auth/ResetPasswordController')
router.post('/login',LoginController);
router.post('/signup',SignupController);
router.post('/adminlogin',AdminLoginController)
router.post('/trainerlogin',TrainerLoginController)
router.put('/update/:_id',UpdateController)
router.get('/',AllUsersController)
router.post('/forgot-password',ForgetPasswordController)
router.post('/reset-password/:id/:token',ResetPasswordController)
module.exports=router;