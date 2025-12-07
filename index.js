const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
// import app from '../js/script.js';

// document.getElementById('submitBtn').addEventListener('click', function getFormData() {
//   return console.log(app);
// });

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/register", (req, res) => {
  const formData = req.body;

  console.log("Registration form received:", formData);

  res.json({
    message: "Registration successful!",
    data: formData,
  });
});

const PORT = process.env.PORT || 5501;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// Create transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: process.env.EMAIL_USER, // your email address
    pass: process.env.EMAIL_PASS, // your email password or app password
  },
});

app.post("/register", (req, res) => {
  const formData = req.body;
  console.log("Registration form received:", formData);

  const mailOptions = {
    from: `"Your Website" <${process.env.EMAIL_USER}>`,
    to: "recipient@example.com", // where you want the email to go
    subject: "New Registration Form Submission",
    text: `You received a new registration:\n\nName: ${formData.username}\nEmail: ${formData.email}`,
    html: `<h2>New Registration</h2>
           <p><strong>Name:</strong> ${formData.username}</p>
           <p><strong>Email:</strong> ${formData.email}</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Email failed", error });
    }
    console.log("Email sent:", info.response);
    res.json({
      message: "Registration successful! Email sent.",
      data: formData,
    });
  });
});

