import firebase from 'firebase'
const config = {
  apiKey: 'AIzaSyBR0GKAzyozw4tp_6Q0kOso1pT9XyHWHpQ',
  authDomain: 'openpromises-8526c.firebaseapp.com',
  databaseURL: 'https://openpromises-8526c.firebaseio.com',
  projectId: 'openpromises-8526c',
  storageBucket: 'openpromises-8526c.appspot.com',
  messagingSenderId: '100990292939'
}
firebase.initializeApp(config)

let API_URL = 'https://us-central1-openpromises-8526c.cloudfunctions.net'
if (window.location.hostname === 'localhost') API_URL = 'http://localhost:5000/openpromises-8526c/us-central1'

export {
  firebase,
  API_URL
}
