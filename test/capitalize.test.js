import { assert, expect } from "chai";
import capitalize from "../src/capitalize.js";

const orderDetails = [
  {
    date: "01/12/2021",
    customerFirsName: "maija",
    customerLastName: "Mehilainen",
    phone: "04012312312",
    shippingAddress: "Address 123 28345 Helsinki",
    items: ["t-shirt"],
    totalPrice: 12.95,
    status: "delivered",
  },
  {
    date: "06/06/2022",
    customerFirsName: "Pekka",
    customerLastName: "pekkanen",
    phone: "0409329393",
    shippingAddress: "Address 53 22545 Turku",
    items: ["t-shirt", "hat", "jeans"],
    totalPrice: 81.99,
    status: "on its way",
  },
  {
    date: "11/01/2022",
    customerFirsName: "saMi",
    customerLastName: "SauKkOnen",
    phone: "0401122424",
    shippingAddress: "Address 11 12545 Vaasa",
    items: ["jeans", "boots", "socks", "jacket", "jeans"],
    totalPrice: 215.45,
    status: "on its way",
  },
  {
    date: "11/09/2022",
    customerFirsName: "TARJA",
    customerLastName: "HALONEN",
    phone: "0401122499",
    shippingAddress: "a",
    items: ["jacket"],
    totalPrice: 78.99,
    status: "confirmed",
  },
  {
    date: "11/11/2023",
    customerFirsName: "K",
    customerLastName: "Rouvala",
    phone: "",
    shippingAddress: "Address 17 12312 Kajaani",
    items: ["hat"],
    totalPrice: 10.99,
    status: "confirmed",
  },
];

describe("Testing capitalize function", function () {
  it("1. Text written in small letters", function (done) {
    expect(capitalize(orderDetails[0].customerFirsName)).to.equal("Maija").to.be.a('string');;
    expect(capitalize(orderDetails[1].customerLastName)).to.equal("Pekkanen");
    expect(capitalize(orderDetails[3].shippingAddress)).to.equal("A");
    done();
  });

  it("2. Text written in capital letters", function (done) {
    expect(capitalize(orderDetails[3].customerFirsName)).to.equal("Tarja");
    expect(capitalize(orderDetails[4].customerFirsName)).to.equal("K");
    done();
  });

  it("3. Text that have both, small and capital letter", function (done) {
    expect(capitalize(orderDetails[2].customerFirsName)).to.equal("Sami");
    expect(capitalize(orderDetails[2].customerLastName)).to.equal("Saukkonen");
    done();
  });

  it("3. Text is empty or wrong type", function (done) {
    expect(capitalize("")).to.equal("").to.be.a('string');
    expect(capitalize()).to.throw();
    expect(capitalize(orderDetails[0].totalPrice)).to.equal(`${orderDetails[0].totalPrice}`).to.be.a('string');;
    expect(function() {capitalize(orderDetails[2].items);}).to.throw(TypeError);
    expect(function() {capitalize(orderDetails);}).to.throw(TypeError);
    done();
  });
});
 