/*
 * Test the words function
 *
 * The function is used to separate categories from a string to an array when adding new products
 *
 * The function should
 * - return an empty array if 'string' is empty
 * - return only subsequent alphanumerics as words in an array if 'pattern' is not given
 * - return words according to 'pattern' in an array
 */
import { expect } from 'chai'

import words from '../src/words.js'

const oneWord = ['honey', ['honey'], ['honey']]
const simpleWords = [
  'water sugar strawberry raspberry',
  ['water', 'sugar', 'strawberry', 'raspberry'],
  ['water sugar strawberry raspberry']
]
const simpleWordsWithSeparators = [
  'water, sugar ; strawberry& raspberry',
  ['water', 'sugar', 'strawberry', 'raspberry'],
  ['water', 'sugar', 'strawberry', 'raspberry']
]
const multiWordNames = [
  'sunflower seed, sea salt',
  ['sunflower', 'seed', 'sea', 'salt'],
  ['sunflower seed', 'sea salt']
]
const namesWithNumbers = [
  'E406, 455 secret spices, from 33540 area',
  ['E406', '455', 'secret', 'spices', 'from', '33540', 'area'],
  ['E406', '455 secret spices', 'from 33540 area']
]
const justSeparators = [', ; &', [], []]

const pattern = / *[(,|;|&)] */g

describe('Testing words function', function () {
  it('1. Empty string', function (done) {
    expect(words('')).to.be.a('Array').to.be.empty
    expect(words(null)).to.be.a('Array').to.be.empty
    expect(words('', pattern)).to.be.a('Array').to.be.empty
    expect(words(null, pattern)).to.be.a('Array').to.be.empty
    done()
  })

  it('2. Without pattern', function (done) {
    expect(words(oneWord[0])).to.be.a('Array').to.eql(oneWord[1])
    expect(words(simpleWords[0])).to.be.a('Array').to.eql(simpleWords[1])
    expect(words(simpleWordsWithSeparators[0]))
      .to.be.a('Array')
      .to.eql(simpleWordsWithSeparators[1])
    expect(words(multiWordNames[0])).to.be.a('Array').to.eql(multiWordNames[1])
    expect(words(namesWithNumbers[0]))
      .to.be.a('Array')
      .to.eql(namesWithNumbers[1])
    expect(words(justSeparators[0])).to.be.a('Array').to.eql(justSeparators[1])
    done()
  })

  it('3. With pattern', function (done) {
    expect(words(oneWord[0], pattern)).to.be.a('Array').to.eql(oneWord[2])
    expect(words(simpleWords[0], pattern))
      .to.be.a('Array')
      .to.eql(simpleWords[2])
    expect(words(simpleWordsWithSeparators[0], pattern))
      .to.be.a('Array')
      .to.eql(simpleWordsWithSeparators[2])
    expect(words(multiWordNames[0], pattern))
      .to.be.a('Array')
      .to.eql(multiWordNames[2])
    expect(words(namesWithNumbers[0], pattern))
      .to.be.a('Array')
      .to.eql(namesWithNumbers[2])
    expect(words(justSeparators[0], pattern))
      .to.be.a('Array')
      .to.eql(justSeparators[2])
    done()
  })
})
