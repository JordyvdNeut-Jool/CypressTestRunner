// var http = require('http');
// var fs = require('fs');
var nrc = require('node-run-cmd');
var cmd = require('node-cmd')
var express = require('express');

var app = express();
app.set('view engine', 'ejs')

// Css route
app.use('/assets', express.static('assets'));

function CallLog(data){
  console.log(data)
}

// Route
app.get('/', function(req, res){
  res.render(__dirname + '/views/index.ejs');
  // var options = { 
  //   cwd: 'C:\\xampp\\htdocs\\Jool2020\\Cypress-Test-Runner', 
  //   onData: CallLog(), 
  //   onError: CallLog(), 
  //   onDone: CallLog() 
  // }
  nrc.run('kmdir foo');
  // nrc.run('mkdir foo', {cwd: 'C:\\xampp\\htdocs\\Jool2020\\Cypress-Test-Runner'}).then((exitCode) =>console.log(exitCode), (err) => console.error(err));
  console.log("run command");
  // cmd.run('cypress:open')
  // nrc.run('cypress:open', options);
  // nrc.run('cypress:run', options);
})
app.get('/code/:code', function (req, res) {
  var data = {title: 'code title', code: '<?php hier wat php?>'}
  res.render('code', {code: req.params.code, data: data});
})
app.get('/profile/:id', function (req, res) {
  res.send(req.params.id);
})

// Set port to 3000
app.listen(3000);

// Console log that the server is running
console.log('hello port 3000'); 