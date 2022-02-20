import PropTypes from 'prop-types'
import Letter from './Letter'

const Row = ({ word = '' }) => {
  const guess = String(word).padEnd(5, ' ')

  return (
    <div className="row">
      <Letter letter={guess[0]} />
      <Letter letter={guess[1]} />
      <Letter letter={guess[2]} />
      <Letter letter={guess[3]} />
      <Letter letter={guess[4]} />
    </div>
  )
}

Row.propTypes = {
  WaveShaperNode: PropTypes.string
}

export default Row
