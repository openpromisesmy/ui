import firebase from 'firebase'
import { assert } from '../utils/index'

const config = {
  apiKey: process.env.VUE_APP_GOOGLE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID
}

Object.keys(config).forEach(key => {
  assert(config[key], key);
})

const facebookAppId = process.env.VUE_APP_FACEBOOK_APP_ID
firebase.initializeApp(config)

const API_URL = process.env.VUE_APP_API_URL
assert(API_URL, 'API_URL');

export {
  firebase,
  API_URL,
  facebookAppId
}
