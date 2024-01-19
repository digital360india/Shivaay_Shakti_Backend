const mongoose=require('mongoose')
const PurchasedCourseSchema=new mongoose.Schema({
    user_id:{type:String,required:true},
    course_id:{type:String,required:true},
    course_name:{type:String,required:true},
    course_type:{type:String,required:true},
    status:{type:String,required:true},
    preferred_timing:{type:String,required:true},
    duration:{type:String,required:true},
    starting_date:{type:String,required:true},
    expiration_date:{type:String,required:true},
    price:{type:Number,required:true},
    date:{type:Date,default:Date.now()},
    days:[{ type: String }],
    transaction_id:{type:String,required:true,unique:true},
    transaction_status:{type:String,required:true},
})
module.exports=mongoose.model("Purchase_Course",PurchasedCourseSchema)