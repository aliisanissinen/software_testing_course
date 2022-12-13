export const products = [
    {
        name: "Apple jam",
        price: 5.50,
        size: 400,
        unit: "g",
        stock: 0,
        seller: "Onnin omenatarha",
        categories: "preserve, jam",
        contains: "apple, sugar, water & pectin",
        openOrdersStatus: true
    },
    {
        name: "Potato chips",
        price: "3.75",
        size: "300",
        unit: "g",
        stock: "0",
        seller: "Paulan perunatila",
        categories: "",
        contains: "",
        openOrdersStatus: true
    },
    {
        name: "",
        price: "",
        size: "",
        unit: "",
        stock: "",
        seller: "",
        categories: "",
        contains: "",
        openOrdersStatus: ""
    },
    {
        name: "Sunflower seeds",
        price: "",
        size: "  500",
        unit: "",
        stock: "",
        seller: "Jaskan jyvä",
        categories: "",
        contains: "sunflower seed, sea salt",
        openOrdersStatus: false
    },
    {
        name: "Honey",
        price: "-14.45",
        size: "1  ",
        unit: "kg",
        stock: "  1  ",
        seller: "Hannan hunaja",
        categories: "",
        contains: "",
        openOrdersStatus: false
    },
    {
        name: "Orange juice 12",
        price: -1.05,
        size: "-1",
        unit: "l",
        stock: -3,
        seller: "Siirin sitrus",
        categories: "",
        contains: "",
        openOrdersStatus: true
    },
    {
        name: "Beetroot",
        price: NaN,
        size: null,
        unit: "kg",
        stock: 53,
        seller: "Jaakon juures",
        categories: "",
        contains: "",
        openOrdersStatus: false
    },
];

export function hasOpenOrders(product) {
    return product.openOrdersStatus;
}

export function returnNecessaryFields(product) {
    return [product.name, product.price, product.stock, product.seller, product.openOrdersStatus];
}