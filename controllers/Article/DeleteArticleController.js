const Article=require('../../model/ArticleModel')
const DeleteArticleController=async(req,res)=>{
    const _id=req.params.id;
    try{
   const response=await Article.findByIdAndDelete(_id);
   if(response)
   res.status(200).json({sucees:true})
    }
    catch(e)
    {
        res.status(500).json({sucees:false})
    }
}
module.exports=DeleteArticleController;