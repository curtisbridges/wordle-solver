import { chunkSubstr } from './chunkString'

describe('chunkString function works', () => {
  it('Can handle empty strings', () => {
    expect(chunkSubstr('', 5)).toEqual([])
  })
  it('Can handle a string of 5', () => {
    expect(chunkSubstr('slate', 5)).toEqual(['slate'])
  })
  it('Can handle a multiples of 5', () => {
    expect(chunkSubstr('slatecares', 5)).toEqual(['slate', 'cares'])
  })
  it('Can handle partials of input length', () => {
    expect(chunkSubstr('slatecar', 5)).toEqual(['slate', 'car'])
  })
})
