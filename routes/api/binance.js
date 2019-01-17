const express = require('express');
const router = express.Router();//router object instead of router

//callback is what we get when we call http get request to rul endpoint
//define route with path(url) and callback(route handler)
//refactor routes to '/' because index.js is telling app that any api/courses takes route handlers from here
router.get('/api/binance', (req, res) => {
    
    res.send('binance data')
  
});

module.exports = router;
  

