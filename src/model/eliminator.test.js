import eliminate from './eliminator'
import Guess from './Guess'

const answers = ['again', 'bench', 'later', 'silly']

let guesses

describe('Eliminator function works', () => {
  beforeEach(() => {
    guesses = [new Guess('slate'), new Guess('chart')]
  })

  it('Can pass nothing present', () => {
    expect(eliminate([], [])).toEqual([])
  })
  it('Can pass no matches, one guess', () => {
    expect(eliminate(answers, guesses)).toEqual(answers)
  })
  it('Can pass matches, one guess', () => {
    guesses[0].match(2)
    expect(eliminate(answers, guesses)).toEqual(answers.filter((answer) => answer.includes('a')))
  })
  it('Can pass exact, one guess', () => {
    guesses[0].exact(2)
    expect(eliminate(answers, guesses)).toEqual(answers.filter((answer) => answer.charAt(2) === 'a'))
  })
})
