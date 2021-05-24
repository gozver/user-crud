const express = require('express');
const morgan = require('morgan');
const path = require('path');
const globals = require('./server/globals');

const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use(globals.apiUrl, require('./server/routes'));

// static files
app.use(express.static(path.join(__dirname, 'src')));
app.use('/public', express.static('public'));

app.listen(app.get('port'), ()  => {
  console.log(`--> Server listening on port ${app.get('port')}`);
});