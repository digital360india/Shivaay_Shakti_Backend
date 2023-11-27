const mongoose=require('mongoose')
const SurveySchema=new mongoose.Schema({
    name:{ type:String, required:true},
    born:{ type:Date, required:true},
    country:{ type:String, required:true},
    gender:{ type:String, required:true},
    specify:{ type:String},
    height:{ type:Number, required:true},
    weight:{ type:Number, required:true},
    level:{ type:String, required:true},
    goals:{ type:Array},
    gspecify:{ type:String},
   daily_life:{ type:Array},
    morning:{ type:Array },
    evening:{ type:Array},
    date:{
        type:Date,
        default:Date.now()
    }
})
module.exports=mongoose.model('Survey',SurveySchema);