/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let answer = "";
  const reversed = s.split(" ").reverse();

  reversed.forEach((str) => {
    if (str !== "") {
      answer += str + " ";
    }
  });

  return answer.trim();
};
