import { createGlobalStyle } from 'styled-components'
import variables from './variables'
import Fonts from './Fonts.styled'
import Reset from './Reset.styled'

const GlobalStyles = createGlobalStyle`
  ${Fonts}
  ${Reset}

  body {
    font-family: ${variables.fonts.base};
    color: ${variables.colors.lightText};
  }

  .container {
    max-width: 1330px;
    margin-inline: auto;
    padding-inline: 15px;
  }
`

export default GlobalStyles