'use strict';
require('dotenv').config();
const express = require('express');
const router = express.Router();
const AWS = require("aws-sdk");
const { AWS_SES } = require('../config');
//const minimumMessageLength = 10;

// config AWS SES credentials
AWS.config.update( AWS_SES );
  
//Service object
const ses = new AWS.SES({ apiVersion: "2010-12-01" });

// POST: accept customer name, email, message send back automatic email
router.post('/contact', async (req, res) => {
//req.body for frontend entry
  const { name, email, message } = req.body;

//   if (!name) {
//       return res.status(400).json({
//           error: `name is required.`
//       });
//   }

//   if (!validateEmail(email)) {
//       return res.status(400).json({
//           error: `'email' is required.`
//       });
//   }

//   if (!message || message.length < minimumMessageLength) {
//       return res.status(400).json({
//           error: `'message' length must be at least ${minimumMessageLength}.`
//       });
//   }
  //return object of contact params
  const params = (name, email, message) => {
    return { Destination: {
      ToAddresses: ["diedr067@gmail.com"] // Email address/addresses that you want to send your email to
      },
      Message: {
        Body: {
          Html: {
            // HTML Format of the email
            Charset: "UTF-8",
            Data: //message sent to 
              `<html>
              <body>
                <h1>Hello ${name}</h1>
                <p style='color:blue'>${message}</p>
                <a style='color:red' href=${email}>${email}</a>
                <p>${Date()}</p>
              </body>
              </html>`
          },
          Text: {
            Charset: "UTF-8",
            Data: `${message}`
          }
        },
        Subject: {
          Charset: "UTF-8",
          Data: "Test email"
        }
      },
      Source: "diedr067@gmail.com"  //where email is coming from
    }
  };

  //create email promise with params, func called with req.body vars --> name, email, message
  const sendEmail = ses.sendEmail(params(name, email, message)).promise();

  //call sendEmail promise to send email 
  try {
    console.log('requesting data');
    const data = await sendEmail
    console.log("email submitted to SES", data);
    // res.status(200).json({
    // result: 'OK'
    // });
    res.redirect('http://localhost:3000');
  } catch(error) {
      console.log("Error:", error.message);
  }
  
});

module.exports = router;


// POST: accept an email address and send it to Hubspot
// router.post('/contact', async (req, res) => {

//     const {name, email, message} = req.body;
//     if (!name) {
//         return res.status(400).json({
//             error: `name is required.`
//         });
//     }

//     if (!validateEmail(email)) {
//         return res.status(400).json({
//             error: `'email' is required.`
//         });
//     }

//     if (!message || message.length < minimumMessageLength) {
//         return res.status(400).json({
//             error: `'message' length must be at least ${minimumMessageLength}.`
//         });
//     }

     //Send email to DAIX with email details

//     res.status(200).json({
//         result: 'OK'
//     });
// });

// module.exports = router;


