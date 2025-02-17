import { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import * as jose from 'jose'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo, setUser } from '../store/usersSlice'
import { setCart, setIsCartLoading } from '../store/cartSlice'
import { getCart } from '../api/cart'
import showNotification from '../components/Notification/notification-emitter'
import { ERROR_NOTIFICATION } from '../components/Notification/notification-type'

const AuthContext = createContext({})

export const useAuthContext = () => useContext(AuthContext)

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const [token, setToken] = useState(() => window.localStorage.getItem('token'))
  const dispatch = useDispatch()
  const { id } = useSelector(getUserInfo)

  const login = (token) => {
    window.localStorage.setItem('token', token)
    setToken(token)
    navigate('/')
  }

  const logOut = () => {
    window.localStorage.removeItem('token')
    setToken(null)
    navigate('/authorization')
  }

  useEffect(() => {

    if (token) {
      const { userId, role, email } = jose.decodeJwt(token)
      dispatch(setUser({ id: userId, role, email }))
    }

  }, [token, dispatch])

  useEffect(() => {
    if (id) {
      const fetchCart = async () => {
        dispatch(setIsCartLoading(true))

        try {
          const response = await getCart(id)
          dispatch(setCart(response))
        } catch (error) {
          showNotification(error.response?.data?.message, ERROR_NOTIFICATION)
        } finally {
          dispatch(setIsCartLoading(false))
        }
      }

     fetchCart()
    }
  }, [dispatch, id])

  return (
    <AuthContext.Provider value={{ token, login, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider