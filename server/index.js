'use strict';

require('dotenv').config();

const express = require('express'); //will use common js modules
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookieSession = require('cookie-session');
const home = require('./routes/home');
const contact = require('./routes/contact');
const linkedinS3 = require('./routes/linkedinS3');
const placecard = require('./routes/placecard');
const app = express();
const {PORT, CLIENT_ORIGIN, COOKIEKEY} = require('./config');

//const mongo = require('./mongo');

//get linkedin strat
require('./services/passport'); //just want to run it dont have to assign it 
//const authRoutes = require('./routes/authRoutes');

/**BUILT IN */
//docker middleware
app.use(morgan('combined'))
//
app.use(express.json()); //express.json() returns func with 3 params req, res, next parses req.body and if josn object sets it to req.body 
//middleware function - parese incoming request with url encoded payloads // key=value&key=value parses to req.body
//app.use(express.urlencoded( { extended: true}));
//serve static files, arg is folder name, css/img/ etc.
app.use(express.static('public'));
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [COOKIEKEY]
  })
);
//immediately invokes authroutes function with express app;
//require('./routes/linkedin')(app);

/**********Routes *********/
app.use('/', placecard);
app.use('/api', home);
app.use('/api', contact);
app.use('/api', linkedinS3);
//app.use('/api/coinmarketcap', coinMarketCap);




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
//const PORT = PORT;
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
});