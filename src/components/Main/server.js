// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = process.env.PORT || 4001;

// // Middleware to parse JSON requests
// app.use(bodyParser.json());

// // Nodemailer configuration (use your email service and credentials)
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'jhaayush803@gmail.com',
//     pass: '12345'
//   }
// });

// // Email sending endpoint
// app.post('/send-email', (req, res) => {
//   const { name, phoneNumber, recipientEmail } = req.body;

//   // Email content
//   const mailOptions = {
//     from: 'your_email@gmail.com',
//     to: recipientEmail,
//     subject: 'Callback Request',
//     text: `Callback Request\n\nName: ${name}\nPhone Number: ${phoneNumber}`
//   };

//   // Send email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//       res.status(500).send('Error sending email');
//     } else {
//       console.log('Email sent:', info.response);
//       res.status(200).send('Email sent successfully');
//     }
//   });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
