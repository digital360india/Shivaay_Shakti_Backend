const mongoose = require("mongoose");
const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  main_url: { type: String, required: true },
  course_type1: {
    type: String,
    default: "Personal Training Course",
  },
  live_sessions1: { type: Number, required: true },
  recorded_sessions1: { type: Number, required: true },
  course_duration_days1: { type: Number, required: true },
  Personal_description1: { type: String, required: true },
  beginner_friendly1: { type: Boolean, required: true },
  female_oriented1: { type: Boolean, required: true },
  age_range1: { type: String, required: true },
  price1: { type: Number, required: true },
  personal_url1: { type: String, required: true },
  course_type2: {
    type: String,
    default: "Group Training Course",
  },
  live_sessions2: { type: Number, required: true },
  recorded_sessions2: { type: Number, required: true },
  Group_description2: { type: String, required: true },
  course_duration_days2: { type: Number, required: true },
  beginner_friendly2: { type: Boolean, required: true },
  female_oriented2: { type: Boolean, required: true },
  age_range2: { type: String, required: true },
  price2: { type: Number, required: true },
  group_url2: { type: String, required: true },
  group_timing: {
    type: [
      {
        times: { type: String, required: true },
        link: { type: String, required: true },
        session: { type: String, required: true },
      },
    ],
    required: true,
  },
  group_starting_date: { type: String, required: true },
  group_batch_size: { type: String, required: true },
  personal_duration: {
    type: [
      {
        timing: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
    required: true,
  },
  group_duration: {
    type: [
      {
        timing1: { type: String, required: true },
        price3: { type: Number, required: true },
      },
    ],
    required: true,
  },
});

module.exports = mongoose.model("Course", CourseSchema);
