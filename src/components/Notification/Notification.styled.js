import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'
import variables from '../../styles/variables'

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    &--success {
      .Toastify__toast-icon svg {
        fill: ${variables.colors.accentAlt};
      }

      .Toastify__progress-bar {
        background-color: ${variables.colors.accentAlt};
      }

      .Toastify__progress-bar-background {
        background-color: ${variables.colors.accentAlt};
        opacity: 1;
      }

      .Toastify__progress-bar--bg {
        background-color: ${variables.colors.accentAlt};
        opacity: 0.2;
      }
    }

    &--error {
      .Toastify__toast-icon svg {
        fill: ${variables.colors.error};
      }

      .Toastify__progress-bar {
        background-color: ${variables.colors.error};
      }

      .Toastify__progress-bar-background {
        background-color: ${variables.colors.error};
        opacity: 1;
      }

      .Toastify__progress-bar--bg {
        background-color: ${variables.colors.error};
        opacity: 0.2;
      }
    }
  }
`