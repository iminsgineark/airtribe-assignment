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
   npm install

## database-setup
Create a MySQL database and update the pool configuration in app.js with your database credentials.
Execute the SQL commands in the provided Airtribe.sql file to create the necessary tables.

## run-the-application
npm start



## dockerization

1. Dockerize:

   ```bash
   docker build -t airtribe-app .
   docker run -p 3000:3000 -e HOST=  host: 'DESKTOP-JOSQ794'-e USER=root -e PASSWORD=******** -e DATABASE=Airtribe airtribe-app

## api-endpoints
Create Course:
POST /courses

Create a new course; send details, receive a unique course_id for reference

Update Course Details:
PUT /courses/:course_id

Update course info; use course_id in URL, send modified details, receive updated course info.




Course Registration:
POST /courses/:course_id/register

Register user for a course; include course_id in URL, user info in request.




Lead Update:
PUT /leads/:lead_id

Update lead details; use lead_id in URL, send updated lead info, receive confirmation.



Lead Search:
GET /leads?name=utkrist&email=utkristark27@gmail.com

Search leads by name/email; send criteria, receive list of matching leads.




Add Comment:
POST /comments

Add comment to system; send content, author details, receive details with a unique identifier.
