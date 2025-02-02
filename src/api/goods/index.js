import { axiosInstance } from '../index'

const fetchDataWithToken = (endpoint, token) => {
  const config = token ? {
    headers: { Authorization: `Bearer ${token}` }
  } : {}

  return axiosInstance.get(endpoint, config)
}

export const getGoods = (page = '1', token) => {
  return fetchDataWithToken(`/goods/?page=${page}`, token)
}

export const getGoodById = (id, token) => {
  return fetchDataWithToken(`/goods/${id}`, token)
}