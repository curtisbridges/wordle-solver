// import Guess from './Guess'
// import Letter from './Letter'

function hasLetters(answer, present) {
  return present.every(function (element) {
    return answer.includes(element)
  })
}

function combine(exacts) {
  let mask = '     '.split('')
  exacts.forEach(exact => {
    for (let i = 0; i < 5; i++) {
      const c = exact.at(i)
      if (c !== ' ') {
        mask[i] = c
      }
    }
  })

  return mask.join('')
}

function hasExact(answer, exact) {
  if (exact.trim().length === 0)
    return true
  else
    console.log(`testing for exact matching`, answer, exact)

  for (let i = 0; i < 5; i++) {
    if (exact.at(i) !== ' ') {
      if (answer.at(i) !== exact.at(i)) {
        return false
      }
    }
  }
console.log(`exact match`, answer)
  return true
}

export default function eliminate(answers, guesses) {
  // create a mask of present letters
  // create a mask of not present letters
  const present = []
  const notPresent = []
  // create a mask of exact location matches
  const exacts = guesses.map((guess) => guess.exacts())
  const exact = combine(exacts)

  const firstPass = answers.filter(answer => hasExact(answer, exact))

  guesses.forEach((guess) => {
    guess.letters.forEach((letter) => {
      const c = letter.toString()
      if (letter.isMatch) {
        present.push(c)
      } else {
        notPresent.push(c)
      }
    })
  })

  return firstPass.filter((answer) => {
    return hasLetters(answer, present) && !hasLetters(answer, notPresent)
  })
}
