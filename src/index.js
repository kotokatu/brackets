module.exports = function check(str, bracketsConfig) {
  let pattern = bracketsConfig.map(el => el.join(''));
  let max = str.length / 2;
  let x = 0;
  while (str && x < max) {
    for (let i of pattern) {
      str = str.replaceAll(i, '');
      }
      x++;
  }
  return !str ? true : false;
}
