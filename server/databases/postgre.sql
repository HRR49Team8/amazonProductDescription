DROP DATABASE IF EXISTS productdescription;

CREATE DATABASE productdescription;

\c productdescription;

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  product_name VARCHAR(75) NOT NULL
);

CREATE TABLE IF NOT EXISTS styles (
  id SERIAL PRIMARY KEY,
  prod1_id INT
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
  information VARCHAR (200)
);

-- COPY products(product_name)
-- FROM '/home/mikatpt/hackreactor/sdc/reviews/server/csv/products.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY users(user_name, country, avatar)
-- FROM '/home/mikatpt/hackreactor/sdc/reviews/server/csv/users.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY reviews(product_id, user_id, overall_rating, review_date, headline, full_text, helpful, verified_purchase, product_photo)
-- FROM '/home/mikatpt/hackreactor/sdc/reviews/server/csv/reviews.csv'
-- DELIMITER ','
-- CSV HEADER;

/*  To execute this file type the following into the command line:
 *    sudo -u alexandra psql < server/databases/postgre.sql
 *  to create the database and the tables.
 *
 *  pv server/db/postgresSchema.sql | sudo -u postgres psql
 *
 *  To track progress of reviews copy:
 *  pv server/csv/reviews.csv | sudo -u postgres psql -d amazonreviews -c "copy reviews(product_id, user_id, overall_rating, review_date, headline, full_text, helpful, verified_purchase, product_photo) from stdin delimiter ',' CSV HEADER;"
 */