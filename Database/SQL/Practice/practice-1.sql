CREATE DATABASE IF NOT EXISTS college;

USE college;

CREATE TABLE teacher(
	id INT PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    subject VARCHAR(25),
    salary INT
);

INSERT INTO teacher
(id,name,subject,salary)
VALUES
(23,"ajay","math",50000),
(47,"bharat","english",60000),
(18,"chetan","chemistry",45000),
(9,"divya","physics",75000);

SELECT * FROM teacher
WHERE salary > 55000;

ALTER TABLE teacher
RENAME COLUMN salary TO ctc;

UPDATE teacher
SET ctc = ctc * 1.25;

ALTER TABLE teacher
ADD COLUMN city VARCHAR(25) DEFAULT "mumbai";

ALTER TABLE teacher
DROP COLUMN ctc;

SELECT * FROM teacher;


CREATE TABLE student(
	roll_no INT,
    name VARCHAR(50),
    city VARCHAR(50),
    marks INT
);

INSERT INTO student
(roll_no,name,city,marks)
VALUES
(101,"ajay","delhi",76),
(108,"bharat","pune",65),
(124,"chetan","mumbai",94),
(112,"divya","pune",80);

SELECT * FROM student
WHERE marks > 75;

SELECT city FROM student
GROUP BY city;

SELECT city,max(marks) FROM student
GROUP BY city;

SELECT avg(marks)
FROM student;

ALTER TABLE student
ADD COLUMN grade VARCHAR(2);

UPDATE student
SET grade = "O"
WHERE marks > 80;

UPDATE student
SET grade = "A"
WHERE marks BETWEEN 70 AND 80 ;

UPDATE student
SET grade = "B"
WHERE marks BETWEEN 60 AND 70 ;


SELECT * FROM student;


