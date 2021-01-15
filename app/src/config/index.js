import firebase from 'firebase'
const config = {
  apiKey: process.env.VUE_APP_GOOGLE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID
}

const facebookAppId = process.env.VUE_APP_FACEBOOK_APP_ID
firebase.initializeApp(config)

let API_URL = 'https://us-central1-openpromises-8526c.cloudfunctions.net'
// if (window.location.hostname === 'localhost') API_URL = 'http://localhost:5000/openpromises-8526c/us-central1'

export {
  firebase,
  API_URL,
  facebookAppId
}
