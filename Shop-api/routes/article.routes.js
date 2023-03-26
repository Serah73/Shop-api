const express = require('express');
const api = express.Router();

const ArticleController = require('../controllers/article.controller');

api.post('/create', ArticleController.create);
api.delete('/remove/:id', ArticleController.remove);
api.get('/:id', ArticleController.getDetail);
api.get('', ArticleController.getList);

module.exports = api;
