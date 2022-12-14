/*
 * Test the every function
 * 
 * The function is used to check
 * - the default fields when adding new products using isEmpty function
 * - the order status of products being deleted
 * 
 * The function should
 * - return 'true' if 'array' is empty
 * - return 'true' if 'predicate' returns truthy for all 'array' elements
 * - return 'false' if 'predicate' returns truthy and falsey for some 'array' elements
 * - return 'false' if predicate returns falsey for all 'array' elements
 */

import { expect } from "chai";

import every from "../src/every.js";
import isEmpty from "../src/isEmpty.js";
import { newProducts, necessaryFields, savedProducts, hasOpenOrders } from "./testdata/products.js";

describe("Testing every fuction", function() {
    describe("1. Adding a new product", function() {
        it("1.a Empty array", function(done) {
            expect(every([], isEmpty)).to.be.a('boolean').to.be.true;
            expect(every(null, isEmpty)).to.be.a('boolean').to.be.true;
            done();
        });

        it("1.b Predicate truthy for all array elements", function(done) {
            expect(every(necessaryFields(newProducts[0]), isEmpty)).to.be.a('boolean').to.be.true;
            done();
        });

        it("1.c Predicate falsey for some array elements", function(done) {
            const l = necessaryFields(newProducts[1]).length;
            for (let i = 0; i < l; i++) {
                let fields1 = necessaryFields(newProducts[1]);
                fields1[i] = null;
                expect(every(fields1, isEmpty)).to.be.a('boolean').to.be.false;

                for (let j = i + 1; j < l; j++) {
                    let fields2 = fields1.slice();
                    fields2[j] = null;
                    expect(every(fields2, isEmpty)).to.be.a('boolean').to.be.false;

                    for (let k = j + 1; k < l; k++) {
                        let fields3 = fields2.slice();
                        fields3[k] = null;
                        expect(every(fields3, isEmpty)).to.be.a('boolean').to.be.false;
                    }
                }
            }
            done();
        });

        it("1.d Predicate falsey for all array elements", function(done) {
            expect(every(necessaryFields(newProducts[1]), isEmpty)).to.be.a('boolean').to.be.false;
            done();
        });
    });

    describe("2. Deleting a product", function() {
        it("2.a Empty array", function(done) {
            expect(every([], hasOpenOrders)).to.be.a('boolean').to.be.true;
            expect(every(null, hasOpenOrders)).to.be.a('boolean').to.be.true;
            done();
        });

        it("2.b Predicate truthy for all array elements", function(done) {
            const sizes = [1,2,5];
            for (let i in sizes) {
                let array = [];
                for (let j = 0; j < sizes[i]; j++) {
                    array.push(savedProducts[0]);
                }
                expect(every(array, hasOpenOrders)).to.be.a('boolean').to.be.true;
            }
            done();
        });

        it("2.c Predicate falsey for some array elements", function(done) {
            const allFalse = [savedProducts[1],savedProducts[1],savedProducts[1],savedProducts[1]];
            const l = allFalse.length;
            for (let i = 0; i < l; i++) {
                let products1 = allFalse.slice();
                products1[i] = savedProducts[0];
                expect(every(products1, hasOpenOrders)).to.be.a('boolean').to.be.false;

                for (let j = i + 1; j < l; j++) {
                    let products2 = products1.slice();
                    products2[j] = savedProducts[0];
                    expect(every(products2, hasOpenOrders)).to.be.a('boolean').to.be.false;

                    for (let k = j + 1; k < l; k++) {
                        let products3 = products2.slice();
                        products3[k] = savedProducts[0];
                        expect(every(products3, hasOpenOrders)).to.be.a('boolean').to.be.false;
                    }
                }
            }
            done();
        });

        it("2.d Predicate falsey for all array elements", function(done) {
            const sizes = [1,2,5];
            for (let i in sizes) {
                let array = [];
                for (let j = 0; j < sizes[i]; j++) {
                    array.push(savedProducts[1]);
                }
                expect(every(array, hasOpenOrders)).to.be.a('boolean').to.be.false;
            }
            done();
        });
    });
});