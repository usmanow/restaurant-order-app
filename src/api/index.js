import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:9002/api/v1'
})

axiosInstance.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})