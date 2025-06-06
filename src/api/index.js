import axios from 'axios'
import { firebase, API_URL, USE_MOCK_DATA } from '@/config'
import mocks from '@/mocks'
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
    const response = await axios.post(API_URL + path, data, {
      headers: {
        'X-FIREBASE-TOKEN': await firebase.auth().currentUser.getIdToken(),
        'X-USER-EMAIL': await firebase.auth().currentUser.email
      }
    })
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

// async function getCabinet() {
//   return Promise.resolve(mock_cabinet);
// }

const getPolitician = id => {
  if (USE_MOCK_DATA) return Promise.resolve(mocks.politicians.find(x => x.id === id))
  return getSingle('/politicians/', id)
}

const getPoliticians = () => {
  if (USE_MOCK_DATA) return Promise.resolve(mocks.politicians)
  return getSomething('/politicians/')
}

const getPromise = id => {
  if (USE_MOCK_DATA) return Promise.resolve(mocks.promises.find(x => x.id === id))
  return getSomething('/promises/' + id)
}

const getLivePromises = query => {
  if (USE_MOCK_DATA) return Promise.resolve(mocks.promises)
  return getSomething('/promises/?live=true&' + query)
}

const getPoliticianPromises = id => {
  if (USE_MOCK_DATA) return Promise.resolve(mocks.promises.filter(p => p.politician_id === id))
  return getSomething(`/promises/?politician_id=${id}`)
}

const getList = id => {
  if (USE_MOCK_DATA) return Promise.resolve(mocks.lists.find(x => x.id === id))
  return getSomething('/lists/' + id)
}

const listLists = () => {
  if (USE_MOCK_DATA) return Promise.resolve(mocks.lists)
  return getSomething('/lists/')
}

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
    firebase
      .auth()
      .signOut()
      .then(
        function () {
          resolve()
        },
        function (error) {
          reject(error)
        }
      )
  })
}

async function postPromise ({ user, promise }) {
    const result = (await axios
      .post(API_URL + '/promises/', promise, {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'X-FIREBASE-TOKEN': await firebase.auth().currentUser.getIdToken(),
          'X-USER-EMAIL': user.email
        }
      })).data
    return result
}

async function getContributor (email) {
  try {
    const response = await axios.get(API_URL + '/contributors/?email=' + email, {
      headers: {
        'X-FIREBASE-TOKEN': await firebase.auth().currentUser.getIdToken(),
        'X-USER-EMAIL': email
      }
    })
    return response.data
  } catch (e) {
    console.error(e)
  }
}

const postContributor = data => postSomething('/contributors/', data)

const listPromiseUpdates = query => getSomething('/promiseUpdates/' + query)

export {
  getPolitician,
  getPoliticians,
  getPromise,
  getLivePromises,
  getPoliticianPromises,
  googleSignIn,
  googleLogout,
  postPromise,
  getContributor,
  postContributor,
  listPromiseUpdates,
  listLists,
  getList
}
