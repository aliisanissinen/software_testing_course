/*
 * Test the every function
 * TODO: documentation
 */
import { expect } from "chai";

import every from "../src/every.js";
import isEmpty from "../src/isEmpty.js";
import { products, hasOpenOrders, returnNecessaryFields } from "../testdata/products.js";

// Tests
describe("Testing every fuction", function() {
    it("1. Empty array", function(done) {
        // adding a product
        expect(every([], isEmpty)).to.be.a('boolean').to.be.true;
        expect(every(null, isEmpty)).to.be.a('boolean').to.be.true;
        // removing a product
        expect(every([], hasOpenOrders)).to.be.a('boolean').to.be.true;
        expect(every(null, hasOpenOrders)).to.be.a('boolean').to.be.true;

        done();
    });

    it("2. Predicate truthy for all array elements", function(done) {
        // adding a product
        expect(every([products[2].name], isEmpty)).to.be.a('boolean').to.be.true;
        expect(every(returnNecessaryFields(products[2]), isEmpty)).to.be.a('boolean').to.be.true;
        // removing a product
        expect(every([products[0]], hasOpenOrders)).to.be.a('boolean').to.be.true;
        expect(every([products[0], products[1]], hasOpenOrders)).to.be.a('boolean').to.be.true;

        done();
    });

    it("3. Predicate falsey for some array elements", function(done) {
        // adding a product
        expect(every(returnNecessaryFields(products[3]), isEmpty)).to.be.a('boolean').to.be.false;
        // removing a product
        expect(every([products[3], products[0]], hasOpenOrders)).to.be.a('boolean').to.be.false;
        expect(every([products[0], products[3]], hasOpenOrders)).to.be.a('boolean').to.be.false;
        expect(every([products[3], products[0], products[4]], hasOpenOrders)).to.be.a('boolean').to.be.false;
        expect(every([products[0], products[3], products[1]], hasOpenOrders)).to.be.a('boolean').to.be.false;

        done();
    });

    it("4. Predicate falsey for all array elements", function(done) {
        // adding a product
        expect(every([products[0].name], isEmpty)).to.be.a('boolean').to.be.false;
        expect(every(returnNecessaryFields(products[0]), isEmpty)).to.be.a('boolean').to.be.false;
        // removing a product
        expect(every([products[3]], hasOpenOrders)).to.be.a('boolean').to.be.false;
        expect(every([products[3], products[4]], hasOpenOrders)).to.be.a('boolean').to.be.false;

        done();
    });
});