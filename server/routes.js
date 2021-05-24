const express = require('express');
const router = express.Router();

let users = require('./db.json');

// get users
router.get('/users', (req, res) => {
  res.json(users);
});

// get user
router.get('/user/:id', (req, res) => {
  const { id } = req.params;

  let user = users.find(user => parseInt(user.id) === parseInt(id));

  res.json(user);
});

// create user
router.post('/user', (req, res) => {
  const { name, email } = req.body;

  users.push({ 
    id: (users[users.length - 1].id) + 1,
    name,
    email 
  });

  res.send('User created successfully');
});

// update user
router.put('/user/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  users.map((user) => {
    if (parseInt(user.id) === parseInt(id)) {
      user.name = name;
      user.email = email;
    }
  });

  res.send('User updated successfully');
});

// delete user
router.delete('/user/:id', (req, res) => {
  const { id } = req.params;
  
  users = users.filter(user => user.id !== parseInt(id));

  res.send({ 'msg': 'User deleted successfully' });
});

module.exports = router;