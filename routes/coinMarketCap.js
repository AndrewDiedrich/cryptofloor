const express = require('express');
const axios = require('axios');
const getData = require('./api/coinmcApi');
const router = express.Router();//router object instead of router
const keys = require('../config/dev');



router.get('/', async (req, res) => {
    try {
        const data = await axios({
              method: 'get',
              url: `${keys.proxy}https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`,
              qs: {
                start: 1,
                limit: 5000,
                convert: 'USD'
              },
              headers: {
                'X-CMC_PRO_API_KEY': `${keys.coinapi}`
              },
              json: true,
              gzip: true
          });
        res.send(data);
    }
    catch (err) {
      console.log('Error:', err.message);
    
    }
    
});

module.exports = router;