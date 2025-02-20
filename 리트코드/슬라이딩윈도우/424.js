/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let answer = 0;
  let left = 0;
  const count = new Map();
  let maxFreq = 0;

  for (let right = 0; right < s.length; right++) {
    count.set(s[right], (count.get(s[right]) || 0) + 1);
    maxFreq = Math.max(count.get(s[right]), maxFreq);

    if (right - left + 1 - maxFreq > k) {
      count.set(s[left], count.get(s[left]) - 1);
      left += 1;
    }

    answer = Math.max(answer, right - left + 1);
  }

  return answer;
};
