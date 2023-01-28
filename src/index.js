module.exports = function check(str, bracketsConfig) {
  [...str].forEach(() => bracketsConfig.map(el => el.join('')).forEach(el => str = str.replaceAll(el, '')));
  return str === '';
}


