/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (nums.length === 1 || k === 0) return nums;
  k = k % nums.length;
  if (k === 0) return nums;

  const temp = nums.slice(-k);
  nums.splice(-k, k);
  nums.unshift(...temp);
  return nums;
};
