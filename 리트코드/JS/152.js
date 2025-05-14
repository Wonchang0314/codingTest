/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length === 1) return nums[0];
  let max = nums[0];
  let min = nums[0];
  let answer = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];
    let currentMax = Math.max(current, current * max, current * min);
    let currentMin = Math.min(current, current * max, current * min);

    max = currentMax;
    min = currentMin;
    answer = Math.max(answer, max);
  }

  return answer;
};
