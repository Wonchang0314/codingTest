/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let answer = "";
  const romanMap = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let input = num;
  for (let [value, symbol] of romanMap) {
    while (input - value >= 0) {
      input -= value;
      answer += symbol;
    }
  }
  return answer;
};
