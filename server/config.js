'use strict';

module.exports = {
  PORT: process.env.PORT || 5000,
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN,
  AWS_SES: {
    accessKeyId: process.env.AWS_SES_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY, 
    region: process.env.AWS_SES_REGION 
  },
  LINKEDIN: {
    client_id: process.env.LINKEDIN_CLIENT_ID,
    client_secret: process.env.LINKEDIN_CLIENT_SECRET 
  },
  COOKIEKEY: process.env.COOKIEKEY, 
  AWS_S3_BUCKET: process.env.AWS_S3_BUCKET,
  LINKEDIN_LOGIN_EMAIL: process.env.LINKEDIN_LOGIN_EMAIL,
  LINKEDIN_LOGIN_PASSWORD: process.env.LINKEDIN_LOGIN_PASSWORD
}
