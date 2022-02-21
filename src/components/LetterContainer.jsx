import Letter from '../model/Letter.js'

const LetterContainer = ({ letter }) => {
  if (!letter) {
    letter = new Letter()
  }

  const emptyClass = `${letter.toString() !== ' ' ? 'guess' : ''}`
  const matchClass = `${letter.isMatch ? 'match' : ''}`
  const exactClass = `${letter.isExact ? 'exact' : ''}`
  const colorClassNames = `letter ${emptyClass} ${matchClass} ${exactClass}`.trim()

  return (
    <div className={`${colorClassNames}`}>{letter.toString()}</div>
  )
}

export default LetterContainer
