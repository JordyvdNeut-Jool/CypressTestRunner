var express = require('express');
var configureFiles = require('./controller/configureFiles.js')
var app = express();

app.use(express.json());

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