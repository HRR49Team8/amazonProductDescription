// ======== PARAMS ========
// write stream
// first line with column headers
// function that generates a line of data to be written to the CSV file
// total amount of data
// the command to end the writestream

const writeCSV = (csvfile, header, productFunc, amount, end) => {
  var i = 0;

  var logChecker = {
    '1000000': '=',
    '2000000': '==',
    '3000000': '===',
    '4000000': '====',
    '5000000': '=====',
    '6000000': '======',
    '7000000': '=======',
    '8000000': '========',
    '9000000': '=========',
    '10000000': '==========',
  };

  csvfile.write(header, 'utf8');

  while ( i < amount) {
    i++;
    if (logChecker[i]) {
      console.log(logChecker[i]);
    }
    csvfile.write(productFunc(i), 'utf8');
  }

  console.log(`succesfully populated with ${i} records`);
  end();

};

module.exports = { writeCSV };