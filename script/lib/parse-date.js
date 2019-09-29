module.exports = anydate => {
  // "2019-09-22T18:17:29+08:00" to "09/22/2019"

  const date = new Date(anydate);
  const dates = [date.getUTCMonth(), date.getUTCDate(), date.getUTCFullYear()];

  return dates
    .map(date => date.toString())
    .map(date => date.padStart(2, '0'))
    .join('/');
};
