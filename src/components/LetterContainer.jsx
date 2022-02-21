import { useState } from 'react'

const LetterContainer = ({ letter, handleClick }) => {
  // const [value, setValue] = useState(letter.toString())
  const [isMatch, setIsMatch] = useState(letter.isMatch)
  const [isExact, setIsExact] = useState(letter.isExact)

  const hasValue = () => letter.toString() !== ' '

  const emptyClass = `${hasValue() !== ' ' ? 'guess' : ''}`
  const matchClass = `${isMatch && hasValue() ? 'match' : ''}`
  const exactClass = `${isExact && hasValue() ? 'exact' : ''}`
  const colorClassNames = `letter ${emptyClass} ${matchClass} ${exactClass}`.trim()

  const letterClick = () => {
    handleClick(letter)

    setIsMatch(letter.isMatch)
    setIsExact(letter.isExact)
  }

  return (
    <div className={`${colorClassNames}`} onClick={letterClick}>{letter.toString()}</div>
  )
}

export default LetterContainer
