const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`),
});

console.log('status: ', process.env.NODE_ENV);

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE: process.env.DATABASE,
};
