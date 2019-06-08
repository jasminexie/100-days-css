const fs = require('fs'),
  path = require('path');

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

fs.writeFileSync(path.join(__dirname, '..', 'config.json'), JSON.stringify(valid));
