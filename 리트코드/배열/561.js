/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let answer = 0;

  for (let i = 0; i < nums.length; i += 2) {
    const a = nums[i];
    const b = nums[i + 1];
    const min = Math.min(a, b);
    answer += min;
  }

  return answer;
};
