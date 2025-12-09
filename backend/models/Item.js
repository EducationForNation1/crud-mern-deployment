// Optional: separated model file (used if you refactor)
const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Item', itemSchema);
