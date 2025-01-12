import './App.css'
import Card from './components/Card/Card'
import Loader from './components/Loader/Loader'

function App() {
  return (
    <div className="App">
      <Loader></Loader>

      {Array.from({ length: 4}, (_, i) => (
        <Card key={i}></Card>
      ))}
    </div>
  )
}

export default App