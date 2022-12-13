/*
 * Test the filter function
 * TODO: documentation 
 */
import { expect } from "chai";

import filter from "../src/filter.js";
import { products, hasOpenOrders } from "./testdata/products.js";

const iteratedArrayChangedError = "Iterated array changed";

// Tests
describe("Testing filter function", function() {
    it("1. Empty array", function(done) {
        expect(filter([], hasOpenOrders)).to.be.a('Array').to.be.empty;
        expect(filter(null, hasOpenOrders)).to.be.a('Array').to.be.empty;

        done();
    });

    it("2. Predicate truthy for all array elements", function(done) {
        const oneProductOriginal = [products[0]];
        const oneProduct = oneProductOriginal.slice();
        expect(filter(oneProduct, hasOpenOrders)).to.be.a('Array').to.eql(oneProductOriginal);
        expect(oneProduct).to.eql(oneProductOriginal, iteratedArrayChangedError);

        const twoProductsOriginal = [products[0], products[1]];
        const twoProducts = twoProductsOriginal.slice();
        expect(filter(twoProducts, hasOpenOrders)).to.be.a('Array').to.eql(twoProductsOriginal);
        expect(twoProducts).to.eql(twoProductsOriginal, iteratedArrayChangedError);

        const threeProductsOriginal = [products[0], products[1], products[1]];
        const threeProducts = threeProductsOriginal.slice();
        expect(filter(threeProducts, hasOpenOrders)).to.be.a('Array').to.eql(threeProductsOriginal);
        expect(threeProducts).to.eql(threeProductsOriginal, iteratedArrayChangedError);

        done();
    });

    it("3. Predicate falsey for all array elements", function(done) {
        const oneProductOriginal = [products[3]];
        const oneProduct = oneProductOriginal.slice();
        expect(filter(oneProduct, (hasOpenOrders))).to.be.a('Array').to.be.empty;
        expect(oneProduct).to.eql(oneProductOriginal, iteratedArrayChangedError);

        const twoProductsOriginal = [products[3], products[4]];
        const twoProducts = twoProductsOriginal.slice();
        expect(filter(twoProducts, hasOpenOrders)).to.be.a('Array').to.be.empty;
        expect(twoProducts).to.eql(twoProductsOriginal, iteratedArrayChangedError);

        const threeProductsOriginal = [products[3], products[4], products[4]];
        const threeProducts = threeProductsOriginal.slice();
        expect(filter(threeProducts, hasOpenOrders)).to.be.a('Array').to.be.empty;
        expect(threeProducts).to.eql(threeProductsOriginal, iteratedArrayChangedError);

        done();
    });

    it("4. Predicate truthy for some array elements", function(done) {
        const firstProductFalseyOriginal = [products[3], products[0]];
        const firstProductFalsey = firstProductFalseyOriginal.slice();
        expect(filter(firstProductFalsey, hasOpenOrders)).to.be.a('Array').to.eql([products[0]]);
        expect(firstProductFalsey).to.eql(firstProductFalseyOriginal, iteratedArrayChangedError);

        const lastProductFalseyOriginal = [products[0], products[3]];
        const lastProductFalsey = lastProductFalseyOriginal.slice();
        expect(filter(lastProductFalsey, hasOpenOrders)).to.be.a('Array').to.eql([products[0]]);
        expect(lastProductFalsey).to.eql(lastProductFalseyOriginal, iteratedArrayChangedError);

        const middleProductFalseyOriginal = [products[0], products[3], products[1]];
        const middleProductFalsey = middleProductFalseyOriginal.slice();
        expect(filter(middleProductFalsey, hasOpenOrders)).to.be.a('Array').to.eql([products[0], products[1]]);
        expect(middleProductFalsey).to.eql(middleProductFalseyOriginal, iteratedArrayChangedError);

        const middleProductTrueyOriginal = [products[3], products[0], products[4]];
        const middleProductTruey = middleProductTrueyOriginal.slice();
        expect(filter(middleProductTruey, hasOpenOrders)).to.be.a('Array').to.eql([products[0]]);
        expect(middleProductTruey).to.eql(middleProductTrueyOriginal, iteratedArrayChangedError);

        done();
    });
});