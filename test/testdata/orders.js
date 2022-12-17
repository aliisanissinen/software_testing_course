/*
 * Test data. List contains objects that reflect one order.
 * Date: date of order
 * customerFirstName: customer's first name
 * customerLastName: customer's last name
 * phone: customer's phone number
 * shippingAddress: where the order is sent
 * items: products that have been ordered, list of objects (name, price, pcs)
 * totalPrice: total price, includes delivery fee
 * status: status of the order (waiting, canceled, confirmed, on its way, delivered, returned)
 * approvedByCustomer: customer accepts the order at the end, should always be true
 */

export const orders = [
  {
    date: '01/12/2021',
    customerFirsName: 'maija',
    customerLastName: 'Mehilainen',
    phone: '04012312312',
    shippingAddress: 'Address 123 28345 Helsinki',
    items: [{ name: 't-shirt', price: 12.95, pcs: 1 }],
    totalPrice: 12.95,
    status: 'delivered',
    approvedByCustomer: true
  },
  {
    date: '06/06/2022',
    customerFirsName: 'Pekka',
    customerLastName: 'pekkanen',
    phone: '0409329393',
    shippingAddress: 'Address 53 22545 Turku',
    items: [
      { name: 't-shirt', price: 12.95, pcs: 1 },
      { name: 'hat', price: 22.95, pcs: 1 },
      { name: 'jeans', price: 39.95, pcs: 1 }
    ],
    totalPrice: 75.85,
    status: 'on its way',
    approvedByCustomer: true
  },
  {
    date: '11/01/2022',
    customerFirsName: 'saMi',
    customerLastName: 'SauKkOnen',
    phone: '0401122424',
    shippingAddress: 'Address 11 12545 Vaasa',
    items: [
      { name: 'jeans', price: 39.95, pcs: 2 },
      { name: 'boots', price: 79.95, pcs: 1 },
      { name: 'socks', price: 9.95, pcs: 1 },
      { name: 'jacket', price: 99.95, pcs: 1 }
    ],
    totalPrice: 269.75,
    status: 'on its way',
    approvedByCustomer: true
  },
  {
    date: '11/09/2022',
    customerFirsName: 'TARJA',
    customerLastName: 'HALONEN',
    phone: '0401122499',
    shippingAddress: 'a',
    items: [{ name: 'jacket', price: 99.95, pcs: 1 }],
    totalPrice: 99.95,
    status: 'confirmed',
    approvedByCustomer: true
  },
  {
    date: '11/11/2022',
    customerFirsName: 'K',
    customerLastName: 'Rouvala',
    phone: '',
    shippingAddress: 'Address 17 12312 Kajaani',
    items: [{ name: 'hat', price: 22.95, pcs: 4 }],
    totalPrice: 91.8,
    status: 'confirmed',
    approvedByCustomer: true
  },
  {
    date: '11/2022',
    customerFirsName: 'Pertti',
    customerLastName: '',
    phone: '0502421414',
    shippingAddress: '',
    items: [
      { name: 'jeans', price: 39.95, pcs: 1 },
      { name: 'hat', price: 22.95, pcs: 1 },
      { name: 'suit', price: 199.99, pcs: 1 }
    ],
    totalPrice: 262.89,
    status: 'on its way',
    approvedByCustomer: true
  },
  {
    date: '24/24/2013',
    customerFirsName: 'Sakari',
    customerLastName: 'Saamela',
    phone: '',
    shippingAddress: 'Address 49 11111 Salo',
    items: [],
    totalPrice: 0.0,
    status: 'delivered',
    approvedByCustomer: false
  },
];
