import GlobalStyles from './styles/GlobalStyles.styled'
import Header from './layouts/header/Header'
import Main from './layouts/main/Main'
import Footer from './layouts/footer/Footer'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App