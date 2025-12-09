import React, { useEffect, useState } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:5000';

function App() {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetchItems = async () => {
    const res = await fetch(`${API_BASE}/api/items`);
    const data = await res.json();
    setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="container">
      <h1>MERN CRUD App</h1>
      <ItemForm API_BASE={API_BASE} onSaved={() => { fetchItems(); setEditing(null); }} editing={editing} />
      <ItemList items={items} onEdit={setEditing} onDeleted={() => fetchItems()} API_BASE={API_BASE} />
    </div>
  );
}

export default App;
