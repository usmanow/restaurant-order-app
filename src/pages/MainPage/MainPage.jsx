import { useEffect, useState } from 'react'
import Header from '../../layouts/header/Header'
import Main from '../../layouts/main/Main'
import { useLocation, useNavigate } from 'react-router'
import { useDebounce } from '../../hooks/useDebouncedValue'

const MainPage = () => {
  const [searchValue, setSearchValue] = useState('')
  const debouncedQuery = useDebounce(searchValue, 500)
  const [page, setPage] = useState(1)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const query = queryParams.get('query') || ''
    const page = Number(queryParams.get('page')) || 1
    setSearchValue(query)
    setPage(page)
  }, [location.search])

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    if (debouncedQuery) {
      navigate(`?query=${debouncedQuery}&page=1`, { replace: true })
    }
  }, [debouncedQuery, navigate])

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
        searchValue={debouncedQuery}
        page={page}
      />
    </>
  )
}

export default MainPage