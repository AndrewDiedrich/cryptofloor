const keys = require('../config');
const express = require('express');
const router = express.Router();//router object instead of router
const axios = require('axios');


//callback is what we get when we call http get request to rul endpoint
//define route with path(url) and callback(route handler)
//refactor routes to '/' because index.js is telling app that any api/courses takes route handlers from here
router.get('/success', async (req, res) => {
    res.send({message: 'succesful login to Linkedin /success'})
  });

router.get('/', (req, res) => {
    res.send({message: 'app started /home'});
})

router.get('/profile', async (req, res) => {
    try {
        const data = await axios({
        header: 'X-RestLi-Protocol-Version:2.0.0',
        method: 'get',
        url: 'https://api.linkedin.com/v2/me',
        grant_type: 'client_credentials',	
        client_id: keys.LINKEDIN.client_id,
        client_secret: keys.LINKEDIN.client_secret
    })
    return data;
} catch(error) {
    console.log('profile error', error);
}
  });

  module.exports = router;