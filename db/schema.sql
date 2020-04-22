/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console. (mysql -u root -p)

3. Run "source schema.sql" & source seeds.sql

4. Quit Mysql by typing \q

*/

-- Drops the day_planner_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE burgers_db;

USE burgers_db;

-- Create the table plans.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burgername varchar(255) NOT NULL,
  devoured BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (id)
);