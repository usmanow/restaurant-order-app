import { axiosInstance } from '../index'

const fetchDataWithToken = (endpoint, token) => {
  const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
  return axiosInstance.get(endpoint, config).then(res => res.data)
}

export const getProducts = (page, searchValue, token) => {
  return fetchDataWithToken(`/goods/?page=${page}&goodTitle=${searchValue}`, token);
}

export const getProductById = (id, token) => {
  return fetchDataWithToken(`/goods/${id}`, token)
}