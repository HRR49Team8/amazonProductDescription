DROP KEYSPACE IF EXISTS productdescription;

CREATE KEYSPACE IF NOT EXISTS productdescription
  WITH REPLICATION = {
    'class' : 'SimpleStrategy',
    'replication_factor' : 1
  };

USE productdescription;

CREATE TABLE IF NOT EXISTS products (
  id INT PRIMARY KEY,
  product_name VARCHAR
);

-- CREATE INDEX IF NOT EXISTS prod_index
-- ON productdescription.products (product_name);

CREATE TABLE IF NOT EXISTS specs (
  id INT PRIMARY KEY,
  product_id INT,
  brand VARCHAR,
  rating DECIMAL,
  price DECIMAL,
  prime BOOLEAN,
  size INT,
  dimensions VARCHAR,
  color VARCHAR,
  information VARCHAR
);

-- CREATE INDEX IF NOT EXISTS specs_index
-- ON productdescription.products (product_id);

COPY products (id, product_name)
FROM '/Users/alexandra/Hack-Reactor/SEI-hrr49/SDC/deb-service/server/csv/productsDataCSV.csv'
WITH DELIMITER = ',' AND
HEADER = true;

COPY specs (id, product_id, brand, rating, price, prime, size, dimensions, color, information)
FROM '/Users/alexandra/Hack-Reactor/SEI-hrr49/SDC/deb-service/server/csv/specsDataCSV.csv'
WITH DELIMITER = ',' AND
HEADER = true;

/*
Run the following in the command line to execute the file:
cqlsh < server/databases/cassandra.cql
*/