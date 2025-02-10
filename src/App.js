import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import AuthContextProvider, { useAuthContext } from './context/authContext'
import GlobalStyles from './styles/GlobalStyles.styled'
import MainPage from './pages/MainPage/MainPage'
import AuthPage from './pages/AuthPage/AuthPage'
import ProductPage from './pages/ProductPage/ProductPage'
import CartPage from './pages/CartPage/CartPage'
import Notification from './components/Notification/Notification'
import { Provider } from 'react-redux'
import store from './store'

const CheckAuth = ({ children }) => {
  const { token } = useAuthContext()
  return token ? children : <Navigate to='/authorization' />
}

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <AuthContextProvider>
          <Routes>
            <Route path='/' element={<CheckAuth> <MainPage /> </CheckAuth>} />
            <Route path='/authorization' element={<AuthPage />} />
            <Route path='/good/:goodId' element={<CheckAuth> <ProductPage /> </CheckAuth>} />
            <Route path='/cart' element={<CheckAuth> <CartPage /> </CheckAuth>} />
          </Routes>
          <Notification />
        </AuthContextProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App