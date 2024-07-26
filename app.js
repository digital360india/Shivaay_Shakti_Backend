require('dotenv').config();
require('./db/db')
const express=require('express')
const LoginRouter=require('./routes/LoginRouter')
const CourseRouter=require('./routes/CourseRouter')
const SurveyRouter=require('./routes/SurveyRouter')
const ArticleRouter=require('./routes/ArticleRouter')
const PurchasedCourseRouter=require('./routes/PurchasedCourseRouter')
const cors=require('cors')
const app=express()
const port=process.env.PORT ||5000;
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("welcome");
})
app.use('/api/auth',LoginRouter);
app.use('/api/course',CourseRouter);
app.use('/api/survey',SurveyRouter);
app.use('/api/article',ArticleRouter);
app.use('/api/purchase',PurchasedCourseRouter);
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
  });
 