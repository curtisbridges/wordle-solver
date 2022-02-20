import { useEffect, useState } from 'react'
import Guess from './model/Guess'
import Answers from './components/Answers'
import Board from './components/Board'

import { useFetch } from './hooks/useFetch'
import { chunkSubstr } from './util/chunkString'

import './App.css'

const updateAnswers = (guesses, answers) => {

}


function App() {
  const { data } = useFetch('wordle-answers-alphabetical.txt')
  const [input, setInput] = useState('')
  const [guesses, setGuesses] = useState([])
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    const parsed = chunkSubstr(String(guesses), 5)
    setGuesses(parsed.forEach( (str) => Guess(str)))
  }, [input])

  useEffect(() => {
    setAnswers(data)
  }, [data])

  const handleInput = (e) => {
    setInput(e.target.value.padEnd(30, ' '))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wordle Solver</h1>
      </header>

      <input type="text" maxLength={30} onChange={handleInput}
        autoFocus onBlur={({ target }) => target.focus()}></input>

      <Board guesses={guesses} />
      <Answers answers={answers}/>

      <footer className="App-footer">
        Copyright Curtis Bridges, 2022
      </footer>
    </div>
  );
}

export default App;
