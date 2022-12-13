/*
 * Test the words function
 * TODO: documentation 
 */
import { expect } from "chai";

import words from "../src/words.js";
import { products } from "../testdata/products.js";

const justWords = "water sugar strawberry"
const wordsAndCommas = "water, sugar, strawberry";
const wordsCommasAndAmpersand = "water, sugar & strawberry";
const justSeparators = ", , ,";

// Tests
describe("Testing words function", function() {
    it("1. Empty string", function(done) {
        expect(words("")).to.be.a('Array').to.be.empty;
        done();
    });

    it("2. Without pattern", function(done) {
        expect(words(justWords)).to.be.a('Array').to.eql(["water", "sugar", "strawberry"]);
        expect(words(wordsAndCommas)).to.be.a('Array').to.eql(["water", "sugar", "strawberry"]);
        expect(words(wordsCommasAndAmpersand)).to.be.a('Array').to.eql(["water", "sugar", "strawberry"]);
        expect(words(justSeparators)).to.be.a('Array').to.be.empty;
        done();
    });

    it("3. With pattern", function(done) {
        expect(words(justWords, /[^, ]+/g)).to.be.a('Array').to.eql(["water", "sugar", "strawberry"]);
        expect(words(wordsAndCommas, /[^, ]+/g)).to.be.a('Array').to.eql(["water", "sugar", "strawberry"]);
        expect(words(wordsCommasAndAmpersand, /[^, ]+/g)).to.be.a('Array').to.eql(["water", "sugar", "&", "strawberry"]);
        expect(words(justSeparators, /[^, ]+/g)).to.be.a('Array').to.be.empty;
        done();
    });
});