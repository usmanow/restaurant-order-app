import GlobalStyles from './styles/GlobalStyles.styled'
// import MainPage from './pages/MainPage/MainPage'
import RegForm from './components/RegForm/RegForm'
import LoginForm from './components/LoginForm/LoginForm'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <LoginForm />
      <RegForm />
      {/* <MainPage /> */}
    </>
  )
}

export default App