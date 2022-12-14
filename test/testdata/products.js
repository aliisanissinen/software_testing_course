// Mock test data related to products

export const newProducts = [
    {
        name: null,
        seller: null,
        price: null,
        stock: null,
        size: null,
        unit: null,
        categories: null,
        contains: null
    },
    {
        name: "Organic apple jam",
        seller: "Onnin omenatarha",
        price: "5",
        stock: "50",
        size: 400,
        unit: "g",
        categories: "preserve, jam",
        contains: "apple, sugar, water & pectin"
    }
];

export function necessaryFields(product) {
    return [product.name, product.seller, product.price, product.stock];
}

export const savedProducts = [
    {
        productId: 1,
        name: "Organic apple jam",
        seller: "Onnin omenatarha",
        price: 5,
        stock: 50,
        size: 400,
        unit: "g",
        categories: ["preserve", "jam"],
        contains: ["apple", "sugar", "water", "pectin"],
        hasOpenOrders: true
    },
    {
        productId: 2,
        name: "Sunflower seeds",
        seller: "Jaskan jyvä",
        price: 2.50,
        stock: 0,
        size: 1,
        unit: "pcs.",
        categories: [],
        contains: [],
        hasOpenOrders: false
    }
];

export function hasOpenOrders(product) {
    return product.hasOpenOrders;
}