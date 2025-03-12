import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tableNumber, setTableNumber] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState([]);
  const [menuData, setMenuData] = useState([]); // เพิ่มสถานะเพื่อเก็บข้อมูลเมนู

  // ฟังก์ชันดึงข้อมูลเมนูจาก API
  useEffect(() => {
    fetch('http://localhost:5000/api/menu')
      .then((response) => response.json())
      .then((data) => {
        setMenuData(data.menu); // เก็บข้อมูลเมนูที่ได้รับ
      })
      .catch((error) => console.error('Error fetching menu data:', error));
  }, []); // เมื่อโหลดหน้าเว็บจะดึงข้อมูลเมนูครั้งเดียว

  // ฟังก์ชันเพิ่มรายการจาน
  const handleAddToOrder = (menu) => {
    const existingItem = selectedMenu.find((item) => item.id === menu.id);

    if (existingItem) {
      setSelectedMenu(
        selectedMenu.map((item) =>
          item.id === menu.id
            ? { ...item, quantity: item.quantity + 1, total: item.price * (item.quantity + 1) }
            : item
        )
      );
    } else {
      setSelectedMenu([
        ...selectedMenu,
        { ...menu, quantity: 1, total: menu.price },
      ]);
    }
  };

  // ฟังก์ชันลบเมนูออกจากรายการ
  const handleRemoveItem = (id) => {
    setSelectedMenu(selectedMenu.filter((item) => item.id !== id));
  };

  // คำนวณราคารวมทั้งหมด
  const getTotalPrice = () => {
    return selectedMenu.reduce((acc, item) => acc + item.total, 0);
  };

  return (
    <div className="app-container">
      <h1>ร้านอาหาร</h1>

      <div className="section">
        <label>เลือกโต๊ะ: </label>
        <select
          value={tableNumber || ''} 
          onChange={(e) => setTableNumber(e.target.value)}
        >
          <option value="">เลือกโต๊ะ</option>
          {[1, 2, 3, 4, 5].map((table) => (
            <option key={table} value={table}>
              โต๊ะ {table}
            </option>
          ))}
        </select>
      </div>

      {/* แสดงเมนูอาหาร */}
      <div className="menu-list">
        {Array.isArray(menuData) && menuData.length > 0 ? (
          menuData.map((menu) => (
            <div key={menu.id} className="menu-item">
              <div>
                <strong>{menu.name}</strong> - {menu.price} บาท
              </div>
              <button onClick={() => handleAddToOrder(menu)}>+</button>
            </div>
          ))
        ) : (
          <p>กำลังโหลดเมนู...</p>
        )}
      </div>

      {/* แสดงรายการที่เลือก */}
      <div className="order-list">
        <h3>รายการสั่งซื้อ</h3>
        {selectedMenu.map((item) => (
          <div key={item.id} className="order-item">
            <div>{item.name} x{item.quantity} - {item.total} บาท</div>
            <button onClick={() => handleRemoveItem(item.id)}>ลบ</button>
          </div>
        ))}
      </div>

      {/* แสดงราคาสุทธิ */}
      <div className="total-price">
        <h2>ราคารวม: {getTotalPrice()} บาท</h2>
      </div>
    </div>
  );
}

export default App;
