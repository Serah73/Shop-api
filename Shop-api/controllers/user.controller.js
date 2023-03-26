'use strict';

const User = require('../models/user.model');

const create = (req, res) => {
  const user = new User();
  user.name = req.body.name;
  user.surname = req.body.surname;
  user.birthday = new Date(req.body.birthday);  
  user.address = req.body.address;

  user.save( (err, saved) => {
    if ( err || !saved ) {
      return res.status(500).send({message: 'Internal Server Error'});
    }
    return res.status(200).send({message: 'Successfully saved'});
  });
};

const getDetail = (req, res) => {
  User.findOne({_id: req.params.id}, (err, docs) => {
    if ( err ) return res.status(500).send({message: 'Internal Server Error'});
    if ( !docs ) return res.status(404).send({message: 'User Not Found'});
    return res.status(200).send( docs );
  });
};

const getList = (req, res) => {
  User.find({ }, (err, docs) => {
    if ( err ) return res.status(500).send({message: 'Internal Server Error'});
    if ( !docs ) return res.status(404).send({message: 'Users Not Found'});
    return res.status(200).send( docs.map( (obj) => obj.name ));
  });
};

const remove = (req, res) => {
  User.deleteOne({_id: req.params.id}, (err, docs) => {
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
