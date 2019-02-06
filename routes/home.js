const keys = require('../config/dev');
const express = require('express');
const router = express.Router();//router object instead of router
const axios = require('axios');


//callback is what we get when we call http get request to rul endpoint
//define route with path(url) and callback(route handler)
//refactor routes to '/' because index.js is telling app that any api/courses takes route handlers from here
router.get('/coinall', async (req, res) => {
    try {  
    console.log('requesting')
      data = await axios({
        method: 'get',
        url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`, //${proxy}   
        gs: {
          start: 1,
          limit: 5000,
          convert: 'USD'
        },
        headers: {
          'X-CMC_PRO_API_KEY': `${keys.coinapi}`//`${coinapi}`
        },
        json: true,
        gzip: true
    })
    console.log(data.data.data.slice(0,9));
    res.send(data.data.data.slice(0,9));
    } catch (error) {
      console.log('Error:', error.message)
    }
  });
  


module.exports = router;