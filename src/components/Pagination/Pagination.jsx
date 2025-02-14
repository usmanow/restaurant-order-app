import { StyledPagination } from './Pagination.styled'

const Pagination = ({ currentPage, totalProducts, productsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage)

  const handlePageClick = (page) => {
    if (page !== currentPage) onPageChange(page)
  }

  const pageNumbers = [...Array(totalPages)].map((_, i) => i + 1)

  return (
    <StyledPagination>
      {pageNumbers.map((page) => (
        <button
          className='pagination-button'
          key={page}
          onClick={() => handlePageClick(page)}
          disabled={page === currentPage}
        >
          {page}
        </button>
      ))}
    </StyledPagination>
  )
}

export default Pagination;
