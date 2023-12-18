import axios from 'axios'
export default axios.create({
  baseURL: 'https://api-buildwithus.ai-softdev.com/',
  // baseURL: 'http://192.168.100.5:8000/',
  // baseURL: 'http://127.0.0.1:8000/'
})

