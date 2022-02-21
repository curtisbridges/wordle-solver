import { useEffect, useState } from 'react'
import Word from './Word'

const Answers = ({ input, answers = [] }) => {
  // just the top 20 to start...
  const [numResults, setNumResults] = useState(20)
  const [results, setResults] = useState([])

  useEffect(() => {
    setResults(answers.slice(0, numResults))
  }, [answers, numResults])

  const handleClick = () => {
    setNumResults(numResults + 20)
    console.log(numResults)
  }

  const buttonContainer = () => {
    return (numResults < answers.length ? (<button className="show-more" onClick={handleClick}>Show more</button>) : null)
  }

  return (
    <section className="answer">
      {answers.length > 0 ? (
        <>
          <h2 className="answers-header">{answers.length} possible answers</h2>
          <div className="answers-words">{results.map((answer) => <Word key={answer} letters={answer} />)}</div>
          { buttonContainer() }
        </>
      ) : (
          input.trim().length > 0 ? (
            <>
              <p>There are no possible solutions.</p>
              <p>Verify your letters and coloring</p>
            </>
          ) : (<p>Type some text</p>)
      )}
    </section>
  )
}

export default Answers
