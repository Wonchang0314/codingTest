/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0 || nums.length === 1) return nums.length;

  let answer = 1;
  const sorted = [...new Set(nums)].sort((a, b) => a - b);

  let m = {};
  let key = 0;
  m[key] = [sorted[0]];
  let prev = sorted[0];

  for (let i = 1; i < sorted.length; i++) {
    if (prev + 1 === sorted[i]) {
      m[key].push(sorted[i]);
      prev = sorted[i];
    } else {
      key += 1;
      m[key] = [sorted[i]];
      prev = sorted[i];
    }
  }

  answer = Object.values(m).sort((a, b) => b.length - a.length)[0].length;
  return answer;
};
