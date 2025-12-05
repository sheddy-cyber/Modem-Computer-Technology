const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

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