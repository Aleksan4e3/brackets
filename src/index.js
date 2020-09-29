module.exports = function check(str, bracketsConfig) {
  let brackets = bracketsConfig.flat();
  let strArray = str.split('');
  let resultArray = [];

  for (const char of strArray) {
    let index = brackets.indexOf(char);

    if (brackets[index] === brackets[index + 1]) {
      if (resultArray.includes(char)) {
        if (resultArray.pop() !== char) return false;
      }
      else {
        resultArray.push(brackets[index + 1]);
      }
    } else {
      if (index % 2 == 0) resultArray.push(brackets[index + 1]);
      else {
        if (resultArray.pop() !== char) return false;
      }
    }

  }

  return resultArray.length === 0;
}
