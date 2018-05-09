import axios from 'axios'
import { firebase } from '@/config'
const provider = new firebase.auth.GoogleAuthProvider()
const API_URL = 'https://us-central1-openpromises-8526c.cloudfunctions.net'

function getSomething (path) {
  return async function () {
    try {
      const response = await axios.get(API_URL + path)
      const politicians = response.data
      return politicians
    } catch (e) {
      console.error(e)
    }
  }
}

const getPoliticians = getSomething('/politicians/')
const getPromises = getSomething('/promises/')

function googleSignIn () {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.idToken;
        // The signed-in user info.
        const raw = result.user
        let user = {}
        // that.appStatus = appStatus.authenticated // TODO: move

        user.name = raw.displayName
        user.email = raw.email
        user.photoURL = raw.photoURL

        firebase
          .auth()
          .currentUser.getIdToken(/* forceRefresh */ true)
          .then(idToken => {
            user.token = idToken
            resolve(user)
          })
          .catch(error => {
            reject(error)
          })
      })
      .catch(error => {
        // Handle Errors here.
        // const errorCode = error.code
        // const errorMessage = error.message
        // The email of the user's account used.
        // const email = error.email
        // The firebase.auth.AuthCredential type that was used.
        // const credential = error.credential
        // ...
        console.error(error)
        reject(error)
      })
  })
}

export {
  getPoliticians,
  getPromises,
  googleSignIn
}
