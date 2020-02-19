var express = require('express');
var configureFiles = require('./controller/configureFiles.js')
var app = express();

app.set('view engine', 'ejs')

// Css route
app.use('/assets', express.static('assets'));
app.use(express.json({ limit: '1mb' }));

// set host port
const port = 3000;

// Route
app.post('/', (req, res) => {
  const data = req.body;
  configureFiles.saveCode(data);
  configureFiles.openCypressRunner();
})

// Set port to 3000
app.listen(port);

// Console log that the server is running
console.log('hello port: ' + port);