/*
 * Test the defaultTo function
 * 
 * The function is used to fill unfilled optional fields when adding new products
 * 
 * The function should
 * - return 'defaultValue' if 'value' is NaN/null/undefined
 * - return 'value if value is not NaN/null/undefined
 */
import { expect } from "chai";

import defaultTo from "../src/defaultTo.js";

const defaultValues = [0, 1.5, "pcs.", ["food"], false];
const values = [100, 2.5, "category", ["water", "sugar", "strawberry"], true];

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