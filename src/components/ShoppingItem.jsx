import React from 'react';

export const ShoppingItem = ({ id, name, price, onDelete }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}>
      <span>{name} — <strong>{price} сом</strong></span>
      <button 
        onClick={() => onDelete(id)}
        style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '4px 8px', cursor: 'pointer', borderRadius: '4px' }}
      >
        Удалить
      </button>
    </div>
  );
};