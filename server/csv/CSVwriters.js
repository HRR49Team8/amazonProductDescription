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

  // function writeOneMillionTimes(writer, data, encoding, callback) {
  //   let i = 1000000;
  //   write();
  //   function write() {
  //     let ok = true;
  //     do {
  //       i--;
  //       if (i === 0) {
  //         // Last time!
  //         writer.write(data, encoding, callback);
  //       } else {
  //         // See if we should continue, or wait.
  //         // Don't pass the callback, because we're not done yet.
  //         ok = writer.write(data, encoding);
  //       }
  //     } while (i > 0 && ok);
  //     if (i > 0) {
  //       // Had to stop early!
  //       // Write some more once it drains.
  //       writer.once('drain', write);
  //     }
  //   }
  // }

};

const writeSecondaryCSV = (csvfile, header, productFunc, amount, end) => {
  console.log(`trying to write ${amount} rows`);
  let i = amount;
  let x = 0;

  csvfile.write(header, 'utf8');

  const write = () => {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        if (((i + 1) % 4) === 0) { /// creates a new primProductID after 4 rows
          x++;
        }
        console.log('writing last row');
        // Last time!
        csvfile.write(productFunc(x), 'utf8', end);
      } else {
        if ((i + 1) % 4 === 0) { /// creates a new primProductID after 4 rows
          x++;
        }
        if (i % 1000000 === 0) {
          console.log('a milli');
        }
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        ok = csvfile.write(productFunc(x), 'utf8');
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // Had to stop early!
      // Write some more once it drains.
      csvfile.once('drain', write);
    }
  };
  write();
};

module.exports = { writeCSV, writeSecondaryCSV };