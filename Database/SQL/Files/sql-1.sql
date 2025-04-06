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

-- 3. Create post table
CREATE TABLE post (
  id INT PRIMARY KEY,
  content VARCHAR(100),
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES user(id)
);

-- 4. Insert users (all with age >= 13)
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
