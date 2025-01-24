import styled from 'styled-components'
import variables from '../../styles/variables'

const { colors, borders, transitions } = variables

export const StyledButton = styled.button`
  width: 200px;
  height: 42px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.21;
  color: ${props => getTextColor(props.$buttonType, colors)};
  border: ${borders.default};
  background-color: ${props => getBackgroundColor(props.$buttonType, colors)};
  transition: border-color, background-color, color, ${transitions.default};

  &:hover {
    background-color: ${props => getHoverBackgroundColor(props.$buttonType, colors)};
    color: ${props => getHoverTextColor(props.$buttonType, colors)};
  }

  &:disabled {
    background-color: ${colors.disabledButton};
    cursor: not-allowed;
    opacity: 0.5;

    &:hover {
      background-color: ${colors.disabledButton};
      color: ${colors.darkText};
    }
  }
`

const getBackgroundColor = ($buttonType, colors) => {
  switch ($buttonType) {
    case 'logOut': return colors.darkBg
    case 'placeOrder': return colors.accent
    case 'form': return colors.accent
    default: return colors.darkBg
  }
}

const getTextColor = ($buttonType, colors) => {
  switch ($buttonType) {
    case 'logOut': return colors.accent
    case 'placeOrder': return colors.darkText
    case 'form': return colors.darkText
    default: return colors.lightText
  }
}

const getHoverBackgroundColor = ($buttonType, colors) => {
  switch ($buttonType) {
    case 'logOut': return colors.accent
    case 'placeOrder': return colors.darkBg
    case 'form': return colors.accent
    default: return colors.accent
  }
}

const getHoverTextColor = ($buttonType, colors) => {
  switch ($buttonType) {
    case 'logOut': return colors.darkText
    case 'placeOrder': return colors.accent
    case 'form': return colors.lightText
    default: return colors.darkText
  }
}