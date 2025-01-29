import LoaderContainer from './Loader.styled'

const Loader = () => {
  return (
    <LoaderContainer>
      {Array.from({ length: 12}, (_, i) => (
        <div key={i}></div>
      ))}
    </LoaderContainer>
  )
}

export default Loader