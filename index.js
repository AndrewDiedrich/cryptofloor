const express = require('express'); //will use common js modules
//const keys = require('./config/keys');

const app = express();


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
app.listen(PORT);