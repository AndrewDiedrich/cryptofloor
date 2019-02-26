'use strict';

module.exports = {
  PORT: process.env.PORT || 5000,
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN,
  AWS_SES: {
    accessKeyId: process.env.AWS_SES_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY, 
    region: process.env.AWS_SES_REGION 
  }
}
