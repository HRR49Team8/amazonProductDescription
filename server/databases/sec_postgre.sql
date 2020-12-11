\c productdescription;

DROP TABLE IF EXISTS productStyles;

CREATE TABLE IF NOT EXISTS productStyles (
  id SERIAL PRIMARY KEY,
  primaryStyle_id INT NOT NULL,
  rating NUMERIC(2,1),
  price MONEY NOT NULL,
  prime BOOLEAN,
  size INT,
  dimensions VARCHAR(20),
  color VARCHAR(15),
  information VARCHAR (1000)
);

COPY productStyles (primaryStyle_id, rating, price, prime, size, dimensions, color, information)
FROM '/Users/alexandra/Hack-Reactor/SEI-hrr49/SDC/deb-service/server/csv/PG_productStylesCSV.csv'
DELIMITER ','
CSV HEADER;

CREATE INDEX ON productStyles (primaryStyle_id);

/*
 *  To execute this file type the following into the command line:
 *    sudo -u alexandra psql postgres < server/databases/sec_postgre.sql
 *  to create the database and the tables.
 */