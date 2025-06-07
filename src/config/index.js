import firebase from 'firebase/app'
import 'firebase/auth'
import { assert } from '../utils/index'

const config = {
  apiKey: import.meta.env.VUE_APP_GOOGLE_API_KEY,
  authDomain: import.meta.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VUE_APP_FIREBASE_APP_ID
}

Object.keys(config).forEach(key => {
  assert(config[key], key);
})

const facebookAppId = import.meta.env.VUE_APP_FACEBOOK_APP_ID
firebase.initializeApp(config)

const API_URL = import.meta.env.VUE_APP_API_URL
assert(API_URL, 'API_URL');

const USE_MOCK_DATA = import.meta.env.VUE_APP_USE_MOCK_DATA !== 'false'

export {
  firebase,
  API_URL,
  facebookAppId,
  USE_MOCK_DATA
}
