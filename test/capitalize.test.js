/*
 * Test the capitalize function.
 * Function should return a string with the first letter in uppercase
 * and the rest in lowercase.
 * Shouls throw an error if the parameter is not a string.
 */
import { expect } from 'chai'

import capitalize from '../src/capitalize.js'
import { orders } from './testdata/orders.js'

describe('Testing capitalize function', function () {
  it('1. Text written in small letters', function (done) {
    expect(capitalize(orders[0].customerFirsName)).to.equal('Maija').to.be.a('string');
    expect(capitalize(orders[1].customerLastName)).to.equal('Pekkanen')
    expect(capitalize(orders[3].shippingAddress)).to.equal('A')
    done()
  })

  it('2. Text written in capital letters', function (done) {
    expect(capitalize(orders[3].customerFirsName)).to.equal('Tarja')
    expect(capitalize(orders[4].customerFirsName)).to.equal('K')
    done()
  })

  it('3. Text that have both, small and capital letter', function (done) {
    expect(capitalize(orders[2].customerFirsName)).to.equal('Sami')
    expect(capitalize(orders[2].customerLastName)).to.equal('Saukkonen')
    done()
  })

  it('4. Text is empty or wrong type', function (done) {
    expect(capitalize('')).to.equal('').to.be.a('string')
    expect(capitalize(orders[0].totalPrice)).to.equal(`${orders[0].totalPrice}`).to.be.a('string');
    expect(function () { capitalize(orders[2].items) }).to.throw(TypeError)
    expect(function () { capitalize(orders) }).to.throw(TypeError)
    done()
  })
})
