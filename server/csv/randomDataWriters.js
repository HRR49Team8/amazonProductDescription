const faker = require('faker');

// Random number generators
var getRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  var random = Math.floor(Math.random() * (max - min) + min);
  return random ? random : null;
};

var getRandomRatingNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

// true or false generator
var randomBool = () => {
  var bool = getRandomNum(0, 2);
  if (bool) {
    return true;
  } else {
    return false;
  }
};

var makeDimensions = () => {
  return getRandomNum(2, 9) + 'x' + getRandomNum(4, 13);
};
var makeRating = () => {
  num1 = getRandomRatingNum(0, 6);

  if (num1 === 0) {
    return '';
  } else if (num1 === 5) {
    return num1;
  } else {
    return num1 + '.' + getRandomRatingNum(0, 10);
  }
};

// Data Generating Functions
const makeProduct = (iteration) => {
  var sizes = randomBool();


  var name = faker.commerce.productName();
  var brand = `"${faker.company.companyName()}"`;
  var rating = makeRating();
  var price = faker.finance.amount();
  var prime = randomBool();
  var size = sizes ? getRandomNum(6, 13) : '';
  var dimensions = sizes ? '' : makeDimensions();
  var color = faker.commerce.color();
  var information = faker.lorem.paragraph(getRandomNum(3, 10));

  return `${name},${brand},${rating},${price},${prime},${size},${dimensions},${color},${information}\n`;

};

const makeStyles = (primaryId) => {

  var sizes = randomBool();

  var primaryStyle_Id = primaryId;
  var rating = makeRating();
  var price = faker.finance.amount();
  var prime = randomBool();
  var size = sizes ? getRandomNum(6, 13) : '';
  var dimensions = sizes ? '' : makeDimensions();
  var color = faker.commerce.color();
  var information = faker.lorem.paragraph(getRandomNum(3, 10));

  return `${primaryStyle_Id},${rating},${price},${prime},${size},${dimensions},${color},${information}\n`;
};

module.exports = {
  makeProduct,
  makeStyles
};