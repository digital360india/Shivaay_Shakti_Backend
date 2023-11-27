 const mongoose=require('mongoose')
 const validator=require('validator')
 const bcrypt=require('bcrypt')
const LoginSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        require:true,
        trim:true,
        lowercase:true,
    },
    email:{
        type:String,    
        require:true,
        trim:true,
        unique:true,
        lowercase:true,
        validate(value){    
            if(!validator.isEmail(value))
            {
                throw new Error("email is invalid");
            }
     },
    },
    password:{
        type:String,
        required:true,
        trim:true,
    },
    isAdmin:{
        type:Boolean,
        require:true,
        default:false
    }
})

LoginSchema.pre("save",async function(next){
    if(this.isModified("password"))
{
    this.password=await bcrypt.hash(this.password,10);
}
next();
})

module.exports=mongoose.model("Login",LoginSchema);