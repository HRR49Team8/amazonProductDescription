var ExpressCassandra = require('express-cassandra');
var models = ExpressCassandra.createClient({
  clientOptions: {
    contactPoints: ['127.0.0.1'],
    protocolOptions: { port: 9042 },
    keyspace: 'productdescription', // name of the keyspace I'm trying to access
    queryOptions: {consistency: ExpressCassandra.consistencies.one}
  },
  ormOptions: {
    defaultReplicationStrategy : {
      class: 'SimpleStrategy',
      replication_factor: 1
    },
    migration: 'safe',
  }
});

const ProductsC = models.loadSchema('products', {
  fields: {
    id: "int",
    product_name: "text"
  },
  key:["id"]
});

// MyModel or models.instance.Person can now be used as the model instance
console.log(models.instance.products === ProductsC);

// sync the schema definition with the cassandra database table
// if the schema has not changed, the callback will fire immediately
// otherwise express-cassandra will try to migrate the schema and fire the callback afterwards
ProductsC.syncDB(function(err, result) {
  if (err) {
    throw err;
  }
  // result == true if any database schema was updated
  // result == false if no schema change was detected in your models
});


const findProductC = (index, cb) => {
  ProductsC.findOne({ id: index }, (err, res) => {
    if (err || res === undefined) {
      cb(err || 'No record in database');
    } else {
      console.log('Cassandra data found!:', res);
      cb([res.id, res['product_name']]);
    }
  });
};

// findProductC(1000);

console.log('still connected to Cassandra?');

module.exports = {
  ProductsC,
  findProductC
};