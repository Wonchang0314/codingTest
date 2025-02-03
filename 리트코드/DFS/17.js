// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
// Return the answer in any order.
// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const chars = new Map();
  const answer = [];

  if (digits.length === 0) return answer;
  chars.set("0", []);
  chars.set("1", []);
  chars.set("2", ["a", "b", "c"]);
  chars.set("3", ["d", "e", "f"]);
  chars.set("4", ["g", "h", "i"]);
  chars.set("5", ["j", "k", "l"]);
  chars.set("6", ["m", "n", "o"]);
  chars.set("7", ["p", "q", "r", "s"]);
  chars.set("8", ["t", "u", "v"]);
  chars.set("9", ["w", "x", "y", "z"]);

  const recursion = (idx, list, current) => {
    if (current.length === digits.length) {
      answer.push(current);
      return;
    }
    list.forEach((char) => {
      recursion(idx + 1, chars.get(digits[idx + 1]), current + char);
    });
  };
  recursion(0, chars.get(digits[0]), "");
  return answer;
};
