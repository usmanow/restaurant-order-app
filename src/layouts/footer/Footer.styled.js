import styled from 'styled-components'
import variables from '../../styles/variables'

const { colors, borders } = variables

export const StyledFooter = styled.footer`
  border-top: ${borders.default};
  background-color: ${colors.darkBg};

  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 25px;
  }

  .order-info {
    display: flex;
    align-items: center;
    column-gap: 16px;
    font-weight: 400;
    line-height: 1.23;
  }

  .order-title {
    font-size: 21px;
    text-transform: uppercase;
  }

  .order-price {
    font-size: 18px;
    color: ${colors.accent};
  }
`