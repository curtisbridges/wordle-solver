import Letter from './Letter'

export default class Guess {
  constructor(word, row = 0) {
    this.word = word.padEnd(5, ' ')
    this.row = row
    this.letters = this.word.split('').map((c, index) => new Letter(c, row, index))
  }

  at(position) {
    return this.letters[position]
  }

  match(position) {
    this.letters[position].isMatch = true
  }

  matches() {
    return this.letters
      .filter(letter => letter.isMatch)
      .map(letter => letter.letter)
  }

  exact(position) {
    this.letters[position].isExact = true
  }

  exacts() {
    return this.letters.map(letter => letter.isExact ? letter.toString() : ' ')
  }

  toString() {
    return this.word
  }
}
