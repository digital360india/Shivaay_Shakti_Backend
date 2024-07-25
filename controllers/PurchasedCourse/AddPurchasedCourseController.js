const Purchased = require("../../model/PurchasedCourseModel");
const AddPurchasedCourseController = async (req, res) => {
  // console.log("hello")
  try {
    const obj = new Purchased(req.body);
    await obj.save();
    res
      .status(201)
      .json({ success: true, message: "Course Purchased Successfully" });
    console.log(res);
  } catch (e) {
    res.status(500).json({ success: false, message: "Server Error", e });
    console.log(res);
  }
};
module.exports = AddPurchasedCourseController;
