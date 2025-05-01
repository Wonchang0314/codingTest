/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const output = [];

  const recursion = (current, open, close) => {
    if (current.length === n * 2) {
      output.push(current);
      return;
    }
    if (open > 0) {
      recursion(current + "(", open - 1, close);
    }

    if (open < close) {
      recursion(current + ")", open, close - 1);
    }
  };

  recursion("", n, n);
  return output;
};
