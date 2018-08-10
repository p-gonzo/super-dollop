var express = require('express');
var parser = require('body-parser');
var path = require('path');

var app = express();

app.use(parser.json());
app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(3000, () => {
  console.log('Listening on 3000...')
})