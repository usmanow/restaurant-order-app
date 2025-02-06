import { useEffect, useState } from 'react'
import Header from '../../layouts/header/Header'
import Main from '../../layouts/main/Main'
import { useLocation, useNavigate } from 'react-router'

const MainPage = () => {
  const [searchValue, setSearchValue] = useState('')
  const [page, setPage] = useState('1')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const query = queryParams.get('query') || ''
    const page = queryParams.get('page') || '1'
    setSearchValue(query)
    setPage(Number(page))
  }, [location.search])

  const handleSearchChange = (e) => {
    const query = e.target.value
    navigate(`?query=${query}&page=1`, { replace: true })
  }

  return (
    <>
      <Header
        showArrow={false}
        backgroundColor={true}
        title='Наша продукция'
        showInput={true}
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
      />
      <Main
        mainType='goods'
        searchValue={searchValue}
        page={page}
      />
    </>
  )
}

export default MainPage