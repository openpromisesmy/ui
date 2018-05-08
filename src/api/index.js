import axios from 'axios'
const API_URL = 'https://us-central1-openpromises-8526c.cloudfunctions.net'

function getSomething (path) {
  return async function() {
    try {
      const response = await axios.get(API_URL + path)
      const politicians = response.data
      return politicians
    } catch (e) {
      console.error(e)
    }
  }
}

const getPoliticians = getSomething('/politicians/');

export {
  getPoliticians
}
