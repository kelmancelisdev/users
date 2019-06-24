import axios from 'axios'

const configApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
})

export default configApi
