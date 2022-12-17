/*
 * Test the isBoolean function.
 * Function should return true if parameter is a boolean or an object. Otherwise false.
 */
import { expect } from 'chai'

import isBoolean from '../src/isBoolean.js'
import { orders } from './testdata/orders.js'

describe('Testing isBoolean function', function () {
  it('1. Boolean (true)', function (done) {
    expect(isBoolean(orders[0].approvedByCustomer)).to.be.true
    expect(isBoolean(orders[1].approvedByCustomer)).to.be.true
    expect(isBoolean(orders[2].approvedByCustomer)).to.be.true
    done()
  })

  it('2. Object', function (done) {
    expect(isBoolean(orders[1])).to.be.true
    expect(isBoolean(orders[2])).to.be.true
    expect(isBoolean(orders[0].items)).to.be.true
    expect(isBoolean(orders[6].items)).to.be.true
    done()
  })

  it('3. Boolean (false)', function (done) {
    expect(isBoolean(orders[6].approvedByCustomer)).to.be.true
    done()
  })

  it('4. Not boolean type', function (done) {
    expect(isBoolean(orders[0].date)).to.be.false
    expect(isBoolean(orders[0].customerLastName)).to.be.false
    expect(isBoolean(orders[0].totalPrice)).to.be.false
    expect(isBoolean(orders[5].customerLastName)).to.be.false
    expect(isBoolean(orders[6].totalPrice)).to.be.false
    expect(isBoolean(null)).to.be.false
    done()
  })
})
