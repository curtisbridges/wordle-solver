import LetterContainer from './LetterContainer'
import Guess from '../model/Guess'

const Row = ({ guess }) => {
  if (!guess) {
    guess = new Guess()
  }
  return (
    <div className="row">
      <LetterContainer letter={guess.at(0)} />
      <LetterContainer letter={guess.at(1)} />
      <LetterContainer letter={guess.at(2)} />
      <LetterContainer letter={guess.at(3)} />
      <LetterContainer letter={guess.at(4)} />
    </div>
  )
}

export default Row
