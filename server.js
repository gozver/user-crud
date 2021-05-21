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

// route get users
app.get('/users', (req, res) => {
  res.json(db.users);
});

// route get user
app.get('/user/:id', (req, res) => {
  const { id } = req.params;

  let user = db.users.find(user => user.id == id);

  res.json(user);
});

// route create user
app.post('/user', (req, res) => {
  const { name, email } = req.body;

  db.users.push({ id: db.users.length + 1, name, email });

  res.send('User created successfully');
});

// route update user
app.put('/user/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  db.users.forEach((user, i) => {
    if (user.id === parseInt(id)) {
      user.name = name;
      user.email = email;
    }
  });

  res.send('User updated successfully');
});

// route delete user
app.delete('/user/:id', (req, res) => {
  const { id } = req.params;
  
  db.users = db.users.filter(user => user.id !== parseInt(id));

  res.send(db.users);
});

// static files
app.use(express.static(path.join(__dirname, 'src')));
app.use('/public', express.static('public'));

app.listen(app.get('port'), ()  => {
  console.log(`--> Server listening on port ${app.get('port')}`);
});