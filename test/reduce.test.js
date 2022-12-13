/*
 * Test the reduce function.
 * Function should run collection thru function that is given as a parameter. Returns
 * accumulated value or throws an error.
 */
import { expect, assert } from "chai";

import reduce from "../src/reduce.js";
import { orders } from "./testdata/orders.js";

describe("Testing reduce function", function () {
  let productQuantityPrice = [];

  it("1. Multiplies the value by an integer", function (done) {
    expect(
      reduce(
        [orders[0].items[0].price, orders[0].items[0].pcs],
        (n, multiplier) => n * multiplier,
        1
      )
    ).to.equal(12.95);
    assert.isNumber(
      reduce(
        [orders[0].items[0].price, orders[0].items[0].pcs],
        (n, multiplier) => n * multiplier,
        1
      )
    );

    expect(
      reduce(
        [orders[4].items[0].price, orders[4].items[0].pcs],
        (n, multiplier) => n * multiplier,
        1
      )
    ).to.equal(91.8);

    // Calculate price * pcs of all products in the order and save results to array
    for (let i = 0; i < orders[2].items.length; i++) {
      productQuantityPrice.unshift(
        reduce(
          [orders[2].items[i].price, orders[2].items[i].pcs],
          (n, multiplier) => n * multiplier,
          1
        )
      );
      expect(productQuantityPrice[0]).to.equal(
        orders[2].items[i].price * orders[2].items[i].pcs
      );
    }
    done();
  });

  it("2. Adds the values in the list together", function (done) {
    // Use the list completed in the previous section
    expect(reduce(productQuantityPrice, (sum, n) => sum + n, 0)).to.equal(
      orders[2].totalPrice
    );
    assert.isNumber(reduce(productQuantityPrice, (sum, n) => sum + n, 0));
    done();
  });

  it("3. Really small numbers", function (done) {
    expect(
      reduce([0.00000003, 0.00000000012], (sum, n) => sum + n, 0)
    ).to.equal(0.00000003 + 0.00000000012);
    expect(
      reduce([0.00000003, 0.00000000012], (n, multiplier) => n * multiplier, 1)
    ).to.equal(0.00000003 * 0.00000000012);
    done();
  });

  it("4. Really large numbers", function (done) {
    expect(
      reduce([3294832948329, 234932849823], (sum, n) => sum + n, 0)
    ).to.equal(3529765798152);
    expect(
      reduce(
        [3294832948329, 234932849823],
        (n, multiplier) => n * multiplier,
        1
      )
    ).to.equal(3294832948329 * 234932849823);
    done();
  });

  it("5. Error situation, list of strings", function (done) {
    expect(
      reduce(["aaa", "bbb", "ccc"], (n, multiplier) => n * multiplier, 1)
    ).to.throw(TypeError);
    done();
  });

  it("6. Error situation, map with string value", function (done) {
    expect(
      reduce([{ name: "anna" }], (n, multiplier) => n * multiplier, 1)
    ).to.throw(TypeError);
    done();
  });

  it("7. Error situation, divider is a zero", function (done) {
    expect(reduce([234, 0], (n, divider) => n / divider, 45)).to.throw(
      TypeError
    );
    done();
  });
});
