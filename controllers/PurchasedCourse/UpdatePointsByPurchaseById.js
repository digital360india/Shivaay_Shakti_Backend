const Purchased = require('../../model/PurchasedCourseModel');

const UpdatePointsByPurchaseById = async (req, res) => {
  console.log(req.params);
  console.log(req.body);
  const { date1, point } = req.body;
  const { _id } = req.params;

  try {
    const response = await Purchased.updateOne(
      { _id:  mongoose.Types.ObjectId(_id)}, 
      { $push: { points: { date1: date1, point: point } } },
      { new: true, runValidators: true }
    );

    console.log(response)
    if (response.nModified > 0) {
      res.status(200).json({ message: "Updated successfully", data: response });
    } else {
      res.status(404).json({ message: "ID not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = UpdatePointsByPurchaseById;
