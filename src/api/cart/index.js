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

export const changeProductAmount = (userId, goodId, amount = 1) => {
  const token = localStorage.getItem('token')
  const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {}

  return axiosInstance.patch(`/baskets/${userId}/good`, { goodId, amount }, config).then((response) => response.data)
}

export const deleteProduct = (userId, goodId) => {
  const token = localStorage.getItem('token')
  const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {}

  return axiosInstance.delete(`/baskets/${userId}/good/${goodId}`, config).then((response) => response.data)
}