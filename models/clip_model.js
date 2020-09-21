const mongoose = require('mongoose');

const clipSchema = new mongoose.Schema({
  title: {type: String, required: true},
  mode: {type: String, required: true},
  link: {type: String, required: true},
  user: {type: String, required: true}
}, {timestamps: true});

const Clip = mongoose.model('Clip', clipSchema);

module.exports = Clip
