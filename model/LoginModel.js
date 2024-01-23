 const mongoose=require('mongoose')
 const validator=require('validator')
 const bcrypt=require('bcrypt')
const LoginSchema=new mongoose.Schema({
       name:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
    },
       country:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
    },
       city:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
    },
       gender:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
    },
       specify:{
        type:String,
        trim:true,
        lowercase:true,
    },
       medical_condition:{
        type:String,
        trim:true,
        lowercase:true,
        default:"",
        required:false
    },
    height:{ type:Number, required:true},
    weight:{ type:Number, required:true},

    born:{
        type:String,
        required:true,
    },
    email:{
        type:String,    
        required:true,
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
        required:true,
        default:false
    },
})

LoginSchema.pre("save",async function(next){
    if(this.isModified("password"))
{
    this.password=await bcrypt.hash(this.password,10);
}
next();
})

module.exports=mongoose.model("Login",LoginSchema);