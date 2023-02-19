import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: true,
  headers: {
    accept: 'application/json'
  }
})

const fileInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: true,
  headers: {
    "Content-Type": 'multipart/form-data'
  }
})

export default {instance, fileInstance}
