import axios from 'axios'
import showNotification from '../components/Notification/notification-emitter'
import { ERROR_NOTIFICATION } from '../components/Notification/notification-type'

export const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:9002/api/v1'
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      showNotification('Ошибка сети или сервер недоступен', ERROR_NOTIFICATION)
    }

    return Promise.reject(error)
  }
)