const express = require('express');
const passport = require('passport');
const router = express.Router();//router object instead of router
const axios = require('axios');

module.exports = app => { //call with express app object
        //route handler with express, GoogleStrategy has internal identifier of 'linkedin'
    app.get('/auth/linkedin',
    passport.authenticate('linkedin', { state: 'SOME STATE'  }),
    function(req, res){
        // The request will be redirected to LinkedIn for authentication, so this
        // function will not be called.
    });

    app.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
        successRedirect: '/success',
        failureRedirect: '/login'
    }));

    app.get('/login', (req, res) => {
        res.send({failure: 'login to linkedin again'});
    })
}