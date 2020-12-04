const express = require('express');
const app = express();
const port = 3002;

const Product = require('../server/database').Product;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', express.static('public'));


// CRUD API REQS
// CREATE
app.post('/api/products/:id', (req, res) => {

  var postTestObj = {
    _id: 101,
    name: 'Test for Post',
    price: 101,
    prime: true,
    returnable: false,
    ingredients: 'I have test ingredients',
    flavor: 'Optional',
    sensitivity: 'There is time sensitivity',
    brand: 'From the People of HR',
    ingredient_info: 'More random things',
    about: 'It is fruitful research',
    ratings_avg: 4
  };

  var newProduct = new Product(postTestObj);

  newProduct.save( (err, product) => {
    if (err) {
      console.log(err);
      res.send(404);
    } else {
      res.send('Successfully posted to the database');
    }
  });

});

// READ
app.get('/api/products/:id', (req, res) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) {
      console.log('Error: ', err);
      res.send(404);
    } else {
      res.send(product);
    }
  });
});

// UPDATE
app.put('/api/products/:id', (req, res) => {
  Product.updateOne(
    { _id: 101 },
    {
      $set: {
        ingredients: 'I have modified test ingredients',
        flavor: 'Optional and updated',
        sensitivity: 'There is more time sensitivity',
        brand: 'From the People of HR and others',
        ingredient_info: 'More random things, and then some',
        about: 'It is fruitful research and implementation',
        ratings_avg: 3
      }
    }, (err) => {
      if (err) {
        res.send(404);
      } else {
        res.send('product information has been updated');
      }
    }
  );
});

// DELETE
app.delete('/api/products/:id', (req, res) => {
  Product.deleteOne({ _id: 101 }, (err) => {
    if (err) {
      res.send(404);
    } else {
      res.send('Product information has been deleted')
    }
  }
  );
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});