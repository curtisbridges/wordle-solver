import Row from './Row'


function chunkSubstr(str, size) {
  const numChunks = Math.ceil(str.length / size)
  const chunks = new Array(numChunks)

  for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size)
  }

  return chunks
}

const Board = ({ guesses = '' }) => {
  const rows = chunkSubstr(String(guesses), 5)
  return (
    <div className="board">
      <Row word={rows[0]}/>
      <Row word={rows[1]}/>
      <Row word={rows[2]}/>
      <Row word={rows[3]}/>
      <Row word={rows[4]}/>
      <Row word={rows[5]}/>
    </div>
  )
}

export default Board
