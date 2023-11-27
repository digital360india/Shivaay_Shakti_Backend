const Article=require('../../model/ArticleModel')
const EditArticleController=async(req,res)=>{
    const _id=req.params.id;
    // console.log(_id);
    try{
     const response=await Article.findByIdAndUpdate(_id,req.body,{new:true});
    //  console.log(response);
     if (response) {
        res.status(200).json({ success: true, message: 'Article updated successfully.', data: response });
    } 
    }
    catch(e)
    {
        res.status(500).json({success:false});
    }
}
module.exports=EditArticleController;