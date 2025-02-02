import styled from 'styled-components'
import variables from '../../styles/variables'

const { colors, transitions, hovers } = variables

export const StyledCartButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${colors.accent};
  transition: opacity ${transitions.default};

  &:hover {
    opacity: ${hovers.default};
  }
`