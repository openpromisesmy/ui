import axios from 'axios'
import { firebase, API_URL } from '@/config'
const provider = new firebase.auth.GoogleAuthProvider()

async function getSomething (path) {
  try {
    const response = await axios.get(API_URL + path)
    return response.data
  } catch (e) {
    console.error(e)
  }
}

async function postSomething (path, data) {
  try {
    const response = await axios.post(API_URL + path, data)
    return response.data
  } catch (e) {
    console.error(e)
  }
}

async function getSingle (path, id) {
  try {
    const response = await axios.get(API_URL + path + id)
    const politicians = response.data
    return politicians
  } catch (e) {
    console.error(e)
  }
}

const getPolitician = id => getSingle('/politicians/', id)

const getPoliticians = () => getSomething('/politicians/')
const getPromises = () => getSomething('/promises/')
const getLivePromises = () => getSomething('/promises/?live=true')
const getPoliticianPromises = id => getSomething(`/promises/?politician_id=${id}`) // TODO: account for live too

function googleSignIn () {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const raw = result.user
        let user = {}

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
        console.error(error)
        reject(error)
      })
  })
}

function googleLogout () {
  return new Promise((resolve, reject) => {
    firebase.auth().signOut().then(function () {
      resolve()
    }, function (error) {
      reject(error)
    })
  })
}

function postPromise ({ user, promise }) {
  return new Promise(async (resolve, reject) => {
    axios
      .post(API_URL + '/promises/', promise, {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'X-FIREBASE-TOKEN': await firebase.auth().currentUser.getIdToken()
        }
      })
      .then(function (response) {
        const result = JSON.stringify(response)
        resolve(result)
      })
      .catch(function (error) {
        const result = error.response.data
        reject(result)
      })
  })
}

const getContributor = email => getSomething('/contributors/?email=' + email)
const postContributor = data => postSomething('/contributors/', data)

export {
  getPolitician,
  getPoliticians,
  getPromises,
  getLivePromises,
  getPoliticianPromises,
  googleSignIn,
  googleLogout,
  postPromise,
  getContributor,
  postContributor
}
