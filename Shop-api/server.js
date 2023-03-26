#!/usr/bin/env node

'use strict';

/* Dependencies */
const mongoose = require('mongoose');
const morgan = require('morgan');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {DATABASE} = require('./config.js');
const port = process.env.PORT | 3000;


app.use(bodyParser.urlencoded({extended: false, limit: '50mb'}));
app.use(bodyParser.json({limit: '6mb'}));

mongoose.connect( DATABASE )
    .then( () => {
      console.log('Database: Connected');
      app.listen( (port), () => {
        console.log('Listen on: ' + port);
      });
    })
    .catch( (err) => console.error('Database: Could not connect', err) );

const article = require('./routes/article.routes');
const user = require('./routes/user.routes');
const order = require('./routes/order.routes');

app.use(morgan('dev'));
app.use( (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, Origin, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use('/article', article);
app.use('/user', user);
app.use('/order', order);
