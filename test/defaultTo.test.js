/*
 * Test the defaultTo function
 * TODO: documentation 
 */
import { expect } from "chai";

import defaultTo from "../src/defaultTo.js";
import { products } from "../testdata/products.js";

const defaultValues = [0, "pcs.", [], false];
const values = [100, 1.5, "category", ["water", "sugar", "strawberry"], true];

// Tests
describe("Testing defaultTo function", function() {
    it("1. Returns default value", function(done) {
        for (let defaultValue in defaultValues) {
            expect(defaultTo(NaN, defaultValue)).to.eql(defaultValue);
            expect(defaultTo(null, defaultValue)).to.eql(defaultValue);
            expect(defaultTo(undefined, defaultValue)).to.eql(defaultValue);
        }
        done();
    });

    it("2. Returns value", function(done) {
        for (let defaultValue in defaultValues) {
            for (let value in values) {
                expect(defaultTo(value, defaultValue)).to.eql(value);
            }
        }
        done();
    });
});