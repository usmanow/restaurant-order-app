import styled from 'styled-components'
import variables from '../../styles/variables'

const { colors, borders, transitions } = variables

export const StyledCartActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: ${borders.light};
  transition: border-color, background-color ${transitions.default};

  &:hover {
    border-color: ${colors.accent};
    background-color: ${colors.accent};
  }

  .line {
    position: relative;
    width: 12px;
    height: 2px;
    background-color: ${colors.lightText};

    &::before {
      position: absolute;
      content: '';
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(180deg);
      width: 2px;
      height: 12px;
      background-color: ${colors.lightText};
    }
  }
`