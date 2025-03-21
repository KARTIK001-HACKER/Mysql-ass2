require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3000;

// Create MySQL connection using mysql2
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database!");
});

// Define a simple route
app.get("/", (req, res) => {
  res.send("MySQL2 and Express are connected!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
