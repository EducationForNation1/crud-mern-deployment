import React from 'react';

export default function ItemList({ items, onEdit, onDeleted, API_BASE }) {
  const handleDelete = async (id) => {
    if (!window.confirm('Delete this item?')) return;
    await fetch(`${API_BASE}/api/items/${id}`, { method: 'DELETE' });
    onDeleted();
  };

  return (
    <div className="list">
      <h2>Items</h2>
      {items.length === 0 && <p>No items yet.</p>}
      <ul>
        {items.map(item => (
          <li key={item._id}>
            <div>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
            <div className="actions">
              <button onClick={() => onEdit(item)}>Edit</button>
              <button onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
