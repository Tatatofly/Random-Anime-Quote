import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/quotes' // Herokuun buildaessa poistetaan alku ja tehdään relatiivinen

const getRandom = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { getRandom }