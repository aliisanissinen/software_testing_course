/*
 * Test the isEmpty function.
 * Function should return true if parameter is an empty string, array or map. Otherwise false.
 * If parameter have no own enumerable string keyed properties, return true.
 */
import { expect } from "chai";

import isEmpty from "../src/isEmpty.js";
import { orders } from "./testdata/orders.js";

describe("Testing isEmpty function", function () {
  it("1. Array, empty and not empty", function (done) {
    expect(isEmpty(orders[6].items)).to.be.true;
    expect(isEmpty(orders[5].items)).to.be.false;
    done();
  });

  it("2. Map, empty and not empty", function (done) {
    const orderMap = new Map(Object.entries(orders[0]));
    const orderMapEmpty = new Map();
    expect(isEmpty(orderMapEmpty)).to.be.true;
    expect(isEmpty(orderMap)).to.be.false;
    done();
  });

  it("3. String, empty and not empty", function (done) {
    expect(isEmpty(orders[5].customerLastName)).to.be.true;
    expect(isEmpty(orders[6].customerLastName)).to.be.false;
    done();
  });

  it("4. Objects that have no own enumerable string keyed properties", function (done) {
    expect(isEmpty(orders[5].totalPrice)).to.be.true;
    expect(isEmpty(orders[6].totalPrice)).to.be.true;
    expect(isEmpty(null)).to.be.true;
    expect(isEmpty(true)).to.be.true;
    expect(isEmpty(false)).to.be.true;
    done();
  });
});
