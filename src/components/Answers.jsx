import Word from './Word'

const Answers = ({answers = []}) => {
  // just the top 20 to start...
  const results = answers.slice(20).map(answer => <Word key={answer} letters={answer} />)

  return (
    <>
      <h2 className="answers-header">Answers</h2>
      <div className="answers-words">
        {results}
      </div>
    </>
  )
}

export default Answers
