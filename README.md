# Airtribe Assignement

This repository contains a Node.js Express application for managing courses, instructors, leads, and comments on Airtribe.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Run the Application](#run-the-application)
- [Dockerization](#dockerization)
- [API Endpoints](#api-endpoints)
- [Contribution](#contribution)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- MySQL database server running.
- Docker (optional for containerization).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/airtribe-courses.git
   cd airtribe-courses


#installation
npm install

#database-setup
Create a MySQL database and update the pool configuration in app.js with your database credentials.
Execute the SQL commands in the provided database.sql file to create the necessary tables.

#run-the-application
npm start

#dockerization
docker build -t airtribe-app .

docker run -p 3000:3000 -e HOST=  host: 'DESKTOP-JOSQ794'-e USER=root -e MYSQL_PASSWORD******** -e DATABASE=Airtribe airtribe-app



#api-endpoints
Create Course:
POST /courses

Update Course Details:
PUT /courses/:course_id

Course Registration:
POST /courses/:course_id/register

Lead Update:
PUT /leads/:lead_id

Lead Search:
GET /leads?name=John&email=john@example.com

Add Comment:
POST /comments
