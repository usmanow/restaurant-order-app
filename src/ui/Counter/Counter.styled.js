import styled from 'styled-components'
import variables from '../../styles/variables'

const { borders, colors, transitions } = variables

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
    border: ${borders.default};
    border-color: ${props => props.$isCart ? colors.accent : colors.lightText};
    color: ${props => props.$isCart ? colors.accent : colors.lightText};
    transition: color, border-color, background-color, ${transitions.default};

    &:hover {
      color: ${colors.lightText};
      border-color: ${props => (props.$isCart ? colors.lightText : colors.accent)};
      background-color: ${colors.accent};
    }
  }

  .value {
    width: 25px;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.23;
    text-align: center;
    color: ${colors.lightText};
  }
`