import Answers from './components/Answers'
import Board from './components/Board'
import { useFetch } from './hooks/useFetch'

import './App.css'


function App() {
  const { data } = useFetch('wordle-answers-alphabetical.txt')

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wordle Solver</h1>
      </header>

      <Board />
      <Answers />

      <div>
        {data && data.length} possible solutions
      </div>

      <footer className="App-footer">
        Copyright Curtis Bridges, 2022
      </footer>
    </div>
  );
}

export default App;
