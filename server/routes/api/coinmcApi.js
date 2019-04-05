const axios = require('axios');
const keys = require('../../config/dev');

//callback is what we get when we call http get request to rul endpoint
//define route with path(url) and callback(route handler)
//refactor routes to '/' because index.js is telling app that any api/courses takes route handlers from here

const getData = async ({ proxy, coinapi } = keys) => {
  try {  
    return await axios({
      method: 'GET',
      url: `${proxy}https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`,
      qs: {
        start: 1,
        limit: 5000,
        convert: 'USD'
      },
      headers: {
        'X-CMC_PRO_API_KEY': `${coinapi}`
      },
      json: true,
      gzip: true
  });
  } catch (error) {
    console.log('Error:', error.message)
  }
};

module.exports = getData;






