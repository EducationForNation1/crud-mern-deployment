import React, { useEffect, useState } from 'react';

export default function ItemForm({ API_BASE, onSaved, editing }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editing) {
      setTitle(editing.title || '');
      setDescription(editing.description || '');
    } else {
      setTitle('');
      setDescription('');
    }
  }, [editing]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return alert('Title required');
    const payload = { title, description };
    if (editing && editing._id) {
      await fetch(`${API_BASE}/api/items/${editing._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } else {
      await fetch(`${API_BASE}/api/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    }
    setTitle(''); setDescription('');
    onSaved();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>{editing ? 'Edit Item' : 'Add Item'}</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">{editing ? 'Update' : 'Create'}</button>
    </form>
  );
}
