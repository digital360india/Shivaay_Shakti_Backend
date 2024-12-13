const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Login = require('../../model/LoginModel');
const nodemailer = require("nodemailer");

const ForgetPasswordController = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await Login.findOne({ email });

    if (user) {
      // Generate a JWT token
      const token = jwt.sign({ userid: user._id }, process.env.Secret_key, { expiresIn: "30m" });

      // Send an email without the token in the link
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'infogoedu360@gmail.com',
          pass: "rxjp tesb xoac dein"
        }
      });

      var mailOptions = {
        from: 'infogoedu360@gmail.com',
        to: email,
        subject: 'Reset Password Request',
        text: `Click the link to reset your password: https://www.shivaayshaktiyog.com/reset-password/${user._id}`
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: "Error sending email" });
        }
        return res.status(200).json({ message: "Email sent successfully" });
      });
    } else {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const GetTokenController = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await Login.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate a fresh token
    const token = jwt.sign({ userid: id }, process.env.Secret_key, { expiresIn: "30m" });

    // Return the token in the response
    return res.status(200).json({ token });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { ForgetPasswordController, GetTokenController };
