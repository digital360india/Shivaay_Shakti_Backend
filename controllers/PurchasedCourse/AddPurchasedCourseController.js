const Purchased = require("../../model/PurchasedCourseModel");
const AddPurchasedCourseController = async (req, res) => {
  try {
    console.log("Request body:", req.body);

    const {
      name,
      user_id,
      preferred_timing,
      duration,
      status,
      price,
      transaction_id,
      transaction_status,
      starting_date,
      course_id,
      course_name,
      expiration_date,
      course_type,
    } = req.body;

    if (
      !name ||
      !user_id ||
      !preferred_timing ||
      !duration ||
      !status ||
      !price ||
      !transaction_id ||
      !transaction_status ||
      !starting_date ||
      !course_id ||
      !course_name ||
      !expiration_date ||
      !course_type
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const obj = new Purchased(req.body);
    await obj.save();
    res
      .status(201)
      .json({ success: true, message: "Course Purchased Successfully" });
  } catch (e) {
    console.error("Error in AddPurchasedCourseController:", e);
    res.status(500).json({ success: false, message: "Server Error", error: e });
  }
};

module.exports = AddPurchasedCourseController;
