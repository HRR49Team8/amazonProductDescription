const path = require('path');
const fs = require('fs');
const { writeSecondaryCSV } = require('./CSVwriters.js');
const { makeStyles } = require('./randomDataWriters.js');


console.log('writing to Postgres productStyles CSV...');


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

const records = 40000000;

// PRODUCTS TABLE CSV
const productDest = path.join(__dirname, 'PG_productStylesCSV.csv');
deleteFileIfExists(productDest);
const productsCSV = fs.createWriteStream(productDest);

var productHeader = 'primaryStyle_id,rating,price,prime,size,dimensions,color,information\n';
var prodTot = records;

console.time();

writeSecondaryCSV(productsCSV, productHeader, makeStyles, prodTot, () => { productsCSV.end(); });

console.timeEnd();