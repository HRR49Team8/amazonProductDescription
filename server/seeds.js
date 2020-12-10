const faker = require('faker');
const mongoose = require('mongoose');
const {Product} = require('../server/database');
//const db = require('../server/database');

mongoose.connect('mongodb://localhost/products', {useNewUrlParser: true});
const db = mongoose.connection;

db.dropDatabase(
  console.log(`database dropped.`)
);


const makeProducts = () => {

  for (let i = 0; i < 100; i++) {
    let avg = Math.floor(Math.random() * 5) + 1;

    var product = new Product({
      _id: i,
      name: faker.commerce.productName(),
      price: faker.finance.amount(),
      prime: true,
      returnable: false,
      ingredients: faker.commerce.productMaterial(),
      flavor: faker.commerce.color(),
      sensitivity: faker.commerce.productMaterial(),
      brand: faker.company.companyName(),
      ingredient_info: faker.commerce.productDescription(),
      about: faker.commerce.productDescription(),
      ratings_avg: avg
    }).save(result => {
      if (i === 99) {
        console.log('All documents were created!')
        mongoose.disconnect();
      }
    });
  }
};
makeProducts();

exports.makeProducts = makeProducts;
