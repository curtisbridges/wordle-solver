export default class Letter {
  constructor(letter, row, col) {
    this.letter = letter.toLowerCase()
    this.row = row
    this.col = col
    this.isMatch = false
    this.isExact = false
  }

  toggle() {
    if (this.isExact) {
      this.isExact = false
    } else if (this.isMatch) {
      this.isMatch = false
      this.isExact = true
    } else {
      this.isMatch = true
    }
  }

  toString() {
    return this.letter?.charAt(0) || ' '
  }
}
