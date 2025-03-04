/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const memo = new Array(nums.length).fill(null);

  const recursion = (idx) => {
    if (idx >= nums.length) return true;
    if (memo[idx] !== null) return memo[idx];
    for (let i = 1; i <= nums[idx]; i++) {
      if (recursion(idx + 1)) return (memo[idx] = true);
    }
    return (memo[idx] = false);
  };
  return recursion(0);
};
