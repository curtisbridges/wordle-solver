import Letter from './Letter'

const Row = ({ letters }) => {
  return (
    <div className="row">
      <Letter letter={letters[0]} />
      <Letter letter={letters[1]} />
      <Letter letter={letters[2]} />
      <Letter letter={letters[3]} />
      <Letter letter={letters[4]} />
    </div>
  )
}

export default Row
