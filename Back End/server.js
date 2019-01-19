const express = require('express');
const app = express();
var mysql = require('mysql');

app.use(express.urlencoded())
app.engine('pug', require('pug').__express)
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.render('index')
});


const server = app.listen(8000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
