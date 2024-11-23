const express = require('express');
const basicAuth = require('express-basic-auth');
const path = require('path');

const app = express();

app.use(
  basicAuth({
    users: { 'admin': 'password' }, // Set your username and password
    challenge: true,
  })
);

app.use(express.static(path.join(__dirname, 'build')));

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
