const Purchased = require('../../model/PurchasedCourseModel');

const UpdatePointsByPurchaseById = async (req, res) => {
  console.log(req.params);
  console.log(req.body);
  // const { _id } = req.params;
  try {
    // const response = await Purchased.findById(_id);
    // if(!response.points)
    // {
    //  response.points=[];
    //  response?.points?.push(req.body);
    //  await response.save();
    //  res.status(200).json({ message: "Updated successfully", data: response });
    // }
    
    // if(response?.points?.find(a=>a?.date1===req.body?.date1))
    // {
    //   res.status(400).json({ message: "Data already submitted", data: response });
      
    // }
    // else{
    //   response?.points?.push(req.body);
    //   await response.save();
    //   res.status(200).json({ message: "Updated successfully", data: response });
    // }
    } 
   catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = UpdatePointsByPurchaseById;
