import Guess from './Guess'

let slate

describe('Guess class works', () => {
  beforeEach(() => {
    slate = new Guess('slate')
  })
  it('can be constructed', () => {
    expect(slate).not.toBeNull()
  })
  it('has the correct word value', () => {
    expect(slate.word).toEqual('slate')
    expect(slate.toString()).toEqual('slate')
  })
  it('has the right letters', () => {
    expect(slate.at(0).toString()).toEqual('s')
    expect(slate.at(1).toString()).toEqual('l')
    expect(slate.at(2).toString()).toEqual('a')
    expect(slate.at(3).toString()).toEqual('t')
    expect(slate.at(4).toString()).toEqual('e')
  })
  it('can set a match position', () => {
    slate.match(2)
    expect(slate.matches()).toContain('a')
  })
  it('can set an exact position', () => {
    slate.exact(2)
    expect(slate.exacts()[2]).toEqual('a')
  })
  it('can set multiple exact positions', () => {
    slate.exact(0)
    slate.exact(2)
    expect(slate.exacts()[0]).toEqual('s')
    expect(slate.exacts()[2]).toEqual('a')
  })
  it('can toggle multiple positions', () => {
    slate.at(0).toggle()
    slate.at(2).toggle()
    slate.at(4).toggle()
    slate.at(4).toggle()

    expect(slate.matches()).toContain('s')
    expect(slate.matches()).toContain('a')
    expect(slate.exacts()[4]).toEqual('e')
  })
})
