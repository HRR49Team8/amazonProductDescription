DROP DATABASE IF EXISTS productdescription;

CREATE DATABASE productdescription;

\c productdescription;

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  product_name VARCHAR(75) NOT NULL,
);

CREATE TABLE IF NOT EXISTS styles (
  id SERIAL PRIMARY KEY,
  prod1_id INT,
);

CREATE TABLE IF NOT EXISTS specs (
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  styles_id INT,
  brand VARCHAR(30),
  rating INT NOT NULL,
  price INT NOT NULL,
  prime BOOLEAN,
  specs_id INT NOT NULL,
  size INT,
  dimensions VARCHAR(20),
  color VARCHAR(15),
  information VARCHAR (200),
);

