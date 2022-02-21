import Word from './Word'

const Answers = ({ input, answers = [] }) => {
  // just the top 20 to start...
  const results = answers.slice(0, 100).map((answer) => <Word key={answer} letters={answer} />)

  return (
    <section className="answer">
      {answers.length > 0 ? (
        <>
          <h2 className="answers-header">{answers.length} possible answers</h2>
          <div className="answers-words">{results}</div>
        </>
      ) : (
          input.length > 0 ? (
            <>
              <p>There are no possible solutions.</p>
              <p>Verify your letters and coloring</p>
            </>
          ) : null
      )}
    </section>
  )
}

export default Answers
