import axios from 'axios'
const API_URL = 'https://us-central1-openpromises-8526c.cloudfunctions.net'

async function getPoliticians () {
  try {
    const response = await axios.get(API_URL + '/politicians/')
    const politicians = response.data
    return politicians
  } catch (e) {
    console.error(e)
  }
}

export {
  getPoliticians
}
