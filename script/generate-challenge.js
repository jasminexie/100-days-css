const colors = require('ansi-colors');
const { prompt } = require('enquirer');
const fs = require('fs'),
  path = require('path');

function _validate(name) {
  if (!name.length || name.length > 3) {
    return false;
  }
  const day = parseInt(name, 10);
  if (isNaN(day)) {
    return false;
  }
  return !(day < 0 && day > 100);
}

function scaffold(day, dir) {
  const files = {
    pug: fs.readFileSync(path.join(__dirname, 'template', 'index.pug')),
    css: fs.readFileSync(path.join(__dirname, 'template', 'index.css'))
  };
  const readme = `# ${day}\n\nTime taken: \n\nThings I learnt:\n\n`;

  fs.mkdirSync(dir);
  fs.writeFileSync(path.join(dir, 'index.pug'), files.pug);
  fs.writeFileSync(path.join(dir, 'index.css'), files.css);
  fs.writeFileSync(path.join(dir, 'README.md'), readme);
}

(async function main() {
  const response = await prompt({
    type: 'input',
    name: 'day',
    message: 'Challenge name',
    validate(value) {
      if(!_validate(value)) {
        return colors.red('Invalid input! Should be a 3-digit number like `046`');
      }
      return true;
    }
  });
  const dir = path.join(__dirname, '..', 'src', response.day);
  if (fs.existsSync(dir)) {
    console.log(colors.red('Error: Challenge exists!'));
    process.exit(1);
  }
  scaffold(response.day, dir);
})();
