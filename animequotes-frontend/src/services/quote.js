import axios from 'axios'
const baseUrl = '/api/quotes'

const getRandom = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { getRandom }