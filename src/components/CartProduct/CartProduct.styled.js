import styled from 'styled-components'
import variables from '../../styles/variables'

export const StyledCartProduct = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  column-gap: 20px;

  .title {
    margin-left: 30px;
    flex: 1;
    min-width: 150px;
    max-width: 350px;
    font-size: 17px;
    font-weight: 500;
    line-height: 1.23;

    a {
      padding: 10px;
      color: inherit;
      transition: ${variables.transitions.default};

      &:hover {
        color: ${variables.colors.accent};
      }
    }
  }

  .purchase {
    display: flex;
    align-items: center;
    column-gap: 15px;
    color: ${variables.colors.accent};
  }

  .price {
    width: 100px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.22;
    text-align: center;
  }
`