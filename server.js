'use strict';

const express = require('express');
const pg = require('pg');
const app = express();

const PORT = 3000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`);
});

//PostgreSQL 

const POSTGRES_USER = process.env.POSTGRES_USER
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD
const POSTGRES_HOST = process.env.POSTGRES_HOST
const POSTGRES_PORT = process.env.POSTGRES_PORT

var config = {
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  host: POSTGRES_HOST,
  port: POSTGRES_PORT
};

var pool = new pg.Pool(config);
pool.connect(function(err, client, done) {
  if(err) {
    return console.error('Error fetching client from pool', err);
  }
  client.query('SELECT $1::int AS number', ['1'], function(err, result) {
    //call `done()` to release the client back to the pool
    done();

    if(err) {
      return console.error('Error running query', err);
    }

    console.log('Successfully executed query in PostgreSQL!');
  });
});