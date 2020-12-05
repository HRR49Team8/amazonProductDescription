// ======== PARAMS ========
// write stream
// first line with column headers
// function that generates a line of data to be written to the CSV file
// total amount of data
// the command to end the writestream

const writeCSV = (csvfile, header, productFunc, amount, end) => {
  // function that takes information and writes a CSV file with it
  // may need to use the pipe method for something readableSrc.pipe(writableDest)z

  var i = 0;

  var logChecker = {
    '1000000': 'oh shit',
    '2000000': 'it\'s happeningggg',
    '3000000': 'ok, are we going to get past this?',
    '4000000': 'sweet we got past it!',
    '5000000': 'I wonder how long we\'ll make it this time...',
    '6000000': 'OVER HALF WAY THERE',
    '7000000': '...',
    '8000000': 'I\'m close baby',
    '9000000': 's o  c l o s e',
    '10000000': 'YES',
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