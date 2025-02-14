import { StyledCounter } from './Counter.styled'

const Counter = () => {
  return (
    <StyledCounter>
      <button className="counter-button">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2"/>
      </svg>
      </button>
      <span className="value">1</span>
      <button className="counter-button">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </button>
    </StyledCounter>
  )
}

export default Counter