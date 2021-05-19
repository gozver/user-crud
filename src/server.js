const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// db
const users = [
  {
    id: 1,
    name: 'John',
    email: 'john@gmail.com'
  },
  {
    id: 2,
    name: 'Bob',
    email: 'bob@gmail.com'
  },
  {
    id: 3,
    name: 'Phil',
    email: 'phil@gmail.com'
  }
];

// settings
app.set('port', process.env.PORT || 3000);

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const { name, email } = req.body;

  users.push({ 
    id: users.length + 1,
    name,
    email 
  });

  res.send({ 
    id: users.length + 1, 
    name,
    email
  });
});

// static files
app.use(express.static(path.join(__dirname, 'app')))
app.use('/public', express.static('public'));


app.listen(app.get('port'), ()  => {
  console.log(`--> Server listening on port ${app.get('port')}`);
});