const mongoose=require('mongoose');
mongoose.connect(process.env.DB)
.then(()=>console.log("connected"))
.catch((e)=>console.log("Error"+e));
