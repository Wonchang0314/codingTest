/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // const compare = new Array(nums.length + 1).fill(0);
  // for(let i = 1; i < compare.length; i++) {
  //     compare[i] = i;
  // }

  // nums.sort((a, b) => a - b);
  // for(let i = 0; i < nums.length; i++) {
  //     if(compare[i] !== nums[i]) return compare[i];
  // }
  // return compare[compare.length - 1];

  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((a, b) => a + b, 0);

  return expectedSum - actualSum;
};
