const express = require('express');
const axios = require('axios');
const getData = require('./api/coinmcApi');
const router = express.Router();//router object instead of router
const keys = require('../config/dev');



router.get('/', async (req, res) => {
        const data = await res.send();
});

module.exports = router;