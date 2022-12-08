import chai from "chai";
import { expect } from "chai";

import isDate from "../src/isDate.js";
import { orders } from "./testdata/orders.js";

describe("Testing isDate function", function () {
  it("1. Is date type", function (done) {
    expect(isDate(new Date(orders[0].date))).to.be.true;
    expect(isDate(new Date(orders[1].date))).to.be.true;
    expect(isDate(new Date(orders[2].date))).to.be.true;
    expect(isDate(new Date(orders[3].date))).to.be.true;
    done();
  });

  it("2. Is not date type", function (done) {
    expect(isDate(orders[0].date)).to.be.false;
    expect(isDate(orders[1].date)).to.be.false;
    expect(isDate(orders[5].date)).to.be.false;
    expect(isDate(orders[6].date)).to.be.false;
    expect(isDate(orders[0].totalPrice)).to.be.false;
    expect(isDate(orders[0].items)).to.be.false;
    expect(isDate(orders[0].customerFirsName)).to.be.false;
    done();
  });
});
