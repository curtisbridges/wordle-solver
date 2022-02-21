import eliminate from './eliminator'
import Guess from './Guess'

import fs from 'fs'
import path from 'path'

// const answers = ['again', 'bench', 'later', 'silly']
let answers, guesses

describe('Eliminator function works', () => {
  beforeAll(() => {
    const text = fs.readFileSync(path.resolve(process.cwd(), 'public', 'wordle-answers-alphabetical.txt'), 'utf8')
    answers = text.split('\n')
  })
  beforeEach(() => {
    guesses = [new Guess('slate'), new Guess('chart')]
  })

  it('Can pass nothing present', () => {
    expect(eliminate([], [])).toEqual([])
  })
  it('Can pass no guesses', () => {
    const results = eliminate(answers, [])
    expect(results.length).toEqual(answers.length)
  })
  it('Can pass no matches', () => {
    const results = eliminate(answers, guesses)
    expect(results.length).toBeLessThan(answers.length)
  })
  it('Can pass matches', () => {
    guesses[0].match(2) // a exists in the answer
    const results = eliminate(answers, guesses)
    expect(results.length).toBeLessThan(answers.length)
    expect(results).toEqual(results.filter((answer) => answer.includes('a')))
  })
  it('Can pass exact', () => {
    guesses[0].exact(2)
    const results = eliminate(answers, guesses)
    expect(results.length).toBeLessThan(answers.length)
    expect(results).toEqual(results.filter((answer) => answer.charAt(2) === 'a'))
  })
})
