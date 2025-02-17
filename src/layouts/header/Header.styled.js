import styled from 'styled-components'
import variables from '../../styles/variables'

const { colors, borders, transitions } = variables

export const StyledHeader = styled.header`
  background-color: ${props => (props.$backgroundColor === true ? colors.darkBg : 'unset')};

  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 20px;
    padding-block: 54px;
  }

  .arrow-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: ${borders.default};
    background-color: ${colors.darkBg};
    transition: background-color ${transitions.default};

    svg path {
      transition: fill ${transitions.default};
    }

    &:hover {
      background-color: ${colors.accent};

      svg path {
        fill: ${colors.lightText};
      }
    }
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

  .price {
    display: inline-block;
    width: 100px;
    text-align: end;
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
    background-color: ${colors.accent};
    border-radius: 50%;
    color: ${colors.lightText};
  }
`