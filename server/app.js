const express = require('express');
const app = express();
const port = 3002;

// MONGO
const Product = require('../server/database');
// CASSANDRA
const { ProductsC, findProductC } = require('../server/cassandra.js');
// POSTGRES
const { writeData, findData, updateData, deleteData } = require('./pg_router.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', express.static('public'));


// =============== POSTGRES CRUD API REQS ====================
app.post('/api/products/:id', (req, res) => {
  console.log('Receiving post request');
  console.log('request body:', req.body['product_name']);

  var inputs = [req.body['product_name'], req.body.brand, req.body.rating, req.body.price, req.body.prime, req.body.size, req.body.dimensions, req.body.color, req.body.information];

  writeData(inputs, (data) => {
    console.log('write req made it back to the server');
    res.send(data);
  });

});

// READ
app.get('/api/products/:id', (req, res) => {
  console.log('Getting from Postgres');
  var id = Number(req.params.id);
  findData(id, (data) => {
    console.log('data made it server-side:', data);
    res.send(data);
  });
});

// // UPDATE
app.put('/api/products/:id', (req, res) => {
  var id = Number(req.params.id);
  var newDataObj = {
    'product_name': req.body['product_name'],
    brand: req.body.brand,
    rating: req.body.rating,
    price: req.body.price,
    prime: req.body.prime,
    size: req.body.size,
    dimensions: req.body.dimensions,
    color: req.body.color,
    information: req.body.information
  };

  updateData(id, newDataObj, (data) => {
    console.log('write req made it back to the server');
    res.send(data);
  });
});

// // DELETE
app.delete('/api/products/:id', (req, res) => {
  var id = Number(req.params.id);
  deleteData(id, (data) => {
    res.send(data);
  });
});

// =============== CASSANDRA CRUD API REQS ====================
// CREATE
// app.post('/api/products/:id', (req, res) => {

//   var postTestObj = {
//     id: Number(req.params.id),
//     product_name: 'Test for Cassandra Post',
//   };

//   var newProduct = new ProductsC(postTestObj);

//   newProduct.save( (err) => {
//     if (err) {
//       console.log(err);
//       res.send(404);
//     } else {
//       res.send('Successfully posted to the database');
//     }
//   });

// });

// // READ
// app.get('/api/products/:id', (req, res) => {
//   var id = Number(req.params.id);
//   findProductC(id, (data) => {
//     console.log('data made it server-side:', data);
//     // will likely need to refactor, need to return data the way the client expects to receive it, it should include data from both products table and specs table
//     res.send(data);
//   });
// });

// // // UPDATE
// app.put('/api/products/:id', (req, res) => {
//   ProductsC.update(
//     { id: Number(req.params.id) },
//     {
//       product_name: 'Update test product name'
//     }, (err) => {
//       if (err) {
//         res.send(404);
//       } else {
//         res.send('product information has been updated');
//       }
//     }
//   );
// });

// // // DELETE
// app.delete('/api/products/:id', (req, res) => {
//   ProductsC.delete({ id: Number(req.params.id) }, (err) => {
//     if (err) {
//       res.send(404);
//     } else {
//       res.send('Product information has been deleted');
//     }
//   });
// });


// =============== MONGO CRUD API REQS ====================
// CREATE
// app.post('/api/products/:id', (req, res) => {

//   var postTestObj = {
//     _id: 101,
//     name: 'Test for Post',
//     price: 101,
//     prime: true,
//     returnable: false,
//     ingredients: 'I have test ingredients',
//     flavor: 'Optional',
//     sensitivity: 'There is time sensitivity',
//     brand: 'From the People of HR',
//     ingredient_info: 'More random things',
//     about: 'It is fruitful research',
//     ratings_avg: 4
//   };

//   var newProduct = new Product(postTestObj);

//   newProduct.save( (err, product) => {
//     if (err) {
//       console.log(err);
//       res.send(404);
//     } else {
//       res.send('Successfully posted to the database');
//     }
//   });

// });

// // READ
// app.get('/api/products/:id', (req, res) => {
//   Product.findById(req.params.id, (err, product) => {
//     if (err) {
//       console.log('Error: ', err);
//       res.send(404);
//     } else {
//       res.send(product);
//     }
//   });
// });

// // UPDATE
// app.put('/api/products/:id', (req, res) => {
//   Product.updateOne(
//     { _id: 101 },
//     {
//       $set: {
//         ingredients: 'I have modified test ingredients',
//         flavor: 'Optional and updated',
//         sensitivity: 'There is more time sensitivity',
//         brand: 'From the People of HR and others',
//         ingredient_info: 'More random things, and then some',
//         about: 'It is fruitful research and implementation',
//         ratings_avg: 3
//       }
//     }, (err) => {
//       if (err) {
//         res.send(404);
//       } else {
//         res.send('product information has been updated');
//       }
//     }
//   );
// });

// // DELETE
// app.delete('/api/products/:id', (req, res) => {
//   Product.deleteOne({ _id: 101 }, (err) => {
//     if (err) {
//       res.send(404);
//     } else {
//       res.send('Product information has been deleted')
//     }
//   }
//   );
// });

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});