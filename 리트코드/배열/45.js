/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length === 1) return 0;
  let queue = [0];
  const visited = new Array(nums.length).fill(false);
  let jump = 0;

  while (queue.length) {
    let size = queue.length;
    jump += 1;

    for (let i = 0; i < size; i++) {
      let current = queue.shift();

      for (let j = 0; j <= nums[current]; j++) {
        let next = current + j;
        if (next >= nums.length - 1) return jump;

        if (!visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      }
    }
  }
  return -1;
};
