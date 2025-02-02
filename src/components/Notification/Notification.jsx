import 'react-toastify/dist/ReactToastify.css'
import { StyledToastContainer } from './Notification.styled'

const Notification = () => (
  <StyledToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    closeOnClick={false}
    rtl={false}
    pauseOnHover
    theme="light"
  />
)

export default Notification