import styled from 'styled-components'
import variables from '../../styles/variables'

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !['bcgColor', 'textColor', 'hoverBсgColor', 'hoverColor'].includes(prop),
})`
  width: 200px;
  height: 42px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.21;
  color: ${props => props.textColor};
  border: ${variables.borders.default};
  background-color: ${props => props.bcgColor};
  transition: border-color, background-color, color, ${variables.transitions.default};

  &:hover {
    background-color: ${props => props.hoverBсgColor};
    color: ${props => props.hoverColor};
  }
`