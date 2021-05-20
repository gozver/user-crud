const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('./server/database');

const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.get('/users', (req, res) => {
  res.json(db.users);
});

app.post('/users', (req, res) => {
  const { name, email } = req.body;

  db.users.push({ 
    id: db.users.length + 1,
    name,
    email 
  });

  res.send({ 
    id: db.users.length + 1, 
    name,
    email
  });
});

// static files
app.use(express.static(path.join(__dirname, 'src')));
app.use('/public', express.static('public'));

app.listen(app.get('port'), ()  => {
  console.log(`--> Server listening on port ${app.get('port')}`);
});