/*
 * Test the filter function
 * 
 * The function is used to pick out products having active orders while trying to delete
 * 
 * The function should
 * - return a new array
 * - return an empty array if 'array' is empty
 * - return all elements of 'array' if 'predicate' returns truthy for all of them
 * - return an empty array if 'predicate' returns falsey for all elements of 'array'
 * - returns only 'array' elements that 'predicate' returns truthy for, if some return falsey
 */

import { expect } from "chai";

import filter from "../src/filter.js";
import { savedProducts, hasOpenOrders } from "./testdata/products.js";

const iteratedArrayChangedError = "Iterated array changed";

describe("Testing filter function", function() {
    it("1. Empty array", function(done) {
        expect(filter([], hasOpenOrders)).to.be.a('Array').to.be.empty;
        expect(filter(null, hasOpenOrders)).to.be.a('Array').to.be.empty;
        done();
    });

    it("2. Predicate truthy for all array elements", function(done) {
        const sizes = [1,2,5];
        for (let i in sizes) {
            let originalArray = [];
            for (let j = 0; j < sizes[i]; j++) {
                originalArray.push(savedProducts[0]);
            }
            let array = originalArray.slice();
            expect(filter(array, hasOpenOrders)).to.be.a('Array').to.eql(originalArray);
            expect(array).to.eql(originalArray, iteratedArrayChangedError);
        }
        done();
    });

    it("3. Predicate falsey for all array elements", function(done) {
        const sizes = [1,2,5];
        for (let i in sizes) {
            let originalArray = [];
            for (let j = 0; j < sizes[i]; j++) {
                originalArray.push(savedProducts[1]);
            }
            let array = originalArray.slice();
            expect(filter(array, hasOpenOrders)).to.be.a('Array').to.be.empty;
            expect(array).to.eql(originalArray, iteratedArrayChangedError);
        }
        done();
    });

    it("4. Predicate truthy for some array elements", function(done) {
        const allFalse = [savedProducts[1],savedProducts[1],savedProducts[1],savedProducts[1]];
        const true1 = [savedProducts[0]];
        const true2 = [savedProducts[0],savedProducts[0]];
        const true3 = [savedProducts[0],savedProducts[0],savedProducts[0]];
        const l = allFalse.length;
        for (let i = 0; i < l; i++) {
            let originalProducts1 = allFalse.slice()
            originalProducts1[i] = savedProducts[0];
            let products1 = originalProducts1.slice();
            expect(filter(products1, hasOpenOrders)).to.be.a('Array').to.eql(true1);
            expect(products1).to.eql(originalProducts1, iteratedArrayChangedError);

            for (let j = i + 1; j < l; j++) {
                let originalProducts2 = originalProducts1.slice();
                originalProducts2[j] = savedProducts[0];
                let products2 = originalProducts2.slice();
                expect(filter(products2, hasOpenOrders)).to.be.a('Array').to.eql(true2);
                expect(products2).to.eql(originalProducts2, iteratedArrayChangedError);

                for (let k = j + 1; k < l; k++) {
                    let originalProducts3 = originalProducts2.slice();
                    originalProducts3[k] = savedProducts[0];
                    let products3 = originalProducts3.slice();
                    expect(filter(products3, hasOpenOrders)).to.be.a('Array').to.eql(true3);
                    expect(products3).to.eql(originalProducts3, iteratedArrayChangedError);
                }
            }
        }
        done();
    });
});