module.exports = function check(str, bracketsConfig) {
  let max = str.length / 2;
  for (let i = 0; i < max; i++) {
    bracketsConfig.map(el => el.join('')).forEach(el => str = str.replaceAll(el, ''));
  }
  return !str ? true : false;
}
