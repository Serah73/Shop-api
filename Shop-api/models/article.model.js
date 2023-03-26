'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  keywords: Array,
  stock: Number,
});

module.exports = mongoose.model('Article', articleSchema);
