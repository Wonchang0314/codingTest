/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let answer = ["/"];
  const input = path.split("/").filter(Boolean);

  input.forEach((e, i) => {
    if (e === "..") {
      if (answer.length > 2) {
        answer.pop();
        answer.pop();
      }
    } else if (e !== ".") {
      answer.push(e);
      answer.push("/");
    }
  });
  if (answer.length > 1 && answer[answer.length - 1] === "/") answer.pop();
  return answer.join("");
};
