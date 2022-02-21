import LetterContainer from './LetterContainer'

const Row = ({ guess, handleClick }) => {
  return (
    <div className="row">
      <LetterContainer letter={guess.at(0)} handleClick={handleClick} />
      <LetterContainer letter={guess.at(1)} handleClick={handleClick} />
      <LetterContainer letter={guess.at(2)} handleClick={handleClick} />
      <LetterContainer letter={guess.at(3)} handleClick={handleClick} />
      <LetterContainer letter={guess.at(4)} handleClick={handleClick} />
    </div>
  )
}

export default Row
