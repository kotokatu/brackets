module.exports = function check(str, bracketsConfig) {
  str.split('').forEach(el => bracketsConfig.map(el => el.join('')).forEach(el => str = str.replaceAll(el, '')));
  return !str ? true : false;
}
