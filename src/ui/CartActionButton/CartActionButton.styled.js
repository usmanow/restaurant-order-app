import styled from 'styled-components';
import variables from '../../styles/variables';

const { colors, borders, transitions } = variables;

export const StyledCartActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: ${props => (props.$isCart ? borders.default : borders.light)};
  transition: border-color, background-color ${transitions.default};

  &:hover {
    border-color: ${props => (props.$isCart ? colors.lightText : colors.accent)};
    background-color: ${colors.accent};

    .line {
      background-color: ${props => (props.$isCart ? colors.lightText : colors.lightText)};

      &::before {
        background-color: ${props => (props.$isCart ? colors.lightText : colors.lightText)};
      }
    }
  }

  .line {
    position: relative;
    width: 12px;
    height: 2px;
    background-color: ${props => (props.$isCart ? colors.accent : colors.lightText)};
    transform: ${props => (props.$isCart ? 'rotate(45deg)' : 'none')};
    transition: background-color ${transitions.default};

    &::before {
      position: absolute;
      content: '';
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(180deg);
      width: 2px;
      height: 12px;
      background-color: ${props => (props.$isCart ? colors.accent : colors.lightText)};
      transition: background-color ${transitions.default};
    }
  }
`