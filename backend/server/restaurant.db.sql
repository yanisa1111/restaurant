-- สร้างตาราง Category
CREATE TABLE IF NOT EXISTS Category (
  CategoryID INTEGER PRIMARY KEY AUTOINCREMENT,
  CategoryName TEXT NOT NULL
);

-- สร้างตาราง Menu
CREATE TABLE IF NOT EXISTS Menu (
  MenuID INTEGER PRIMARY KEY AUTOINCREMENT,
  MenuName TEXT NOT NULL,
  Price REAL NOT NULL,
  CategoryID INTEGER,
  FOREIGN KEY (CategoryID) REFERENCES Category(CategoryID)
);

-- สร้างตาราง Orders
CREATE TABLE IF NOT EXISTS Orders (
  OrderID INTEGER PRIMARY KEY AUTOINCREMENT,
  MenuID INTEGER,
  Qty INTEGER NOT NULL,
  OrderDate DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (MenuID) REFERENCES Menu(MenuID)
);

-- เพิ่มประเภทเมนู
INSERT INTO Category (CategoryName) VALUES ('อาหารยุโรป');
INSERT INTO Category (CategoryName) VALUES ('เครื่องดื่ม');
INSERT INTO Category (CategoryName) VALUES ('ของหวาน');

-- เพิ่มเมนูอาหารยุโรป
INSERT INTO Menu (MenuName, Price, CategoryID) VALUES ('Spaghetti Carbonara', 180.00, 1);
INSERT INTO Menu (MenuName, Price, CategoryID) VALUES ('Beef Wellington', 350.00, 1);
INSERT INTO Menu (MenuName, Price, CategoryID) VALUES ('Croque Monsieur', 150.00, 1);
INSERT INTO Menu (MenuName, Price, CategoryID) VALUES ('Chicken Alfredo', 200.00, 1);
INSERT INTO Menu (MenuName, Price, CategoryID) VALUES ('Lasagna', 220.00, 1);
INSERT INTO Menu (MenuName, Price, CategoryID) VALUES ('Ratatouille', 180.00, 1);
INSERT INTO Menu (MenuName, Price, CategoryID) VALUES ('Duck Confit', 400.00, 1);
INSERT INTO Menu (MenuName, Price, CategoryID) VALUES ('Mushroom Risotto', 250.00, 1);

-- เพิ่มเมนูเครื่องดื่ม
INSERT INTO Menu (MenuName, Price, CategoryID) VALUES ('น้ำมะพร้าว', 30.00, 2);
INSERT INTO Menu (MenuName, Price, CategoryID) VALUES ('ชาไทย', 35.00, 2);
INSERT INTO Menu (MenuName, Price, CategoryID) VALUES ('น้ำกระเจี๊ยบ', 25.00, 2);
INSERT INTO Menu (MenuName, Price, CategoryID) VALUES ('น้ำส้มคั้นสด', 40.00, 2);
INSERT INTO Menu (MenuName, Price, CategoryID) VALUES ('น้ำตะไคร้', 30.00, 2);
INSERT INTO Menu (MenuName, Price, CategoryID) VALUES ('น้ำมะนาว', 20.00, 2);
INSERT INTO Menu (MenuName, Price, CategoryID) VALUES ('ชาดำเย็น', 30.00, 2);
INSERT INTO Menu (MenuName, Price, CategoryID) VALUES ('น้ำขิง', 25.00, 2);

-- เพิ่มเมนูของหวาน
INSERT INTO Menu (MenuName, Price, CategoryID) VALUES ('Macaron', 150.00, 3);
INSERT INTO Menu (MenuName, Price, CategoryID) VALUES ('Crème Brûlée', 180.00, 3);
INSERT INTO Menu (MenuName, Price, CategoryID) VALUES ('Tarte Tatin', 200.00, 3);
INSERT INTO Menu (MenuName, Price, CategoryID) VALUES ('Éclair', 120.00, 3);
INSERT INTO Menu (MenuName, Price, CategoryID) VALUES ('Madeleine', 100.00, 3);
INSERT INTO Menu (MenuName, Price, CategoryID) VALUES ('Mille-feuille', 180.00, 3);
INSERT INTO Menu (MenuName, Price, CategoryID) VALUES ('Soufflé', 250.00, 3);
INSERT INTO Menu (MenuName, Price, CategoryID) VALUES ('Clafoutis', 160.00, 3);
