import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyBR0GKAzyozw4tp_6Q0kOso1pT9XyHWHpQ',
  authDomain: 'openpromises-8526c.firebaseapp.com',
  databaseURL: 'https://openpromises-8526c.firebaseio.com',
  projectId: 'openpromises-8526c',
  storageBucket: 'openpromises-8526c.appspot.com',
  messagingSenderId: '100990292939'
}
firebase.initializeApp(config)

export {
  firebase
}
