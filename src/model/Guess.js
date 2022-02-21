import Letter from './Letter'

export default class Guess {
  constructor(word = '', id = 0) {
    this.word = word.padEnd(5, ' ')
    this.id = id
    this.letters = this.word.split('').map((c) => new Letter(c))
  }

  at(position) {
    return this.letters[position]
  }

  match(position) {
    this.letters[position].isMatch = true
  }

  matches() {
    return this.letters
      .map((letter, index) => {
        return { index, isMatch: letter.isMatch }
      })
      .filter( letter => letter.isMatch)
      .map(result => result.index)
  }

  exact(position) {
    this.letters[position].isExactLocation = true
  }

  exacts() {
    return this.letters.map(letter => letter.isExactLocation ? letter.toString() : ' ')
  }

  toString() {
    return this.word
  }
}
