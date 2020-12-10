const pool = require('./postgres.js').pool;

// CREATE
const writeData = (data, cb) => {
  // console.log(typeof productName, productName);
  // console.log('In writeData function');
  pool.query(`INSERT INTO products (product_name, brand, rating, price, prime, size, dimensions, color, information) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`, data, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      cb(res);
    }
  });
};

// READ
const findData = (id, cb) => {
  pool.query(`SELECT * FROM products WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log(err);
      cb(err);
    } else {
      console.log(res.rows[0]);
      cb(res.rows[0]);
    }
  });
};

// UPDATE
const updateData = (id, obj, cb) => {
  console.log('routed to update');

  var queryString = '';
  for (key in obj) {
    if (obj[key]) {
      if (queryString.length === 0) {
        queryString += key + ' = ' + '\'' + obj[key] + '\'';
      } else {
        queryString += ', ' + key + ' = ' + '\'' + obj[key] + '\' ';

      }
    }
  }
  console.log(queryString);

  pool.query(`UPDATE products SET ${queryString} WHERE id = ${id} RETURNING *`, (err, res) => {
    if (err) {
      console.log('error when putting req');
      console.log(err);
      cb(err);
    } else {
      cb(res);
    }
  });
};

// DELETE
const deleteData = (id, cb) => {
  console.log('routed to delete');
  pool.query(`DELETE FROM products WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log(err);
      cb(err);
    } else {
      cb(res);
    }
  });
};

module.exports = {
  writeData,
  findData,
  updateData,
  deleteData
};