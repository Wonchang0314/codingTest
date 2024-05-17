function solution(binomial) {
  let arr = binomial.split(" ");
  let operator = [];
  let operand = [];
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(Number(arr[i]))) {
      if (arr[i] === "/") {
        let a = operand.pop();
        let b = arr[i + 1];
        operand.push(Math.floor(a / b));
        i += 1;
        continue;
      } else if (arr[i] === "*") {
        let a = operand.pop();
        let b = arr[i + 1];
        operand.push(a * b);
        i += 1;
        continue;
      } else {
        operator.push(arr[i]);
      }
    } else {
      operand.push(arr[i]);
    }
  }
  if (operator.length === 0) {
    return operand[0];
  }
  while (operator.length > 0 && operand.length > 0) {
    if (answer.length === 0) {
      let a = Number(operand.shift());
      let b = Number(operand.shift());
      let op = operator.shift();
      if (op === "+") {
        answer.push(a + b);
      } else {
        answer.push(a - b);
      }
    } else {
      let a = answer.shift();
      let b = Number(operand.shift());
      let op = operator.shift();
      if (op === "+") {
        answer.push(a + b);
      } else {
        answer.push(a - b);
      }
    }
  }
  return answer[0];
}

let ex1 = "15 + 12 - 7 * 3 * 1";
let ex2 = "10 + 2 * 3 - 5 / 1";
let ex3 = "25 / 5 + 3 * 2 - 4";
let ex4 = "5 * 6 - 10 + 8 / 4";
let ex5 = "40000 * 40000";
let ex6 = "0 - 7777";
let ex7 = "43 + 12";
