import styled, { keyframes } from 'styled-components'
import variables from '../../styles/variables'

const spinnerAnimation = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`

const LoaderContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  color: ${variables.colors.accent};

  div, div:after {
    box-sizing: border-box;
  }

  div {
    transform-origin: 40px 40px;
    animation: ${spinnerAnimation} 1.2s linear infinite;

    &:after {
      content: " ";
      display: block;
      position: absolute;
      top: 3.2px;
      left: 36.8px;
      width: 6.4px;
      height: 17.6px;
      border-radius: 20%;
      background: currentColor;
    }
  }

  ${Array.from({ length: 12 }, (_, i) => `
    div:nth-child(${i + 1}) {
      transform: rotate(${i * 30}deg);
      animation-delay: -${(11 - i) * 0.1}s;
    }
  `).join('')}
`

export default LoaderContainer