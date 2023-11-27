const mongoose=require('mongoose');
const ArticleSchema=new mongoose.Schema({
    heading:{type:String},
    description:{type:String},
    articleimg:{type:String,required:true},
    date:{type:Date,default:Date.now()}
})
module.exports=mongoose.model("Article",ArticleSchema)