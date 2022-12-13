/*
 * Test the toNumber function
 * TODO: documentation 
 */
import { expect } from "chai";

import toNumber from "../src/toNumber.js";
import { products } from "./testdata/products.js";

// Tests
describe("Testing toNumber function", function() {
    describe("1. Value is number", function() {
        it("a. zero", function(done) {
            expect(toNumber(0)).to.be.a('Number').to.eql(0);
            done();
        });

        it("b. positive integer", function(done) {
            expect(toNumber(5)).to.be.a('Number').to.eql(5);
            done();
        });

        it("c. negative integer", function(done) {
            expect(toNumber(-15)).to.be.a('Number').to.eql(-15);
            done();
        });

        it("d. positive float", function(done) {
            expect(toNumber(20.5)).to.be.a('Number').to.eql(20.5);
            done();
        });

        it("e. negative float", function(done) {
            expect(toNumber(-4.50)).to.be.a('Number').to.eql(-4.50);
            done();
        });
    });

    describe("2. Value can be converted to number", function() {
        it("a. string containing number", function(done) {
            expect(toNumber("0")).to.be.a('Number').to.eql(0);
            expect(toNumber("300")).to.be.a('Number').to.eql(300);
            expect(toNumber("-1")).to.be.a('Number').to.eql(-1);
            expect(toNumber("3.75")).to.be.a('Number').to.eql(3.75);
            expect(toNumber("-14.45")).to.be.a('Number').to.eql(-14.45);
            expect(toNumber("  500")).to.be.a('Number').to.eql(500);
            expect(toNumber("1     ")).to.be.a('Number').to.eql(1);
            expect(toNumber(" 7.75 ")).to.be.a('Number').to.eql(7.75);
            done();
        });

        it("b. empty string", function(done) {
            expect(toNumber("")).to.be.a('Number').to.eql(0);
            done();
        });

        it("c. boolean", function(done) {
            expect(toNumber(true)).to.be.a('Number').to.eql(1);
            expect(toNumber(false)).to.be.a('Number').to.eql(0);
            done();
        });

        it("d. null", function(done) {
            expect(toNumber(null)).to.be.a('Number').to.eql(0);
            done();
        });
    });

    describe("3. Value cannot be converted to number", function() {
        it("a. string", function(done) {
            expect(toNumber("number 15")).to.be.NaN;
            done();
        });
        
        it("b. NaN", function(done) {
            expect(toNumber(NaN)).to.be.NaN;
            done();
        });
    });
});
