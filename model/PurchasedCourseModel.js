const mongoose = require("mongoose");
const PurchasedCourseSchema = new mongoose.Schema({
  name: { type: String, required: false },
  user_id: { type: String, required: false },
  preferred_timing: { type: String, required: false },
  duration: { type: String, required: false },
  status: { type: String, required: false },
  price: { type: Number, required: false },
  transaction_id: { type: String, required: false, unique: false },
  transaction_status: { type: String, required: false },
  link: { type: String },
  starting_date: { type: String, required: false },
  course_id: { type: String, required: false },
  course_name: { type: String, required: false },
  expiration_date: { type: String, required: false },
  course_type: { type: String, required: false },
  date: { type: Date, default: Date.now() },
  days: { type: [{ type: String }], default: undefined },
  remarks: { type: String },
  points: {
    type: [
      {
        date1: { type: String, required: false, unique: false },
        point: { type: Number, required: false },
      },
    ],
    default: undefined,
  },
});
module.exports = mongoose.model("Purchase_Course", PurchasedCourseSchema); 
