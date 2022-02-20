export default class Letter {
  isMatch = false
  isExactLocation = false

  constructor(letter = ' ') {
    this.letter = letter.toLowerCase()
  }

  toString() {
    return this.letter?.charAt(0) || ' '
  }
}
