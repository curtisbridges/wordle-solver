import React, { useEffect, useState } from 'react'
import Guess from './model/Guess'
import Answers from './components/Answers'
import Board from './components/Board'

import { useFetch } from './hooks/useFetch'
import { chunkSubstr } from './util/chunkString'
import eliminate from './model/eliminator'

import './App.css'

function App() {
  const { data } = useFetch('wordle-answers-alphabetical.txt')
  const [input, setInput] = useState('')
  const [guesses, setGuesses] = useState([])
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    const parsed = chunkSubstr(String(input), 5)
    setGuesses(parsed.map((str) => new Guess(str)))
  }, [input])

  useEffect(() => {
    const update = eliminate(data, guesses)
    setAnswers(update)
  }, [data, guesses])

  const handleInput = (e) => {
    setInput(e.target.value.padEnd(30, ' '))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wordle Solver</h1>
      </header>

      <input type="text" value="" maxLength={30} onChange={handleInput}
        autoFocus onBlur={({ target }) => target.focus()}></input>

      <main>
        <Board guesses={guesses} />
        <Answers input={input} answers={answers} />
      </main>

      <footer className="App-footer">
        © Curtis Bridges, 2022
      </footer>
    </div>
  );
}

export default App;
