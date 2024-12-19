const nodemailer = require("nodemailer");

const sendEmail = async (formData) => {
  const { name, email, number, gender, age, type, slots } = formData;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "shivaayshaktiyog@gmail.com", 
      pass: "xxev zdap dlzd jjt",
    },
  });

  const mailOptions = {
    from: email, 
    to: "shivaayshaktiyog@gmail.com", 
    subject: "New Enquiry from Shivaay Shakti Yog Portal",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${number}\nAge: ${age}\nGender: ${gender}\nType: ${type}\nTime Slots: ${slots}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return info; 
  } catch (error) {
    throw new Error(error); 
  }
};

module.exports = sendEmail;
