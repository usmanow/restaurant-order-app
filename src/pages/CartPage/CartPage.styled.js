import styled from 'styled-components'
import variables from '../../styles/variables'

export const StyledMain = styled.main`
  height: calc(100vh - 251px);
  background-color: ${variables.colors.darkBg};
  overflow: auto;
  scrollbar-width: none;

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
    padding-block: 27px;
  }

  .no-results {
    font-size: 30px;
    font-weight: 500;
    line-height: 1.23;
  }

  .product-list {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    width: 100%;
  }
`