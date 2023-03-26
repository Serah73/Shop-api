'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  id: Number,
  name: String,
  surname: String,
  birthday: Date,
  address: String,
});

module.exports = mongoose.model('User', userSchema);
