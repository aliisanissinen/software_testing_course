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
    describe("1. Empty array", function() {
        it("a. when adding a product", function(done) {
            expect(every([], isEmpty)).to.be.a('boolean').to.be.true;
            expect(every(null, isEmpty)).to.be.a('boolean').to.be.true;
            done();
        });

        it("b. when removing a product", function(done) {
            expect(every([], hasOpenOrders)).to.be.a('boolean').to.be.true;
            expect(every(null, hasOpenOrders)).to.be.a('boolean').to.be.true;
            done();
        });
    });

    describe ("2. Predicate truthy for all array elements", function() {
        it("a. when adding a product", function(done) {
            // 1 field
            expect(every([products[2].name], isEmpty)).to.be.a('boolean').to.be.true;
            // several fields
            expect(every(returnNecessaryFields(products[2]), isEmpty)).to.be.a('boolean').to.be.true;
            done();
        });

        it("b. when removing a product", function(done) {
            // 1 product
            expect(every([products[0]], hasOpenOrders)).to.be.a('boolean').to.be.true;
            // 2 products
            expect(every([products[0], products[1]], hasOpenOrders)).to.be.a('boolean').to.be.true;
            done();
        });
    });

    describe("3. Predicate falsey for some array elements", function() {
        it("a. when adding a product", function(done) {
            // multiple truthy and falsey fields
            expect(every(returnNecessaryFields(products[3]), isEmpty)).to.be.a('boolean').to.be.false;
            done();
        });

        it("b. when removing a product", function(done) {
            // 1 falsey and 1 truthy product
            expect(every([products[3], products[0]], hasOpenOrders)).to.be.a('boolean').to.be.false;
            // 1 truthy and 1 falsey product
            expect(every([products[0], products[3]], hasOpenOrders)).to.be.a('boolean').to.be.false;
            // products [falsey, truthy, falsey]
            expect(every([products[3], products[0], products[4]], hasOpenOrders)).to.be.a('boolean').to.be.false;
            // products [truthy, falsey, truthy]
            expect(every([products[0], products[3], products[1]], hasOpenOrders)).to.be.a('boolean').to.be.false;
            done();
        });
    });

    describe("4. Predicate falsey for all array elements", function() {
        it("a. when adding a product", function(done) {
            // 1 field
            expect(every([products[0].name], isEmpty)).to.be.a('boolean').to.be.false;
            // several fields
            expect(every(returnNecessaryFields(products[0]), isEmpty)).to.be.a('boolean').to.be.false;
            done();
        });

        it("b. when removing a product", function(done) {
            // 1 product
            expect(every([products[3]], hasOpenOrders)).to.be.a('boolean').to.be.false;
            // 2 products
            expect(every([products[3], products[4]], hasOpenOrders)).to.be.a('boolean').to.be.false;
            done();
        });
    });
});