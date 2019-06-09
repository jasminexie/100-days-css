const fs = require('fs'),
  path = require('path'),
  isEqual = require('lodash/isEqual');

const configPath = path.join(__dirname, '..', 'config.json');
const isDir = function (path) {
  try {
    const stat = fs.lstatSync(path);
    return stat.isDirectory();
  } catch (e) {
    return false;
  }
};

const files = fs.readdirSync(path.join(__dirname, '..', 'src'));
const valid = files.filter(file => isDir(path.join(__dirname, '..', 'src', file)));

const existing = fs.readFileSync(configPath);
if (!existing || !isEqual(existing, valid)) {
  fs.writeFileSync(configPath, JSON.stringify(valid));
} else {
  process.exit(1);
}

