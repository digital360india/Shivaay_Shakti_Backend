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
    days: { type: [{ type: String }], default: undefined },
    transaction_id:{type:String,required:true,unique:true},
    transaction_status:{type:String,required:true},
    link:{type:String},
    remarks: { type: [{ type: String }], default: undefined },
    points: {
        type: [{
            date: { type: String, required: true },
            points: { type: String, required: true },
        }],
        validate: {
            validator: function (value) {
                return value.length === 2;
            },
            message: 'The points array must have exactly two elements.',
        },
        default: undefined,
    },
})
module.exports=mongoose.model("Purchase_Course",PurchasedCourseSchema)