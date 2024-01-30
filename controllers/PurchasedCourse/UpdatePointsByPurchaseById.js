const Purchased = require('../../model/PurchasedCourseModel');

const UpdatePointsByPurchaseById = async (req, res) => {
  console.log(req.params);
  console.log(req.body);
  const { date1, point } = req.body;
  const { _id } = req.params;

  try {
    const response = await Purchased.findById(
      _id  );
    
    if (response) {
      if (!response.points) {
        response.points = [];
      }
      response.points.push(req.body);
      await response.save();
      res.status(200).json({ message: "Updated successfully", data: response });
    } 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = UpdatePointsByPurchaseById;
