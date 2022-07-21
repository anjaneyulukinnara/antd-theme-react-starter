const path = require('path');
const fs = require('fs');

const basePathToData = path.join(__dirname, 'data');

const getJsonData = function (filename, pathtoFile) {
  var filename = path.join(pathtoFile || basePathToData, filename);
  return JSON.parse(fs.readFileSync(filename, 'utf-8'));
};

exports.signup = function (request, response) {
  var data = getJsonData('signup.json');
  return response.send(data.success);
};
exports.signin = function (request, response) {
  var data = getJsonData('signin.json');
  return response.send(data.success);
};
exports.verifyotp = function (request, response) {
  var data = getJsonData('verifyotp.json');
  return response.send(data.success);
};
exports.wild = function (request, response) {
  console.log(request.originalUrl);
  var data = getJsonData(request.originalUrl.split('/')[1] + '.json');
  return response.send(data.success);
};
