const keys = require('../config/dev');
const express = require('express');
const router = express.Router();//router object instead of router
const axios = require('axios');


//callback is what we get when we call http get request to rul endpoint
//define route with path(url) and callback(route handler)
//refactor routes to '/' because index.js is telling app that any api/courses takes route handlers from here
router.get('/linkedinimgsrc', async (req, res) => {
      
        contacts = { 
            ADA: 'https://media.licdn.com/dms/image/C5603AQGLikg6UjSGkQ/profile-displayphoto-shrink_800_800/0?e=1558569600&v=beta&t=5dSEZ8eVExJCYkUIEit8pfTaF3KuimuTv2pESNor188',
            Aurt: 'https://media.licdn.com/dms/image/C4E03AQHvf1Vw2rnpYg/profile-displayphoto-shrink_800_800/0?e=1558569600&v=beta&t=sHfWuq_T5KUhTMYYD-6_f39usBCnf5KoKaeKlyUYoXE'
        }
    try {
    console.log(contacts);
    res.send(contacts);
    } catch (error) {
      console.log('Error:', error.message)
    }
  });

  // router.get('/linkedIn', async (req, res) => {
  //   try {  
  //   console.log('requesting linkedin')
  //     data = await axios({
  //       method: 'get',
  //       url: `https://www.linkedin.com/oauth/v2/accessToken`, //${proxy}   
  //       grant_type: 'client_credentials',
  //       client_id: '86eqipliqx83sq',
  //       client_secret: 'TbqcWWi5GxUZfCV7',
  //       json: true,
  //       gzip: true
  //   })
  //   console.log(data);
  //   res.send(data);
  //   } catch (error) {
  //     console.log('Error status:', error.response.status)
  //     res.sendStatus(error.response.status)
  //   }
  // });


/**Coint market cap holc */
// router.get('/coinhist', async (req, res) => {
//   try {  
//   console.log('requesting')
//     data = await axios({
//       method: 'get',
//       url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/ohlcv/historical`, //${proxy}   
//       gs: {
//         start: 1,
//         limit: 5000,
//         convert: 'USD'
//       },
//       headers: {
//         'X-CMC_PRO_API_KEY': `${keys.coinapi}`//`${coinapi}`
//       },
//       json: true,
//       gzip: true
//   })
//   console.log(data.data.data.slice(0,9));
//   res.send(data.data.data.slice(0,9));
//   } catch (error) {
//     console.log('Error:', error.message)
//   }
// });
  


module.exports = router;