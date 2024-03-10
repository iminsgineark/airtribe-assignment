SHOW DATABASES;
CREATE DATABASE airtribe;
USE airtribe;
SHOW TABLES;

CREATE TABLE instructors ( inst_id INTEGER PRIMARY KEY ,
						    name VARCHAR (100) NOT NULL,
                            email VARCHAR (150) NOT NULL );
                            
CREATE TABLE courses ( courseId INTEGER PRIMARY KEY,
                       inst_id INTEGER,
                       name VARCHAR (100) NOT NULL,
                       maxSeats INTEGER,
                       startDate DATE,
                       FOREIGN KEY (inst_id) REFERENCES instructors(inst_id) );

CREATE TABLE leads ( leadId INTEGER PRIMARY KEY,
					 courseId INTEGER,
                     name VARCHAR(100) NOT NULL,
                     email VARCHAR(150) NOT NULL,
                     phone VARCHAR(15),
                     linkedin_id VARCHAR (200),
                     status VARCHAR(20) DEFAULT 'pending',
                     FOREIGN KEY (courseID) REFERENCES courses(courseId) );
                     
CREATE TABLE comments ( commentId INTEGER PRIMARY KEY,
                        leadId INTEGER,
                        inst_id INTEGER,
                        commentText TEXT,
                        FOREIGN KEY (leadId) REFERENCES leads(leadID),
                        FOREIGN KEY (inst_id) REFERENCES instructors(inst_id) );


