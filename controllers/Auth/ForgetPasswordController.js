const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')
const Login=require('../../model/LoginModel')
const ForgetPasswordController=async(req,res)=>{
    try{
     const {email}=req.body;
     const res1=await Login.findOne({email:email});
    if(res1)
    {
        const token = jwt.sign({userid: res1._id},process.env.Secret_key, {expiresIn: "10m"})
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'nakult824@gmail.com',
                    pass: "thnrplgyoipdnqsf"
                  }
              });
              
              var mailOptions = {
                from: 'youremail@gmail.com',
                to: 'user email@gmail.com',
                subject: 'Reset Password Link',
                text: `https://shivaay-shakti-yog.vercel.app/reset_password/${user._id}/${token}`
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  return res.status(200).json({Status: "Success"})
                }
              });
            }
    else{
        return res.status(401).json({ message: "Invalid Credentials" })
    }
    }
    catch(e){
        res.status(500).json({ message: "Internal Server Error" });
    }
}
module.exports=ForgetPasswordController;