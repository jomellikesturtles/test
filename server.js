'use strict';

const express = require('express');

// Constants
const PORT = 85;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/stream', function (req, res) {
  res.send('stream page works!');
})
app.get('/addition', function (req, res) {
  let num1 = req.query.num1;
  let num2 = req.query.num2;
  res.send('answer: ' + (num1+num2));
})



app.listen(PORT, HOST);
