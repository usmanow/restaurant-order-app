import MontserratLight from '../assets/fonts/Montserrat-Light.woff2'
import MontserratRegular from '../assets/fonts/Montserrat-Regular.woff2'
import MontserratMedium from '../assets/fonts/Montserrat-Medium.woff2'
import MontserratBold from '../assets/fonts/Montserrat-Bold.woff2'

const Fonts = `
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratLight}) format('woff2');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratRegular}) format('woff2');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratMedium}) format('woff2');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratBold}) format('woff2');
    font-weight: 700;
  }
`

export default Fonts