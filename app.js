const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// MySQL Connection
const pool = mysql.createPool({
  host: 'DESKTOP-JOSQ794',
  user: 'root',
  password: 'ronaldo7',
  database: 'Airtribe',
});

app.use(bodyParser.json());

// API: Create course
app.post('/courses', (req, res) => {
  const { instructor_id, name, max_seats, start_date } = req.body;

  pool.query('INSERT INTO courses (instructor_id, name, max_seats, start_date) VALUES (?, ?, ?, ?)', [instructor_id, name, max_seats, start_date], (err, result) => {
    if (err) throw err;
    res.json({ success: true, course_id: result.insertId });
  });
});

// API: Update course details
app.put('/courses/:course_id', (req, res) => {
  const { name, max_seats, start_date } = req.body;
  const course_id = req.params.course_id;

  pool.query('UPDATE courses SET name = ?, max_seats = ?, start_date = ? WHERE course_id = ?', [name, max_seats, start_date, course_id], (err, result) => {
    if (err) throw err;
    res.json({ success: true, message: 'Course details updated successfully' });
  });
});

// API: Course registration
app.post('/courses/:course_id/register', (req, res) => {
  const { name, email, phone_number, linkedin_profile } = req.body;
  const course_id = req.params.course_id;

  pool.query('INSERT INTO leads (course_id, name, email, phone_number, linkedin_profile) VALUES (?, ?, ?, ?, ?)', [course_id, name, email, phone_number, linkedin_profile], (err, result) => {
    if (err) throw err;
    res.json({ success: true, lead_id: result.insertId });
  });
});

// API: Lead update
app.put('/leads/:lead_id', (req, res) => {
  const { status } = req.body;
  const lead_id = req.params.lead_id;

  pool.query('UPDATE leads SET status = ? WHERE lead_id = ?', [status, lead_id], (err, result) => {
    if (err) throw err;
    res.json({ success: true, message: 'Lead status updated successfully' });
  });
});

// API: Lead search
app.get('/leads', (req, res) => {
  const { name, email } = req.query;

  pool.query('SELECT * FROM leads WHERE name LIKE ? OR email LIKE ?', [`%${name}%`, `%${email}%`], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// API: Add comment
app.post('/comments', (req, res) => {
  const { lead_id, instructor_id, comment } = req.body;

  pool.query('INSERT INTO comments (lead_id, instructor_id, comment) VALUES (?, ?, ?)', [lead_id, instructor_id, comment], (err, result) => {
    if (err) throw err;
    res.json({ success: true, comment_id: result.insertId });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
