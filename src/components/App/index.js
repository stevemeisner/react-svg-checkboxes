import './App.scss'
import Checkbox from '../Checkbox'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SVG Checkboxes ✔</h1>
      </header>

      <main>
        <div className="container">
          <Checkbox label="Checkbox 1" />
          <Checkbox label="Checkbox 2" />
          <Checkbox label="Checkbox 3" />
        </div>
      </main>
    </div>
  )
}

export default App
