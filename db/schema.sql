/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console. (mysql -u root -p)

3. Run "source schema.sql"

*/

-- Drops the day_planner_db if it already exists --
DROP DATABASE IF EXISTS eat_burgers_db;

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE eat_burgers_db;

USE eat_burgers_db;

-- Create the table plans.
CREATE TABLE burger (
  id int NOT NULL AUTO_INCREMENT,
  burgername varchar(255) NOT NULL,
  isdevoured BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO burger (burgername) VALUES ('Whopper');
