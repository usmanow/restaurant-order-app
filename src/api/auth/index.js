import { axiosInstance } from '../index'

export const registration = (email, password) => {
  return axiosInstance.post('/auth/registration', { email, password })
}

export const login = (email, password) => {
  return axiosInstance.post('/auth/login', { email, password })
}