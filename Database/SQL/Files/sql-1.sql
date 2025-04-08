CREATE DATABASE college;

USE college;

CREATE TABLE student(
  roll_no INT,
  name VARCHAR(30),
  age INT
);

INSERT INTO student
VALUES
(101,"YASH",21),
(102,"OM",102);

SELECT * FROM student;

SHOW DATABASES;

SHOW TABLES;



---  CONSTRAINT ---

-- 1. Create and use the database
CREATE DATABASE instagram;
USE instagram;

-- 2. Create user table
CREATE TABLE user (
  id INT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  age INT,
  email VARCHAR(50) UNIQUE,
  followers INT DEFAULT 0,
  following INT,
  CONSTRAINT age_check CHECK (age >= 13)
);

-- 3. Insert users (all with age >= 13)
INSERT INTO user
(id, name, age, email, followers, following)
VALUES
(1, 'yash', 14, 'yash@yahoo.in', 123, 145),
(2, 'om', 16, 'om123@gmail.com', 200, 854),
(3, 'darshan', 20, 'darshan847@gmail.com', 854, 454),
(4, 'mayur', 21, 'mayur854@gmail.com', 498, 365),
(5, 'vikash', 18, 'vikash15@yahoo.in', 51, 545);

SELECT id,name,email FROM user;

SELECT * FROM user;

-- WHERE CLAUSE

SELECT * FROM user
WHERE followers >= 200;

SELECT name,age FROM user
WHERE age < 16;


-- AND
SELECT * FROM user
WHERE age > 15 AND followers > 200;

-- OR
SELECT * FROM user
WHERE age > 15 OR followers > 200;

-- BETWEEN
SELECT * FROM user
WHERE age BETWEEN 15 AND 20;

-- IN
SELECT * FROM user
WHERE email IN ("vikash15@yahoo.in","darshan847@gmail.com","yash584@gmail.com") ;

-- NOT
SELECT * FROM user
WHERE email NOT IN ("vikash15@yahoo.in","darshan847@gmail.com","yash584@gmail.com") ;

-- LIMIT CLAUSE
SELECT * FROM user
WHERE age > 14
LIMIT 2;

SELECT * FROM user
LIMIT 2;

-- ORDER CLAUSE
SELECT * FROM user
ORDER BY followers ASC;

SELECT * FROM user
ORDER BY followers DESC;

-- Aggeregate functions
SELECT max(followers)
FROM user;

-- GROUP BY CLAUSE
SELECT age, max(followers)
FROM user
GROUP BY age;

-- HAVING CLAUSE
SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) > 200;


-- UPDATE Queries : 
UPDATE user
SET followers = 600
WHERE age = 16;

SET SQL_SAFE_UPDATES = 0; 
SELECT * FROM user;

-- DELETE Queries
DELETE FROM user
WHERE age = 20;

SELECT * FROM user;


-- ALTER Queries

-- ADD
ALTER TABLE user
ADD COLUMN city VARCHAR(22) DEFAULT "surat";

SELECT * FROM user;

-- DROP
ALTER TABLE user
DROP COLUMN age;

SELECT * FROM user;

-- RENAME
ALTER TABLE user
RENAME TO instaUser;

SELECT * FROM instaUser;

ALTER TABLE instaUser
RENAME TO user;

-- CHANGE
ALTER TABLE user
CHANGE COLUMN followers subscriber INT DEFAULT 0;

SELECT * FROM user;

-- MODIFY
ALTER TABLE user
MODIFY subscriber INT DEFAULT 5;

INSERT INTO user
(id,name,email,following)
VALUES
(7,"fenil","fenil578@gmail.com",354);

SELECT * FROM user;

-- TRUNCATE Queries
DROP TABLE post;

TRUNCATE TABLE user;

-- 4. Create post table
CREATE TABLE post (
  id INT PRIMARY KEY,
  content VARCHAR(100),
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES user(id)
);




