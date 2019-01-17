const express = require('express'); //will use common js modules
//const keys = require('./config/keys');
const home = require('./routes/home');
const coinMarketCap = require('./routes/coinMarketCap');
const app = express();
const axios = require('axios');
//const mongo = require('./mongo');

/**BUILT IN */
app.use(express.json()); //express.json() returns func with 3 params req, res, next parses req.body and if josn object sets it to req.body 
//middleware function - parese incoming request with url encoded payloads // key=value&key=value parses to req.body
app.use(express.urlencoded( { extended: true}));
//serve static files, arg is folder name, css/img/ etc.
app.use(express.static('public'));


app.use('/', home);
app.use('/api/coinmarketcap', coinMarketCap);


if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    //like main.js file, or main.css file
    app.use(express.static('client/build'));
    //express will serve index.html file
    //if doesn't recognize route
    //catch all case and just send to index.html file
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

//production use process.env.port linked to heroku env variable, 
//development use 5000, 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
});