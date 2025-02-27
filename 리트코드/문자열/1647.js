// A string s is called good if there are no two different characters in s that have the same frequency.
// Given a string s, return the minimum number of characters you need to delete to make s good.
// The frequency of a character in a string is the number of times it appears in the string. For example, in the string "aab", the frequency of 'a' is 2, while the frequency of 'b' is 1.

/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
  let answer = 0;
  const m = new Map();

  for (let char of s) {
    {
      m.set(char, (m.get(char) || 0) + 1);
    }
  }

  const freqs = [...m.values()].sort((a, b) => b - a);
  const seen = new Set();

  for (let freq of freqs) {
    while (freq > 0 && seen.has(freq)) {
      freq -= 1;
      answer += 1;
    }
    seen.add(freq);
  }

  return answer;
};
