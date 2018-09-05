import firebase from 'firebase'
const config = {
  apiKey: process.env.GOOGLE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}
const facebookAppId = process.env.FACEBOOK_APP_ID
firebase.initializeApp(config)

let API_URL = 'https://us-central1-openpromises-8526c.cloudfunctions.net'
// if (window.location.hostname === 'localhost') API_URL = 'http://localhost:5000/openpromises-8526c/us-central1'

export {
  firebase,
  API_URL,
  facebookAppId
}
