import Header from '../../layouts/header/Header'
import Main from '../../layouts/main/Main'

const MainPage = () => {
  return (
    <>
      <Header
        showArrow={false}
        title='Наша продукция'
      />
      <Main
        mainType='goods'
      />
    </>
  )
}

export default MainPage