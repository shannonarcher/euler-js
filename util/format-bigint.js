function format(bigint) {
  return bigint
    .toString()
    .replace(/\D+/g, '')
    .split('')
    .reverse()
    .join('')
    .match(/\d{1,3}/g)
    .join(',')
    .split('')
    .reverse()
    .join('');
}

module.exports = format;