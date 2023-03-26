const express = require('express');
const api = express.Router();

const OrderController = require('../controllers/order.controller');

api.post('/create', OrderController.create);
api.delete('/remove/:id', OrderController.remove);
api.get('/:id', OrderController.getDetail);
api.get('', OrderController.getList);

module.exports = api;
