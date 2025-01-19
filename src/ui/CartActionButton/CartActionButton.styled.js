import styled from 'styled-components'
import variables from '../../styles/variables'

export const StyledCartActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: ${variables.borders.light};
  transition: border-color, background-color ${variables.transitions.default};

  &:hover {
    border-color: ${variables.colors.accent};
    background-color: ${variables.colors.accent};
  }

  .line {
    position: relative;
    width: 12px;
    height: 2px;
    background-color: ${variables.colors.lightText};

    &::before {
      position: absolute;
      content: '';
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(180deg);
      width: 2px;
      height: 12px;
      background-color: ${variables.colors.lightText};
    }
  }
`