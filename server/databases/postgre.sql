DROP DATABASE IF EXISTS productdescription;

CREATE DATABASE productdescription;

\c productdescription;

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  product_name VARCHAR(75) NOT NULL
);

CREATE TABLE IF NOT EXISTS specs (
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  brand VARCHAR(50),
  rating NUMERIC(2,1),
  price MONEY NOT NULL,
  prime BOOLEAN,
  size INT,
  dimensions VARCHAR(20),
  color VARCHAR(15),
  information VARCHAR (1000)
);

COPY products
FROM '/Users/alexandra/Hack-Reactor/SEI-hrr49/SDC/deb-service/server/csv/productsDataCSV.csv'
DELIMITER ','
CSV HEADER;

COPY specs
FROM '/Users/alexandra/Hack-Reactor/SEI-hrr49/SDC/deb-service/server/csv/specsDataCSV.csv'
DELIMITER ','
CSV HEADER;

/*
 *  To execute this file type the following into the command line:
 *    sudo -u alexandra psql postgres < server/databases/postgre.sql
 *  to create the database and the tables.
 */