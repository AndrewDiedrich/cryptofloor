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
const s3 = new AWS.S3({ apiVersion: "2010-12-01" });

router.get('/s3linkedin/:imageKey', async (req, res) => {
    var params = { Bucket: 'linkedin-img-dev', Key: req.params.imageKey };
    try {
    await s3.getSignedUrl('getObject', params, (error, data) => {
    console.log("got image:", data);
    res.send(data)
        });
    } catch(error) {
        console.log("Error:", error.message);
    }
});

    module.exports = router;