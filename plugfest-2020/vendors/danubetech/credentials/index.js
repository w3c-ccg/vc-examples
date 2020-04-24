'use strict';

const fs = require('fs');
const path = require('path');
const files = fs.readdirSync(__dirname).filter(f => {
  return f.indexOf('.json') !== -1;
});
const credentials = files.map(f => {
  return JSON.parse(fs.readFileSync(path.resolve(__dirname, f).toString()));
});
module.exports = credentials;
