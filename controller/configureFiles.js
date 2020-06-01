var fs = require('fs');
var cmd = require('node-cmd');

// Variable to save the tests
const testFolder = "./cypress/integration/examples/";

// Format the code
module.exports.prepairData = (data) => {
  let name = data.name.split(" ").join("_")
  location = data.location ? data.location : testFolder;
  filePath = location + name + '.spec.js';
  prepairedbeforeEach = "";
  prepairedCode = `describe("${data.name}", function(){
  beforeEach(function (){
    ${prepairedbeforeEach}
  })
  it("${data.description ? data.description : data.name}", function (){
${data.code}  })
})`
  return { filePath, prepairedCode };
}

// Saves the code as file in $testFolder
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

// Save the code as RecentTest file and run that file
module.exports.openRecentTest = (code) => {
  let data = {code: code, name: "RecentTest", description: "Last recorded test", location: testFolder};
  this.saveCode(data);
  var filePath = testFolder + data.name + ".spec.js"
  cmd.get('npx cypress run --spec "' + filePath + '" --browser chrome --no-exit', function (err, data, stderr) {
    if (!err) {
      console.log("opened cypress");
    } else {
      console.log('Error: ' + err);
    }
  });
}

// read all filenames in $testFolder
module.exports.readTestNames = () => {
  return fs.readdirSync(testFolder, "utf-8");
}