import { axiosInstance } from '../index'

const fetchDataWithToken = async (endpoint, token) => {
  const config = token ? {
    headers: { Authorization: `Bearer ${token}` }
  } : {}

  try {
    const response = await axiosInstance.get(endpoint, config)
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Неизвестная ошибка')
  }
}

export const getGoods = async (page = '1', token) => {
  return fetchDataWithToken(`/goods/?page=${page}`, token)
}

export const getGoodById = async (id, token) => {
  return fetchDataWithToken(`/goods/${id}`, token)
}