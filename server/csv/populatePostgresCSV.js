const path = require('path');
const fs = require('fs');
const { writeCSV } = require('./writeCSV.js');
const { makeProduct, makeProductSpecs } = require('./randomDataWriters.js');


console.log('writing to Postgres CSV...');


const deleteFileIfExists = (dest) => {
  if (fs.existsSync(dest)) {
    try {
      fs.unlinkSync(dest);
      console.log('requests file deleted');
    } catch (err) {
      console.error(err);
    }
  } else {
    return;
  }
};


// PRODUCTS TABLE CSV
const productDest = path.join(__dirname, 'productsDataCSV.csv');
deleteFileIfExists(productDest);
const productsCSV = fs.createWriteStream(productDest);

var productHeader = 'id,product_name\n'; // rememner new line char
// var product = makeProduct(); // takes param: iteration value
var prodTot = 10000000; // change after testing

console.time();

writeCSV(productsCSV, productHeader, makeProduct, prodTot, ()=>{ productsCSV.end(); });

console.timeEnd();


// SPECS TABLE CSV
const specsDest = path.join(__dirname, 'specsDataCSV.csv');
deleteFileIfExists(specsDest);
const specsCSV = fs.createWriteStream(specsDest);

var specsHeader = 'id,product_id,brand,rating,price,prime,size,dimensions,color,information\n';
var dataTot = 10000000;

console.time();

writeCSV(specsCSV, specsHeader, makeProductSpecs, dataTot, ()=>{ specsCSV.end(); });

console.timeEnd();