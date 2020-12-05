DROP DATABASE IF EXISTS productdescription;

CREATE DATABASE productdescription;

\c productdescription;

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  product_name VARCHAR(75) NOT NULL
);

-- CREATE TABLE IF NOT EXISTS stylesGroups (
--   id SERIAL PRIMARY KEY,
--   prod1_id INT
-- );

CREATE TABLE IF NOT EXISTS specs (
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  -- stylesGroup_id INT,
  brand VARCHAR(30),
  rating INT NOT NULL,
  price INT NOT NULL,
  prime BOOLEAN,
  size INT,
  dimensions VARCHAR(20),
  color VARCHAR(15),
  information VARCHAR (200)
);

COPY products /*(product_name) idk if this is necessary*/
FROM /* CSV file path */
-- "'/home/mikatpt/hackreactor/sdc/reviews/server/csv/products.csv'"
DELIMITER ','
CSV HEADER;

COPY styles /*(...)*/
FROM /* CSV file path */
DELIMITER ','
CSV HEADER;

COPY specs /*(...)*/
-- FROM /* CSV file path */
DELIMITER ','
CSV HEADER;

/*  To execute this file type the following into the command line:
 *    sudo -u alexandra psql < server/databases/postgre.sql
 *  to create the database and the tables.
 *
 *  pv server/db/postgresSchema.sql | sudo -u postgres psql
 *
 *  To track progress of reviews copy:
 *  pv server/csv/reviews.csv | sudo -u postgres psql -d amazonreviews -c "copy reviews(product_id, user_id, overall_rating, review_date, headline, full_text, helpful, verified_purchase, product_photo) from stdin delimiter ',' CSV HEADER;"
 */