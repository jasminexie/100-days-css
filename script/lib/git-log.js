const { execSync } = require('child_process');

module.exports = () => {
  const gitlog = execSync(
    `git --no-pager log --pretty='{ "author": "%an", "date": "%ai", "subject": "%s"},'`,
    { encoding: 'utf-8' }
  ).trim();

  return JSON.parse(`[${gitlog.slice(0, -1)}]`);
};
