import Letter from '../model/Letter.js'

const LetterContainer = ({ letter }) => {
  if (!letter) {
    letter = new Letter()
  }

  const emptyClass = `${letter.toString() !== ' ' ? 'guess' : ''}`
  const matchClass = `${letter.isMatch ? 'match' : ''}`
  const exactClass = `${letter.isExact ? 'exact' : ''}`
  const colorClassNames = `letter ${emptyClass} ${matchClass} ${exactClass}`.trim()

  const handleClick = (letter) => {
    console.log(letter)
  }

  return (
    <div className={`${colorClassNames}`} onClick={() => handleClick(letter)}>{letter.toString()}</div>
  )
}

export default LetterContainer
