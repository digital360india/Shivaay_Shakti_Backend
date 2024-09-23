require("dotenv").config();
require("./db/db");
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const LoginRouter = require("./routes/LoginRouter");
const CourseRouter = require("./routes/CourseRouter");
const SurveyRouter = require("./routes/SurveyRouter");
const ArticleRouter = require("./routes/ArticleRouter");
const PurchasedCourseRouter = require("./routes/PurchasedCourseRouter");
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("welcome");
});
app.use("/api/auth", LoginRouter);
app.use("/api/course", CourseRouter);
app.use("/api/survey", SurveyRouter);
app.use("/api/article", ArticleRouter);
app.use("/api/purchase", PurchasedCourseRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/send-email", (req, res) => {
  const { name, email, number, gender, age } = req.body;
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "shivaayshaktiyog@gmail.com",
      pass: "caer lkmo mxuv kmiw",
    },
  });
  const mailOptions = {
    from: email,
    to: "shivaayshaktiyog@gmail.com",
    subject: "New Enquiry from Shivaay Shakti Yog Portal",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${number}\nAge: ${age}\nGender: ${gender}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200);
    res.redirect("https://www.shivaayshaktiyog.com/");
  });
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
