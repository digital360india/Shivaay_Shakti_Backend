const jwt = require("jsonwebtoken");
const Login = require("../../model/LoginModel");
const ResetPasswordController = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.headers.authorization);
    const { password } = req.body;
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.split(" ")[1];
      console.log(token);
      const match = jwt.verify(token, process.env.Secret_key);
      if (match.userid === id) {
        const res1 = await Login.findOne({ _id: id });
        if (res1) {
          res1.password = password;
          await res1.save();
          return res.status(200).json({ message: "Success" });
        }
        return res.status(404).json({ message: "User not found" });
      } else {
        return res.status(401).json({ message: "Unauthorized" });
      }
    } else {
      console.log("Authorization header is missing or invalid.");
    }
  } catch (e) {
    res.status(500).json({ message: "Internal Server Error", msg: e.message });
  }
};
module.exports = ResetPasswordController;
