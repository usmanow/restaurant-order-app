import { axiosInstance } from '../index'

export const getCart = (userId) => {
  const token = localStorage.getItem('token')
  const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {}

  return axiosInstance.get(`/baskets/${userId}`, config).then((response) => response.data)
}

export const addProductToCart = (userId, goodId, amount = 1) => {
  const token = localStorage.getItem('token')
  const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {}

  return axiosInstance.post(`/baskets/${userId}/add`, { goodId, amount }, config).then((response) => response.data)
}