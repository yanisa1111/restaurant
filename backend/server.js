const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();

app.use(cors());

// เชื่อมต่อฐานข้อมูล SQLite
const db = new sqlite3.Database('./restaurant.db', (err) => {
  if (err) {
    console.error("Failed to connect to database:", err);
  } else {
    console.log("Connected to the SQLite database.");
  }
});

// API เพื่อดึงเมนู
app.get("/api/menu", (req, res) => {
  const query = `
    SELECT Menu.MenuID, Menu.MenuName, Menu.Price, Category.CategoryName
    FROM Menu
    JOIN Category ON Menu.CategoryID = Category.CategoryID
  `;

  db.all(query, (err, rows) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(rows); // ส่งข้อมูลเมนูกลับไปที่ Frontend
  });
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});