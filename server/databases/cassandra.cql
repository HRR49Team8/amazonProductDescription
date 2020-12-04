DROP KEYSPACE IF EXISTS productdescription;

CREATE KEYSPACE productdescription
  WITH REPLICATION = {
    'class' : 'SimpleStrategy',
    'replication_factor' : 1
  };

USE productdescription;

CREATE TABLE IF NOT EXISTS products (
  id INT PRIMARY KEY,
  product_name VARCHAR ,
);

CREATE TABLE IF NOT EXISTS styles (
  id INT PRIMARY KEY,
  prod1_id INT,
);

CREATE TABLE IF NOT EXISTS specs (
  id INT PRIMARY KEY,
  product_id INT ,
  styles_id INT,
  brand VARCHAR,
  rating INT ,
  price INT ,
  prime BOOLEAN,
  specs_id INT ,
  size INT,
  dimensions VARCHAR,
  color VARCHAR,
  information VARCHAR
);

/*
Run the following in the command line to execute the file:
cqlsh < server/databases/cassandra.cql
*/