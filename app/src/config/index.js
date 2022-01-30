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

const API_URL = process.env.VUE_APP_API_URL
console.log({API_URL, config})

export {
  firebase,
  API_URL,
  facebookAppId
}
