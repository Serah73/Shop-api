'use strict';

const Order = require('../models/order.model');

const create = (req, res) => {
  const order = new Order();
  order.id_user = req.body.id_user;
  order.ids_article = req.body.ids_article;
  order.title = req.body.title;
  order.description = req.body.description;
  order.date_order = req.body.date_order;

  order.save( (err, saved) => {
    if ( err || !saved ) {
      return res.status(500).send({message: 'Internal Server Error'});
    }
    return res.status(200).send({message: 'Successfully saved'});
  });
};

const getDetail = (req, res) => {
  Order.findOne({_id: req.params.id}, (err, docs) => {
    if ( err ) return res.status(500).send({message: 'Internal Server Error'});
    if ( !docs ) return res.status(404).send({message: 'User Not Found'});
    return res.status(200).send( docs );
  });
};

const getList = (req, res) => {
  Order.find({ }, (err, docs) => {
    if ( err ) return res.status(500).send({message: 'Internal Server Error'});
    if ( !docs ) return res.status(404).send({message: 'Users Not Found'});
    return res.status(200).send( docs.map( (obj) => obj.title ));
  });
};

const remove = (req, res) => {
  Order.deleteOne({_id: req.params.id}, (err, docs) => {
    if ( err ) return res.status(500).send({message: 'Internal Server Error'});
    if ( !docs ) return res.status(404).send({message: 'User Not Found'});
    return res.status(200).send({message: 'Deleted'});
  });
};

module.exports = {
  create,
  getDetail,
  getList,
  remove,
};
