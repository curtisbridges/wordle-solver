import Letter from '../model/Letter'
import Row from './Row'

const Board = ({ guesses = [] }) => {
  if (guesses.length === 0) {
    guesses = Array.from(Array(5), () => new Letter())
  }
  return (
    <div className="board">
      <Row letters={guesses[0]}/>
      <Row letters={guesses[1]}/>
      <Row letters={guesses[2]}/>
      <Row letters={guesses[3]}/>
      <Row letters={guesses[4]}/>
      <Row letters={guesses[5]}/>
    </div>
  )
}

export default Board
