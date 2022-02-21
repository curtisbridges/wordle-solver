import Letter from './Letter'

let a = new Letter('a')

describe('Letters class works', () => {
  beforeAll(() => {
    a = new Letter('a')
  })
  it('can be constructed', () => {
    expect(a).not.toBeNull()
    expect(a.isMatch).toBe(false)
    expect(a.isExact).toBe(false)
  })
  it('has the correct letter value', () => {
    expect(a.letter).toEqual('a')
  })
  it('can handle capital letters', () => {
    expect(new Letter('A').letter).toEqual('a')
  })
  it('can have match toggled', () => {
    a.isMatch = true
    expect(a.isMatch).toEqual(true)
  })
  it('can have exact location toggled', () => {
    a.isExact = true
    expect(a.isExact).toEqual(true)
  })
})
