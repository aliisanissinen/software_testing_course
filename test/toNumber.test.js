/*
 * Test the toNumber function
 *
 * The function is used to convert some field contents into numbers when adding new products
 *
 * The function should
 * - return 'value' if 'value' is a number
 * - return 'value' as a number if conversion is possible
 * - return 'NaN' if conversion is not possible
 */
import { expect } from 'chai'

import toNumber from '../src/toNumber.js'

describe('Testing toNumber function', function () {
  describe('1. Value is number', function () {
    it('1.a zero', function (done) {
      expect(toNumber(0)).to.be.a('number').to.eql(0)
      done()
    })

    it('1.b integers', function (done) {
      expect(toNumber(12)).to.be.a('number').to.eql(12)
      expect(toNumber(-12)).to.be.a('number').to.eql(-12)
      done()
    })

    it('1.c floats', function (done) {
      expect(toNumber(2.5)).to.be.a('number').to.eql(2.5)
      expect(toNumber(-2.5)).to.be.a('number').to.eql(-2.5)
      done()
    })
  })

  describe('2. Value can be converted to number', function () {
    it('2.a string containing number', function (done) {
      expect(toNumber('0')).to.be.a('number').to.eql(0)
      expect(toNumber('21')).to.be.a('number').to.eql(21)
      expect(toNumber('-21')).to.be.a('number').to.eql(-21)
      expect(toNumber('+21')).to.be.a('number').to.eql(21)
      expect(toNumber('3.75')).to.be.a('number').to.eql(3.75)
      expect(toNumber('-3.75')).to.be.a('number').to.eql(-3.75)
      expect(toNumber('+3.75')).to.be.a('number').to.eql(3.75)
      done()
    })

    it('2.b whitespace', function (done) {
      expect(toNumber('  0')).to.be.a('number').to.eql(0)
      expect(toNumber('21   ')).to.be.a('number').to.eql(21)
      expect(toNumber(' 3.75 ')).to.be.a('number').to.eql(3.75)
      expect(toNumber('   ')).to.be.a('number').to.eql(0)
      done()
    })

    it('2.c leading zero', function (done) {
      expect(toNumber('07')).to.be.a('number').to.eql(7)
      done()
    })

    it('2.d null', function (done) {
      expect(toNumber(null)).to.be.a('number').to.eql(0)
      done()
    })

    it('2.e boolean', function (done) {
      expect(toNumber(true)).to.be.a('number').to.eql(1)
      expect(toNumber(false)).to.be.a('number').to.eql(0)
      done()
    })

    it('2.f object with convertable value', function (done) {
      const field = {
        id: 'price',
        value: 100,
        valueOf: function () {
          return this.value
        },
      }
      expect(toNumber(field)).to.be.a('number').to.eql(100)
      done()
    })

    it('2.g binary', function (done) {
      const originalnumber = 404
      expect(toNumber(originalnumber.toString(2)))
        .to.be.a('number')
        .to.eql(originalnumber)
      done()
    })

    it('2.h octal', function (done) {
      const originalnumber = 505
      expect(toNumber(originalnumber.toString(8)))
        .to.be.a('number')
        .to.eql(originalnumber)
      done()
    })

    it('2.i hex', function (done) {
      const originalnumber = 606
      expect(toNumber(originalnumber.toString(16)))
        .to.be.a('number')
        .to.eql(originalnumber)
      done()
    })
  })

  describe('3. Value cannot be converted to number', function () {
    it('3.a string', function (done) {
      expect(toNumber('number 15')).to.be.NaN
      done()
    })

    it('3.b NaN', function (done) {
      expect(toNumber(NaN)).to.be.NaN
      done()
    })

    it('3.c undefined', function (done) {
      expect(toNumber(undefined)).to.be.NaN
      done()
    })

    it('3.d symbol', function (done) {
      expect(toNumber(Symbol('id'))).to.be.NaN
      done()
    })

    it('3.e object with unconvertable value', function (done) {
      const field = {
        id: 'stock',
        value: 10,
      }
      expect(toNumber(field)).to.be.NaN
      done()
    })
  })
})
