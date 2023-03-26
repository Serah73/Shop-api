'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = Schema({
  id: Number,
  id_user: Number,
  ids_article: Array,
  title: String,
  description: String,
  date_order: Date,
});

module.exports = mongoose.model('Order', orderSchema);
