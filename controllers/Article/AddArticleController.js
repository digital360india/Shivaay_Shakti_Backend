const Article=require('../../model/ArticleModel');
const AddArticleController=async(req,res)=>{
    try{
        // console.log(req.body);
        const obj=new Article(req.body);
         await obj.save();
         res.status(201).json({success:true});
    }
    catch(e)
    {
        // console.log(e);
        res.status(500).json({success:false});
    }
}
module.exports=AddArticleController;