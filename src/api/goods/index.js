import { axiosInstance } from '../index'

export const getGoods = () => {
  return axiosInstance.get(`/goods`)
}