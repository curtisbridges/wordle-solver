import Letter from '../model/Letter.js'

const LetterContainer = ({ letter }) => {
  if (!letter) {
    letter = new Letter()
  }
  return (
    <div className="letter">{letter.toString()}</div>
  )
}

export default LetterContainer
