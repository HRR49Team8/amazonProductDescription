const path = require('path');
const fs = require('fs');
const { writeCSV } = require('./CSVwriters.js');
const { makeProduct } = require('./randomDataWriters.js');


console.log('writing to Postgres CSV...');


const deleteFileIfExists = (dest) => {
  if (fs.existsSync(dest)) {
    try {
      fs.unlinkSync(dest);
      console.log('CSV file deleted');
    } catch (err) {
      console.error(err);
    }
  } else {
    return;
  }
};

const records = 10000000;

// PRODUCTS TABLE CSV
const productDest = path.join(__dirname, 'PG_productsCSV.csv');
const testDest = path.join(__dirname, 'testProductsCSV.csv'); // for testing the csvs

deleteFileIfExists(productDest);
const productsCSV = fs.createWriteStream(productDest);

var productHeader = 'product_name,brand,rating,price,prime,size,dimensions,color,information\n';
var prodTot = records;

console.time();

// productsCSV.on('drain', () => {
//   writeCSV(productsCSV, productHeader, makeProduct, prodTot, () => { productsCSV.end(); });
// });
writeCSV(productsCSV, productHeader, makeProduct, prodTot, () => { productsCSV.end(); });

console.timeEnd();


// SPECS TABLE CSV
// const specsDest = path.join(__dirname, 'PG_specsDataCSV.csv');
// deleteFileIfExists(specsDest);
// const specsCSV = fs.createWriteStream(specsDest);

// var specsHeader = 'product_id,brand,rating,price,prime,size,dimensions,color,information\n';
// var dataTot = records;

// console.time();


// specsCSV.on('drain', () => {
//   writeCSV(specsCSV, specsHeader, makeProductSpecs, dataTot, () => { specsCSV.end(); });
// });
// writeCSV(specsCSV, specsHeader, makeProductSpecs, dataTot, () => { specsCSV.end(); });

// console.timeEnd();