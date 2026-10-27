import React, { useState } from 'react';
import { ShoppingItem } from './components/ShoppingItem';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Молоко', price: 80 },
    { id: 2, name: 'Хлеб', price: 35 },
  ]);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!name.trim() || !price) return;

    const newItem = {
      id: Date.now(),
      name: name,
      price: Number(price),
    };

    setItems([...items, newItem]);
    setName('');
    setPrice('');
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Список покупок</h2>

      <form onSubmit={handleAddItem} style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Название товара"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ flex: 2, padding: '6px' }}
        />
        <input
          type="number"
          placeholder="Цена"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ flex: 1, padding: '6px' }}
        />
        <button type="submit" style={{ padding: '6px 12px', cursor: 'pointer' }}>Добавить</button>
      </form>

      <div>
        {items.length === 0 ? (
          <p>Список пуст</p>
        ) : (
          items.map(item => (
            <ShoppingItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              onDelete={handleDeleteItem}
            />
          ))
        )}
      </div>

      <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold', borderTop: '2px solid #333', paddingTop: '10px' }}>
        Общая стоимость: {totalPrice} сом
      </div>
    </div>
  );
}

export default App;