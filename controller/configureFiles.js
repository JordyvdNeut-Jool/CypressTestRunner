var fs = require('fs');
var cmd = require('node-cmd');

module.exports.prepairData = (data) => {
  filePath = './cypress/integration/tests/' + data.title + '.spec.js';
  prepairedbeforeEach = "";
  prepairedCode = '';
  prepairedCode += 'describe("' + data.title + '", ';
  prepairedCode += 'function(){\n';
  prepairedCode += '\tbeforeEach(function (){\n';
  prepairedCode += prepairedbeforeEach + "\n";
  prepairedCode += '\t})\n';
  prepairedCode += '\tit("' + data.description + '", function (){\n';
  prepairedCode += data.code;
  prepairedCode += '\t})\n';
  prepairedCode += '})\n';
  return { filePath, prepairedCode };
}

module.exports.saveCode = (data) => {
  console.log('saving');
  prepairedData = this.prepairData(data);
  filePath = prepairedData.filePath;
  prepairedCode = prepairedData.prepairedCode;

  fs.writeFile(filePath, prepairedCode, function (err) {
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