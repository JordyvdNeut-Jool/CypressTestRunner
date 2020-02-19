var fs = require('fs');
var cmd = require('node-cmd');

module.exports.prepairData = (data) => {
  filename = './cypress/integration/tests/' + data.title + '.spec.js';
  
}

module.exports.saveCode = (data) => {
  console.log('saving');
  filename = './cypress/integration/tests/'+data.title+'.spec.js';

  fs.writeFile(filename, data.code, function (err) {
    if (err) {
      return console.log('Error: ' + err)
    }
  });
}

// opens the cypress runner
module.exports.openCypressRunner = () => {
  console.log('starting');
  cmd.get('npm run cypress:open', function (err, data, stderr) {
    if (!err) {
      console.log('result: ' + data);
    } else {
      console.log('Error: ' + err);
    }
  });
}