import Guess from './Guess'
import Letter from './Letter'

const slate = new Guess('slate')

describe('Guess class works', () => {
  it('can be constructed', () => {
    expect(slate).not.toBeNull()
  })
  it('has the correct word value', () => {
    expect(slate.word).toEqual('slate')
    expect(slate.toString()).toEqual('slate')
  })
  it('has the right letters', () => {
    expect(slate.letters[0]).toEqual(new Letter('s'))
  })
  it('can toggle a match position', () => {
    slate.match(2)
    expect(slate.matches()).toContain(2)
  })
  it('can toggle an exact position', () => {
    slate.exact(2)
    expect(slate.exacts()[2]).toEqual('a')
  })
  it('can toggle multiple exact positions', () => {
    slate.exact(0)
    slate.exact(2)
    expect(slate.exacts()[0]).toEqual('s')
    expect(slate.exacts()[2]).toEqual('a')
  })
})
