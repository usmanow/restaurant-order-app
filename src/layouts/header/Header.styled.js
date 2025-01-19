import styled from 'styled-components'
import variables from '../../styles/variables'

export const StyledHeader = styled.header`
  background-color: ${variables.colors.darkBg};

  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 54px;
  }

  .title {
    font-size: 31px;
    font-weight: 700;
    line-height: 1.23;
    text-transform: uppercase;
  }

  .controls {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }

  .order-info {
    display: flex;
    flex-direction: column;
    font-size: 17px;
    font-weight: 500;
    line-height: 1.23;
  }

  .product-quantity {
    margin-left: auto;
  }

  .cart-count {
    position: absolute;
    right: -7px;
    top: -7px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    max-height: 22px;
    max-width: 22px;
    font-size: 15px;
    background-color: ${variables.colors.accent};
    border-radius: 50%;
  }
`