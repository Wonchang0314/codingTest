/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const subset = new Set();
  const answer = new Set();

  for (let i = 0; i <= s.length - 10; i++) {
    let current = s.substring(i, i + 10);
    if (subset.has(current)) {
      answer.add(current);
    } else {
      subset.add(current);
    }
  }

  return Array.from(answer);
};
