const fs = require('fs');
const path = require('path');
const isEqual = require('lodash/isEqual');
const unionBy = require('lodash/unionBy');
const { parseDate, gitLog: getGitLog } = require('./lib');

function getAllRange() {
  const configPath = path.join(__dirname, '..', 'config.json');

  const files = fs.readdirSync(path.join(__dirname, '..', 'src'));
  const valid = files.filter(file => file.match(/([0-9]{3})/));
  return valid;
}

function getCommitFeatures(subjectRegexp) {
  const gitLogs = getGitLog();

  // keep only "feat: 000-999" commits
  const featuresCommits = gitLogs.filter(({ subject }) =>
    subject.match(subjectRegexp)
  );

  return featuresCommits;
}

function main() {
  const subjectRegexp = /feat: ([0-9]{3})/;

  const allRange = getAllRange().map(id => ({ id }));
  const commitFeatures = getCommitFeatures(subjectRegexp).map(feature => ({
    author: feature.author,
    date: parseDate(feature.date),
    id: feature.subject.match(subjectRegexp)[1]
  }));

  const features = unionBy(commitFeatures, allRange, 'id').sort(
    (a, b) => parseInt(a.id) - parseInt(b.id)
  );

  //
  // write `features` to `config.json`
  //
  const configPath = path.join(__dirname, '..', 'config.json');
  const existing = fs.existsSync(configPath);
  if (!existing || !isEqual(fs.readFileSync(configPath), features)) {
    fs.writeFileSync(configPath, JSON.stringify(features));
  } else {
    process.exit(1);
  }
}
main();
