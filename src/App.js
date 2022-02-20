import { useState } from 'react'
import Answers from './components/Answers'
import Board from './components/Board'

import { useFetch } from './hooks/useFetch'

import './App.css'


function App() {
  const [guesses, setGuesses] = useState('')
  const { data } = useFetch('wordle-answers-alphabetical.txt')

  const handleInput = (e) => {
    setGuesses(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wordle Solver</h1>
      </header>

      <input type="text" maxLength={30} onChange={handleInput}
        autoFocus onBlur={({ target }) => target.focus()}></input>

      <Board guesses={guesses.padEnd(30, ' ')} />
      <Answers answers={data}/>

      <footer className="App-footer">
        Copyright Curtis Bridges, 2022
      </footer>
    </div>
  );
}

export default App;
