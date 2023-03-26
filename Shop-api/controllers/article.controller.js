'use strict';

const Article = require('../models/article.model');

const create = (req, res) => {
  const article = new Article();
  article.title = req.body.article.title;
  article.description = req.body.article.description;
  article.price = req.body.article.price;
  article.keywords = req.body.article.keywords;
  article.stock = req.body.article.stock;

  article.save( (err, saved) => {
    if ( err || !saved ) {
      return res.status(500).send({message: 'Internal Server Error'});
    }
    return res.status(200).send({message: 'Successfully saved'});
  });
};

const getDetail = (req, res) => {
  Article.findOne({_id: req.params.id}, (err, docs) => {
    if ( err ) return res.status(500).send({message: 'Internal Server Error'});
    if ( !docs ) return res.status(404).send({message: 'Article Not Found'});
    return res.status(200).send( docs );
  });
};

const getList = (req, res) => {
  Article.find({ }, (err, docs) => {
    if ( err ) return res.status(500).send({message: 'Internal Server Error'});
    return res.status(200).send( docs.map( (obj) => obj.title ) );
  });
};

const remove = (req, res) => {
  Article.deleteOne({_id: req.params.id}, (err, docs) => {
    if ( err ) return res.status(500).send({message: 'Internal Server Error'});
    if ( !docs ) return res.status(404).send({message: 'Article Not Found'});
    return res.status(200).send({message: 'Deleted'});
  });
};


module.exports = {
  create,
  getDetail,
  getList,
  remove,
};
