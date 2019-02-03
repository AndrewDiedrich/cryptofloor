const keys = require('../config/dev');
const express = require('express');
const router = express.Router();//router object instead of router
const axios = require('axios');
const rp = require('request-promise');

//callback is what we get when we call http get request to rul endpoint
//define route with path(url) and callback(route handler)
//refactor routes to '/' because index.js is telling app that any api/courses takes route handlers from here
router.get('/coinall', async (req, res) => {
    
// const requestOptions = {
//   method: 'GET',
//   uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
//   qs: {
//     start: 1,
//     limit: 5000,
//     convert: 'USD'
//   },
//   headers: {
//     'X-CMC_PRO_API_KEY': '8b41b516-58a7-4a14-8714-262e232f6597'
//   },
//   json: true,
//   gzip: true
// };

// rp(requestOptions).then(response => {
//   console.log('API call response:', response);
// }).catch((err) => {
//   console.log('API call error:', err.message);
// });
    
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
          'X-CMC_PRO_API_KEY': '8b41b516-58a7-4a14-8714-262e232f6597'//`${coinapi}`
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