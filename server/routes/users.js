const express = require('express');
const router = express.Router();//router object instead of router
const mongoose = require('mongoose');

//callback is what we get when we call http get request to rul endpoint
//define route with path(url) and callback(route handler)
//refactor routes to '/' because index.js is telling app that any api/courses takes route handlers from here
router.get('/api/current_user', (req, res) => {
    
    res.send(() => {
        async function getUser() {
                //.find method by id
                const users = await User
                    .find({ name: 'Andrew' })
                console.log(users);
            }
            
    })
  
});

module.exports = router;