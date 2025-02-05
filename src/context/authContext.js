import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router'

const AuthContext = createContext({})

export const useAuthContext = () => useContext(AuthContext)

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const [token, setToken] = useState(() => window.localStorage.getItem('token'))

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

  return (
    <AuthContext.Provider value={{ token, login, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider