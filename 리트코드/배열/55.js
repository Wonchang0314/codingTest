/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const visited = new Array(nums.length).fill(false);

  const recursion = (current) => {
    if (current >= nums.length - 1) return true;
    if (visited[current]) return false;
    visited[current] = true;

    for (let i = 0; i <= nums[current]; i++) {
      if (recursion(current + i)) return true;
    }
    return false;
  };
  return recursion(0);
};
