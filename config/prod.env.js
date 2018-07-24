'use strict'
require('dotenv').config()
console.log(process.env)
module.exports = {
    NODE_ENV: '"production"',
    GOOGLE_API_KEY: process.env.PROD_GOOGLE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.PROD_FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL: process.env.PROD_FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID: process.env.PROD_FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.PROD_FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.PROD_FIREBASE_MESSAGING_SENDER_ID,
    FACEBOOK_APP_ID: process.env.PROD_FACEBOOK_APP_ID
}
