import styled from 'styled-components'
import variables from '../../styles/variables'

export const StyledMain = styled.main`
  height: ${props => (props.$mainType === 'cart' ? 'calc(100vh - 251px)' : 'calc(100vh - 158px)')};
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

  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 35px 15px;
    min-height: 552px;
  }

  .no-results {
    font-size: 30px;
    font-weight: 500;
    line-height: 1.23;
  }
`