const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/api/coinall/', { target: 'http://localhost:5000'}));
    app.use(proxy('/api/s3linkedin/', { target: 'http://localhost:5000' }));
    app.use(proxy('/api/contact/', { target: 'http://localhost:5000' }));
    
}