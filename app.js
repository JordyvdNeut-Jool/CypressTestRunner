var express = require('express');
var configureFiles = require('./controller/configureFiles.js')
var app = express();

app.use(express.json());

// set host port
const port = 3000;

// Route
app.get('/readTests', (request, response) => {
  fileNames = configureFiles.readTestNames();
  response.json({
    fileNames: fileNames
  });
});

app.post('/saveTest', (request, response) => {
  const data = request.body;
  configureFiles.saveCode(data);
});

app.post('/openRunner', (request, response) => {
  configureFiles.openCypressRunner();
});

app.post('/openTest', (request, response) => {
  code = request.body.code;
  configureFiles.openRecentTest(code);
});

// Set port to 3000
app.listen(port);