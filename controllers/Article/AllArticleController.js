const Article=require('../../model/ArticleModel')
const AllArticleController=async(req,res)=>{
    try{
   const response=await Article.find().sort ( { date: -1 } );
//    console.log(response);
   res.status(200).json({success:true,dta:response});
    }
    catch(e)
    {
res.status(500).json({success:false});
    }
}
module.exports=AllArticleController;