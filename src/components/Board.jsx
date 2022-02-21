import Row from './Row'

const Board = ({ guesses, handleClick }) => {
  return (
    <section className="center">
      <h2>Guesses</h2>
      <div className="board">
        <Row guess={guesses[0]} handleClick={handleClick} />
        <Row guess={guesses[1]} handleClick={handleClick} />
        <Row guess={guesses[2]} handleClick={handleClick} />
        <Row guess={guesses[3]} handleClick={handleClick} />
        <Row guess={guesses[4]} handleClick={handleClick} />
        <Row guess={guesses[5]} handleClick={handleClick} />
      </div>
    </section >
  )
}

export default Board
