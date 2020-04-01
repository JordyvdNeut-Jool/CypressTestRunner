var fs = require('fs');
var cmd = require('node-cmd');

const testFolder = "./cypress/integration/examples/";

module.exports.prepairData = (data) => {
  let name = data.name.split(" ").join("_")
  filePath = testFolder + name + '.spec.js';
  prepairedbeforeEach = "";
  prepairedCode = '';
  prepairedCode += 'describe("' + data.name + '", ';
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
  cmd.get('npm run cypress:open', function (err, data, stderr) {
    if (!err) {
      console.log("opened cypress");
    } else {
      console.log('Error: ' + err);
    }
  });
}
module.exports.openRecentTest = (code) => {
  let data = {code: code, name: "RecentTest", description: "Last recorded test"};
  this.saveCode(data);
  var filePath = ".\\cypress\\integration\\examples\\" + data.name + ".spec.js"
  cmd.get('npx cypress run --spec "' + filePath + '" --browser chrome --no-exit', function (err, data, stderr) {
    if (!err) {
      console.log("opened cypress");
    } else {
      console.log('Error: ' + err);
    }
  });
}

module.exports.readTestNames = () => {
  return fs.readdirSync(testFolder, "utf-8");
}