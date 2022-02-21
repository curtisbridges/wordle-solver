import React, { useEffect, useRef, useState } from 'react'
import Guess from './model/Guess'
import Answers from './components/Answers'
import Board from './components/Board'

import { useFetch } from './hooks/useFetch'
import { chunkSubstr } from './util/chunkString'
import eliminate from './model/eliminator'

import './App.css'

function App() {
  const { data } = useFetch('wordle-answers-alphabetical.txt')
  const inputRef = useRef()
  const [input, setInput] = useState('')
  const [guesses, setGuesses] = useState([])
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    const parsed = chunkSubstr(String(input), 5)
    setGuesses(parsed.map((str, index) => new Guess(str, index)))
  }, [input])

  useEffect(() => {
    const update = eliminate(data, guesses)
    setAnswers(update)
  }, [data, guesses])

  const handleInput = (e) => {
    setInput(e.target.value.padEnd(30, ' '))
  }

  const handleClick = (letter) => {
    const row = letter.row
    const col = letter.col

    guesses[row].at(col).toggle()
    setGuesses(guesses)
    const update = eliminate(data, guesses)
    setAnswers(update)
  }

  const boardContainer = () => (guesses && guesses.length > 0 && <Board guesses={guesses} handleClick={handleClick} />)
  const answerContainer = () => (input.trim().length > 0 && <Answers input={input} answers={answers} />)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wordle Solver</h1>
      </header>

      <input type="text" ref={inputRef} minLength={30} maxLength={30} onChange={handleInput}
        autoFocus onBlur={({ target }) => target.focus()}></input>

      <main>
        { boardContainer() }
        { answerContainer() }
      </main>

      <footer className="App-footer">
        © Curtis Bridges, 2022
      </footer>
    </div>
  );
}

export default App;
