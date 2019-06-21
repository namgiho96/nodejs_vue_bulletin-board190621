const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
  name: { type: String, index: true },
  ut: { type: Date, default: Date.now},
  cp_id: { type: mongoose.Schema.Types.ObjectId, ref: 'company', require: true},
  rmk: { type: String, default: ''},
});

module.exports = mongoose.model('Group', groupSchema);