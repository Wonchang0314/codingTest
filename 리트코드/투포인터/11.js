/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let start = 0;
  let end = height.length - 1;
  let answer = 0;

  while (start < end) {
    const h = Math.min(height[start], height[end]);
    const w = end - start;
    answer = Math.max(answer, h * w);

    if (height[start] < height[end]) {
      start += 1;
    } else end -= 1;
  }
  return answer;
};
