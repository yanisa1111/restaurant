const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const port = 5000;

// ใช้ cors เพื่อให้ frontend ติดต่อ backend ได้
app.use(cors());

const db = new sqlite3.Database('./restaurant.db', (err) => {
    if (err) {
      console.error('Error opening database:', err.message);
    } else {
      console.log('Connected to the SQLite database.');
    }
  });
  

// สร้าง API สำหรับดึงเมนูอาหาร
app.get("/api/menu", (req, res) => {
  db.all("SELECT * FROM Menu", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows); // ส่งข้อมูลกลับเป็น JSON
  });
});

// เริ่ม server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
