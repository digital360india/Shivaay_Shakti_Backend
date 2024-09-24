require("dotenv").config(); // Load environment variables
require("./db/db");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const sendEmail = require("./mailService"); // Import the mail service
const LoginRouter = require("./routes/LoginRouter");
const CourseRouter = require("./routes/CourseRouter");
const SurveyRouter = require("./routes/SurveyRouter");
const ArticleRouter = require("./routes/ArticleRouter");
const PurchasedCourseRouter = require("./routes/PurchasedCourseRouter");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors({
  origin: ["https://www.shivaayshaktiyog.com"], 
}));

app.get("/", (req, res) => {
  res.send("Welcome to Shivaay Shakti Yog Portal");
});

app.use("/api/auth", LoginRouter);
app.use("/api/course", CourseRouter);
app.use("/api/survey", SurveyRouter);
app.use("/api/article", ArticleRouter);
app.use("/api/purchase", PurchasedCourseRouter);

app.post("/send-email", async (req, res) => {
  try {
    const info = await sendEmail(req.body); 
    res.status(200).json({ message: "Email sent successfully!", info });
  } catch (error) {
    res.status(500).json({ message: "Error sending email", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

