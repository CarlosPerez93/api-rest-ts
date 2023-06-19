CREATE DATABASE IF NOT EXISTS companyDB;

USE companyDB;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee VALUES
(1,'Carlos', 1000),
(2,'Carlos1', 2000),
(3,'Carlos2', 3000),
(4,'Carlos3', 4000);