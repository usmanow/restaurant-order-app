import styled from 'styled-components'
import variables from '../../styles/variables'

export const StyledCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  width: 150px;

  .counter-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: ${variables.borders.default};
    color: ${variables.colors.accent};
    transition: color, border-color, background-color, ${variables.transitions.default};

    &:hover {
      color: ${variables.colors.lightText};
      border-color: ${variables.colors.lightText};
      background-color: ${variables.colors.accent};
    }
  }

  .value {
    width: 30px;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.23;
    text-align: center;
    color: ${variables.colors.lightText};
  }
`