import Guess from '../model/Guess'
import Row from './Row'

const Board = ({ guesses = [] }) => {
  if (guesses.length === 0) {
    guesses = Array.from(Array(5), () => new Guess())
  }
  return (
    <div className="board">
        <Row guess={guesses[0]}/>
        <Row guess={guesses[1]}/>
        <Row guess={guesses[2]}/>
        <Row guess={guesses[3]}/>
        <Row guess={guesses[4]}/>
        <Row guess={guesses[5]}/>
      </div >
  )
}

export default Board
