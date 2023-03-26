const express = require('express');
const api = express.Router();

const UserController = require('../controllers/user.controller');

api.post('/create', UserController.create);
api.delete('/remove/:id', UserController.remove);
api.get('/:id', UserController.getDetail);
api.get('', UserController.getList);

module.exports = api;
