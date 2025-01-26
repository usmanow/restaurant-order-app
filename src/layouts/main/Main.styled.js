import styled from 'styled-components'
import variables from '../../styles/variables'

export const StyledMain = styled.main`
  height: ${(props) => (props.$mainType === 'cart' ? 'calc(100vh - 251px)' : 'calc(100vh - 158px)')};
  background-color: ${variables.colors.darkBg};
  overflow: auto;
  scrollbar-width: none;

  .inner {
    padding-block: 27px;
  }

  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 35px 15px
  }
`