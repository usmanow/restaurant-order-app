import { axiosInstance } from '../index'

export const getGoods = (page = '1') => {
  return axiosInstance.get(`/goods/?page${page}`)
}